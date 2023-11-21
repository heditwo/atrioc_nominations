import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { NominationsComponent } from "@/components/NominationsComponent";
import { SubmitFormComponent } from "@/components/SubmitFormComponent";
import NominationsWrapper from "@/components/NominationsWrapper";

export default async function Home() {
	const session = await getServerSession();

	if (!session) {
		redirect("/signin");
	}

	return (
		<div className="flex bg-thumb bg-purple1 bg-cover bg-top h-screen">
			<NominationsWrapper />
		</div>
	);
}
