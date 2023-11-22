"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import big_a from "../../public/big_a.png";

export default function LoginPage() {
	const { data: session } = useSession();

	return (
		<div className="flex justify-center items-center h-screen">
			<div className="bg-slate-900 rounded-xl shadow-lg flex flex-col items-center py-12 px-6 w-full max-w-md">
				{/* User Avatar and Name */}
				<div className="relative w-full flex flex-col items-center">
					<Image
						src={session?.user?.image || big_a}
						width={150}
						height={150}
						alt={session?.user?.name ? session.user.name : "Placeholder Avatar"}
						className="rounded-full"
					/>
					<div className="text-center text-white text-3xl mt-4 font-semibold">
						{session ? session.user?.name : "chatter"}
					</div>
					<div className="mt-8 w-full">
						{session ? (
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
						) : (
							<>
								<button
									onClick={() => signIn("twitch", { callbackUrl: "/" })}
									className="w-full py-3 bg-white text-slate-900 rounded-md text-lg transition duration-300 ease-in-out hover:bg-slate-300"
								>
									SIGN IN
								</button>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
