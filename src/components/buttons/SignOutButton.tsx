"use client";
import React from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";

export const SignOutButton = () => {
	return (
		<>
			<button
				onClick={() => signOut()}
				className="w-full py-3 bg-white text-slate-900 rounded-md text-lg transition duration-300 ease-in-out hover:bg-slate-300"
			>
				LOGOUT
			</button>
			<Link
				className="block mt-4 w-full py-3 bg-white text-center text-slate-900 rounded-md text-lg transition duration-300 ease-in-out hover:bg-slate-300"
				href="/"
			>
				HOME
			</Link>
		</>
	);
};
