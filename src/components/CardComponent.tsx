import React from "react";

type CardProps = {
	title?: string;
	description?: string;
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
};

const CardComponent: React.FC<CardProps> = ({
	title,
	description,
	children,
	className,
	style,
}) => {
	return (
		<div
			className={`bg-slate-900 flex flex-col justify-center items-center pt-8 pb-8 px-8 rounded-3xl max-w-sm ${className}`}
			style={style}
		>
			{title && (
				<h2 className="text-white text-4xl font-bold text-center mb-4">
					{title}
				</h2>
			)}
			{description && (
				<p className="text-white text-1xl text-center mb-8">{description}</p>
			)}
			{children}
		</div>
	);
};

export default CardComponent;
