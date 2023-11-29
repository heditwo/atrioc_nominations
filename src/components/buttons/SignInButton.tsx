"use client";
import React from "react";
import { signIn } from "next-auth/react";

export const SignInButton = () => {
	return (
		<>
			<button
				onClick={() => signIn("twitch", { callbackUrl: "/" })}
				className="w-full py-3 bg-white text-slate-900 rounded-md text-lg transition duration-300 ease-in-out hover:bg-slate-300"
			>
				SIGN IN
			</button>
		</>
	);
};
