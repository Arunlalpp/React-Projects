import React from "react";

function NewsLetter() {
	return (
		<section className="bg-transparent">
			<div className="max-w-3xl px-6 py-8 mx-auto text-center">
				<div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
					<input
						id="email"
						type="text"
						className="px-4 py-2 text-gray-700 bg-white border  sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
						placeholder="Email Address"
					/>

					<button className="px-4 py-2 text-sm font-medium md:w-full w-3/6 tracking-wide text-white capitalize transition-colors duration-200 transform bg-[#e50914] rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
						Get Started
					</button>
				</div>
			</div>
		</section>
	);
}

export default NewsLetter;
