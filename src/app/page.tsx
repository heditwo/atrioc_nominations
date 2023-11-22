import React from "react";
import { redirect } from "next/navigation";
import { Session, getServerSession } from "next-auth";
import NominationsWrapper from "@/components/NominationsWrapper";
import prisma from "@/lib/prisma";

export type SubmittedCategories = number[] | { error: string };

const getCategories = async () => {
	const categories = await fetch(
		`${process.env.API_URL}/api/category-groups?populate=*`,
		{
			method: "GET",
			headers: new Headers({
				Authorization: `Bearer ${process.env.API_TOKEN}`,
			}),
		}
	);
	return categories.json();
};

const getSubmittedCategories = async (
	session: Session
): Promise<SubmittedCategories> => {
	if (!session || !session.user || !session.user.name) {
		return { error: "Something has gone very wrong." };
	}
	try {
		const submissions = await prisma.submission.findMany({
			where: { name: session.user.name },
			select: { categoryId: true },
		});

		const submittedCategoryIds = submissions.map(
			(submission) => submission.categoryId
		);
		return submittedCategoryIds;
	} catch (error) {
		console.error("Error fetching submitted categories:", error);
		return { error: "Error fetching submitted categories" };
	}
};

export default async function Home() {
	const session = await getServerSession();
	const categories = await getCategories();

	if (!session) {
		redirect("/signin");
	}
	const submittedCategories = await getSubmittedCategories(session);

	return (
		<div className="flex h-screen">
			<NominationsWrapper
				categories={categories.data}
				submittedCategories={submittedCategories}
			/>
		</div>
	);
}
