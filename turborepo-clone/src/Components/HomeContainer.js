import React from "react";
import { ReactComponent as Arrow } from "./SvgFiles/Arrow.svg";

function HomeContainer() {
	return (
		<div className="max-w-[90rem] w-full mx-auto flex flex-1 items-stretch bg-[#111111]">
			<div className="w-auto px-4 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
				<h1 class="max-w-5xl text-center mx-auto text-6xl font-extrabold tracking-tighter leading-[1.1] sm:text-7xl lg:text-8xl xl:text-8xl text-white">
					Monorepos that
					<br />
					<span class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 ">
						make ship happen.
					</span>{" "}
				</h1>
				<p class="max-w-lg mx-auto mt-6 text-xl font-medium leading-tight text-center text-gray-400 sm:max-w-4xl sm:text-2xl md:text-3xl lg:text-4xl">
					Turborepo is a high-performance build system for JavaScript and
					TypeScript codebases.
				</p>
				<div class="max-w-xl mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
					<div class="rounded-md ">
						<a
							class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-black no-underline bg-white border border-transparent rounded-md dark:bg-white  betterhover:dark:hover:bg-gray-300 betterhover:hover:bg-gray-700 md:py-3 md:text-lg md:px-10 md:leading-6"
							href="/docs/getting-started"
						>
							Start Building →
						</a>
					</div>
					<div class="relative mt-3 rounded-md sm:mt-0 sm:ml-3">
						<button class="flex items-center justify-center w-full px-8 py-3 font-mono text-sm font-medium text-gray-600 bg-black border border-transparent border-gray-400 rounded-md bg-opacity-5 dark:bg-white dark:text-gray-300 dark:border-gray-700 dark:bg-opacity-5 betterhover:hover:bg-gray-50 betterhover:dark:hover:bg-gray-900 md:py-3 md:text-base md:leading-6 md:px-10">
							npx create-turbo
							<Arrow />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeContainer;
