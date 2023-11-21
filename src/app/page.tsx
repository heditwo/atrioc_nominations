import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import NominationsWrapper from "@/components/NominationsWrapper";

export default async function Home() {
	const session = await getServerSession();

	if (!session) {
		redirect("/signin");
	}

	return (
		<div className="flex h-screen">
			<NominationsWrapper />
		</div>
	);
}
