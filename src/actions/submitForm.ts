"use server";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";

export const submitForm = async (formData: FormData) => {
	const session = await getServerSession();
	const prisma = new PrismaClient();

	if (!session || !session.user || !session.user.name) {
		return { error: "Something incredibly wrong has happened." };
	}

	const nominee = formData.get("nominee");
	const reason = formData.get("reason");
	const id = formData.get("id");
	const title = formData.get("title");

	if (
		!nominee ||
		typeof nominee !== "string" ||
		!reason ||
		typeof reason !== "string" ||
		!id ||
		typeof id !== "string"
	) {
		return { error: "Invalid form data." };
	}

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
};
