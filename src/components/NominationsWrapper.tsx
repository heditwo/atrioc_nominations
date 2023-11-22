"use client";

import React, { useState } from "react";
import { NominationsComponent } from "./NominationsComponent";
import { SubmitFormComponent } from "./SubmitFormComponent";

const NominationsWrapper = () => {
	const [selectedNomination, setSelectedNomination] = useState({
		title: "",
		description: "",
		backgroundColor: "#0F172A",
		id: -1,
	});

	return (
		<div className="flex w-2/3 flex-row justify-center m-auto gap-x-24 max-h-[36rem]">
			<NominationsComponent onNominationSelect={setSelectedNomination} />
			<SubmitFormComponent nomination={selectedNomination} />
		</div>
	);
};

export default NominationsWrapper;
