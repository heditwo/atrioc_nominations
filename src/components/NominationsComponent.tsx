import React, { useState } from "react";
import CategoriesComponent from "./CategoriesComponent";
import CardComponent from "./CardComponent";
import type { Nomination } from "./CategoriesComponent";

type NominationsComponentProps = {
	onNominationSelect: (nomination: Nomination) => void;
};

export const NominationsComponent: React.FC<NominationsComponentProps> = ({
	onNominationSelect,
}) => {
	return (
		<CardComponent title="Nominations" className="overflow-y-auto">
			<CategoriesComponent onNominationClick={onNominationSelect} />
		</CardComponent>
	);
};
