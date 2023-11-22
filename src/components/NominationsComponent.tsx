import React, { useState } from "react";
import CategoriesComponent from "./CategoriesComponent";
import CardComponent from "./CardComponent";
import type { Nomination, CategoryGroup } from "./CategoriesComponent";
import type { SubmittedCategories } from "@/app/page";

type NominationsComponentProps = {
	onNominationSelect: (nomination: Nomination) => void;
	categories: CategoryGroup[];
	submittedCategories: SubmittedCategories;
};

export const NominationsComponent: React.FC<NominationsComponentProps> = ({
	onNominationSelect,
	categories,
	submittedCategories,
}) => {
	return (
		<CardComponent title="Nominations" className="overflow-y-auto">
			<CategoriesComponent
				onNominationClick={onNominationSelect}
				categories={categories}
				submittedCategories={submittedCategories}
			/>
		</CardComponent>
	);
};
