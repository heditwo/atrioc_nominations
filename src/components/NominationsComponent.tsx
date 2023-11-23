import React from "react";
import CategoriesComponent from "./CategoriesComponent";
import CardComponent from "./CardComponent";
import type { Nomination, CategoryGroup } from "./CategoriesComponent";
import type { SubmittedCategories } from "@/app/page";

type NominationsComponentProps = {
	onNominationSelect: (nomination: Nomination) => void;
	categories: CategoryGroup[];
	submittedCategories: SubmittedCategories;
	className: string;
};

export const NominationsComponent: React.FC<NominationsComponentProps> = ({
	onNominationSelect,
	categories,
	submittedCategories,
	className,
}) => {
	return (
		<CardComponent
			title="Nominations"
			className={`overflow-y-auto ${className}`}
		>
			<CategoriesComponent
				onNominationClick={onNominationSelect}
				categories={categories}
				submittedCategories={submittedCategories}
			/>
		</CardComponent>
	);
};
