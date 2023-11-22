"use client";
import React, { useEffect, useState } from "react";

type Category = {
	id: number;
	attributes: {
		title: string;
		description?: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
	};
};

type CategoryGroup = {
	id: number;
	attributes: {
		title: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		color: string;
		categories: {
			data: Category[];
		};
	};
};

export type Nomination = {
	title: string;
	description: string;
	backgroundColor: string;
	id: number;
};

type OnNominationClick = (nomination: Nomination) => void;

type NominationsComponentProps = {
	onNominationClick: OnNominationClick;
};

//TODO: strike out categories already submitted
const CategoriesComponent: React.FC<NominationsComponentProps> = ({
	onNominationClick,
}) => {
	const [categories, setCategories] = useState<CategoryGroup[]>([]);

	useEffect(() => {
		fetch(`${process.env.API_URL}/api/category-groups?populate=*`, {
			method: "GET",
			headers: new Headers({
				Authorization: `Bearer ${process.env.API_TOKEN}`,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				setCategories(data.data);
			})
			.catch((error) => console.error("Error fetching categories:", error));
	}, []);

	return (
		<div className="flex flex-col w-full gap-y-5 overflow-auto p-2 scrollbar-thin">
			{categories.map((categoryGroup) => (
				<div key={categoryGroup.id} className="bg-gray-700 rounded-2xl p-5">
					<h2 className="text-white text-2xl font-semibold mb-2">
						{categoryGroup.attributes.title}
					</h2>
					{categoryGroup.attributes.categories.data.map((category) => (
						<div
							key={category.id}
							className="flex space-x-2 items-center mb-2 hover:bg-gray-500 p-1"
							onClick={() =>
								onNominationClick({
									title: category.attributes.title,
									description: category.attributes.description!,
									backgroundColor: `#${categoryGroup.attributes.color}`,
									id: category.id,
								})
							}
						>
							<div
								className="w-5 h-5 rounded-full"
								style={{
									backgroundColor: `#${categoryGroup.attributes.color}`,
								}}
							></div>
							<h3 className="text-white text-xl font-normal">
								{category.attributes.title}
							</h3>
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default CategoriesComponent;
