import React from "react";
import CardComponent from "./CardComponent";
import type { Nomination } from "./CategoriesComponent";
import { submitForm } from "@/actions/submitForm";

type SubmitFormComponentProps = {
	nomination: Nomination;
};

export const SubmitFormComponent = ({
	nomination,
}: SubmitFormComponentProps) => {
	const borderColorStyle = {
		borderTopColor: nomination.backgroundColor,
	};
	return (
		// TODO: Disable form submission if already submitted
		<CardComponent
			title={nomination.title}
			description={nomination.description}
			className="border-t-[24px]"
			style={borderColorStyle}
		>
			<form className="space-y-4" action={submitForm}>
				<div className="bg-gray-500 rounded-xl p-4">
					<input
						type="text"
						placeholder="Nominee"
						className="w-full p-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
						name="nominee"
					/>
				</div>

				<div className="bg-gray-500 rounded-xl p-4">
					<textarea
						placeholder="Your case..."
						className="w-full h-40 p-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
						name="reason"
					></textarea>
				</div>
				<div className="mt-4">
					<input className="hidden" name="id" defaultValue={nomination.id} />
					<input
						className="hidden"
						name="title"
						defaultValue={nomination.title}
					/>
					<button
						type="submit"
						className="w-full py-2 bg-white text-slate-900 rounded-md text-lg"
					>
						Submit
					</button>
				</div>
			</form>
		</CardComponent>
	);
};
