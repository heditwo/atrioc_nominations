"use client";
import React, { useState } from "react";
import { NominationsComponent } from "./NominationsComponent";
import { SubmitFormComponent } from "./SubmitFormComponent";
import type { SubmittedCategories } from "@/app/page";
import type { CategoryGroup } from "./CategoriesComponent";

type NominationsWrapperComponentProps = {
	categories: CategoryGroup[];
	submittedCategories: SubmittedCategories;
};

const NominationsWrapper = ({
	categories,
	submittedCategories,
}: NominationsWrapperComponentProps) => {
	const [selectedNomination, setSelectedNomination] = useState({
		title: "",
		description: "",
		backgroundColor: "#0F172A",
		id: -1,
	});

	const isNominationSelected = selectedNomination.title !== "";

	return (
		<div className="flex flex-col md:flex-row w-full md:w-2/3 justify-center m-auto gap-x-0 md:gap-x-24 max-h-[36rem]">
			<NominationsComponent
				onNominationSelect={setSelectedNomination}
				categories={categories}
				submittedCategories={submittedCategories}
				className={`${isNominationSelected ? "hidden md:flex" : "flex"}`}
			/>

			{isNominationSelected && (
				<SubmitFormComponent
					nomination={selectedNomination}
					submittedCategories={submittedCategories}
					className="mt-4 md:mt-0"
					setSelectedNomination={setSelectedNomination}
				/>
			)}
		</div>
	);
};

export default NominationsWrapper;
