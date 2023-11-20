import Image from "next/image";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function Home() {
	const session = await getServerSession();

	if (!session) {
		redirect("/signin");
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4">
			<div className="flex flex-wrap justify-center gap-8 max-w-7xl w-full">
				{/* Nominations Section */}
				<div className="bg-slate-900 rounded-3xl shadow-lg p-8 flex-1 min-w-[300px] max-w-md">
					<h1 className="text-white text-5xl font-bold text-center mb-10">
						Nominations
					</h1>

					{/* Categories */}
					<div className="space-y-6">
						{/* General Categories */}
						<div className="bg-gray-700 rounded-2xl p-6">
							<h2 className="text-white text-3xl font-semibold mb-6">
								General Categories
							</h2>
							{/* Category Items */}
							{/* TODO: generate these through api */}
							<div className="flex space-x-2 items-center">
								<div className="w-4 h-4 bg-pink-500 rounded-full"></div>
								<h3 className="text-center text-white text-2xl font-normal">
									test
								</h3>
							</div>
						</div>

						{/* Moosic Categories */}
						<div className="bg-gray-700 rounded-2xl p-6">
							<h2 className="text-white text-3xl font-semibold mb-6">
								Moosic Categories
							</h2>
							{/* Category Items */}
							<div className="flex space-x-2 items-center">
								<div className="w-4 h-4 bg-blue-500 rounded-full"></div>
								<h3 className="text-center text-white text-2xl font-normal">
									test
								</h3>
							</div>
						</div>
					</div>
				</div>

				{/* Info Card Section */}
				<div className="bg-slate-900 rounded-3xl shadow-lg border-t-8 border-pink-500 p-8 flex-1 min-w-[300px] max-w-md">
					<h2 className="text-white text-5xl font-bold text-center mb-8">
						Biggest Boomer Moment
					</h2>
					<p className="text-white text-2xl text-center mb-8">
						Moments from streams past that made you go :BOOMER:
					</p>
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
				</div>
			</div>
		</div>
	);
}
