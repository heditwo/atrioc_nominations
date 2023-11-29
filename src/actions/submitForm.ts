"use server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { revalidateTag, revalidatePath } from "next/cache";
import { z } from "zod";

const formDataSchema = z.object({
	nominee: z.string(),
	reason: z.string(),
	id: z.string().regex(/^\d+$/), // regex check to make sure it's only numbers being submitted
	title: z.string().optional(),
});

export const submitForm = async (formData: FormData) => {
	const session = await getServerSession();

	if (!session || !session.user?.name) {
		return { error: "Something incredibly wrong has happened." };
	}

	const validationResult = formDataSchema.safeParse({
		nominee: formData.get("nominee"),
		reason: formData.get("reason"),
		id: formData.get("id"),
		title: formData.get("title"),
	});

	if (!validationResult.success) {
		return { error: "Invalid form data." };
	}

	const { nominee, reason, id, title } = validationResult.data;

	const existingSubmission = await prisma.submission.findFirst({
		where: {
			name: session.user.name,
			categoryId: parseInt(id),
		},
	});

	if (existingSubmission) {
		return {
			error: "You have already submitted a nomination for this category.",
		};
	}

	const newSubmission = await prisma.submission.create({
		data: {
			name: session.user.name,
			nominee: nominee,
			reason: reason,
			categoryId: parseInt(id),
		},
	});

	if (!newSubmission) {
		return { error: "Failed to create a new submission." };
	}

	const discordWebhookUrl = process.env.DISCORD_WEBHOOK;
	if (discordWebhookUrl) {
		await fetch(discordWebhookUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				content: `New submission received:\n- Nominator: ${session.user.name}\n- Nominee: ${nominee}\n- Reason: ${reason}\n- Category ID: ${id}\n- Title: ${title}`,
			}),
		});
	}
	revalidatePath("/");
};
