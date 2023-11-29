import { signIn, signOut, useSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import Image from "next/image";
import Link from "next/link";
import big_a from "../../public/big_a.png";
import { SignInButton } from "./buttons/SignInButton";
import { SignOutButton } from "./buttons/SignOutButton";

export default async function LoginPage() {
	const session = await getServerSession();

	return (
		<div className="flex justify-center items-center h-screen">
			<div className="bg-slate-900 rounded-xl shadow-lg flex flex-col items-center py-12 px-6 w-full max-w-md m-4">
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
						{session ? <SignOutButton /> : <SignInButton />}
					</div>
				</div>
			</div>
		</div>
	);
}
