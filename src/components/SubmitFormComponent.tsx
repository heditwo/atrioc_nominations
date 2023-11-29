import React from "react";
import CardComponent from "./CardComponent";
import type { Nomination } from "./CategoriesComponent";
import { submitForm } from "@/actions/submitForm";
import type { SubmittedCategories } from "@/app/page";
import { useRef } from "react";
import Button from "./buttons/Button";

type SubmitFormComponentProps = {
	nomination: Nomination;
	submittedCategories: SubmittedCategories;
	className: string;
	setSelectedNomination: (nomination: Nomination) => void;
};

export const SubmitFormComponent = ({
	nomination,
	submittedCategories,
	className,
	setSelectedNomination,
}: SubmitFormComponentProps) => {
	const borderColorStyle = {
		borderTopColor: nomination.backgroundColor,
	};

	const isSubmitted =
		Array.isArray(submittedCategories) &&
		submittedCategories.includes(nomination.id);

	const ref = useRef<HTMLFormElement>(null);
	return (
		<CardComponent
			title={nomination.title}
			description={nomination.description}
			className={`border-t-[24px] ${className}`}
			style={borderColorStyle}
		>
			<form
				className="space-y-4"
				action={async (formData) => {
					ref.current?.reset();
					await submitForm(formData);
					setSelectedNomination({
						title: "",
						description: "",
						backgroundColor: "#0F172A",
						id: -1,
					});
				}}
				ref={ref}
			>
				<div className="bg-gray-500 rounded-xl p-4">
					<input
						type="text"
						placeholder="Nominee"
						className="w-full p-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
						name="nominee"
						disabled={isSubmitted}
					/>
				</div>

				<div className="bg-gray-500 rounded-xl p-4">
					<textarea
						placeholder="Your case..."
						className="w-full h-40 p-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
						name="reason"
						disabled={isSubmitted}
					></textarea>
				</div>
				<div className="mt-4">
					<input className="hidden" name="id" defaultValue={nomination.id} />
					<input
						className="hidden"
						name="title"
						defaultValue={nomination.title}
					/>
					<Button isSubmitted={isSubmitted} />
				</div>
			</form>
		</CardComponent>
	);
};
