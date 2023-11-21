import React from "react";
import CardComponent from "./CardComponent";
import type { Nomination } from "./CategoriesComponent";

type SubmitFormComponentProps = {
	nomination: Nomination;
};

export const SubmitFormComponent = ({
	nomination,
}: SubmitFormComponentProps) => {
	const borderColorStyle = {
		borderTopColor: nomination.backgroundColor,
	};
	console.log(nomination);
	return (
		<CardComponent
			title={nomination.title}
			description={nomination.description}
			className="border-t-8"
			style={borderColorStyle}
		>
			{/* Info Card Content */}
			<form className="space-y-4">
				<div className="bg-gray-500 rounded-xl p-4">
					<input
						type="text"
						placeholder="Clip URL"
						className="w-full p-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
					/>
				</div>

				<div className="bg-gray-500 rounded-xl p-4">
					<textarea
						placeholder="Description"
						className="w-full h-40 p-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
					></textarea>
				</div>

				{/* Submit Button */}
				<div className="mt-4">
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
