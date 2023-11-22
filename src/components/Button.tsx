import React from "react";
import { useFormStatus } from "react-dom";

type ButtonProps = {
	isSubmitted: boolean;
};

function Button({ isSubmitted }: ButtonProps) {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			className="w-full py-2 bg-white text-slate-900 rounded-md text-lg"
			disabled={isSubmitted}
		>
			{pending ? "Submitting..." : "Submit"}
		</button>
	);
}

export default Button;
