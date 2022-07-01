import React from "react";
import { ReactComponent as HeaderLogo } from "./SvgFiles/HeaderLogo.svg";
import { ReactComponent as Github } from "./SvgFiles/Github.svg";
import { ReactComponent as Discode } from "./SvgFiles/Discode.svg";
import { ReactComponent as Hamburger } from "./SvgFiles/Hamburger.svg";

function Header() {
	return (
		<div>
			<div className="">
				<div className="bg-black w-full h-full">
					<div className="max-w-[90rem] px-6 mx-auto h-16 flex flex-row items-center gap-2">
						<div className="flex flex-row items-center mr-2 flex-auto">
							<HeaderLogo className="text-white" />
						</div>
						<div className="flex-1"></div>
						<a
							className="whitespace-nowrap p-2  -ml-2 text-gray-600 md:inline-block hidden hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 text-[.875rem]"
							href="/"
						>
							Docs
						</a>
						<a
							className="whitespace-nowrap p-2 -ml-2 text-gray-600 md:inline-block hidden hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 text-[.875rem]"
							href="/"
						>
							Blog
						</a>
						<a
							className="whitespace-nowrap p-2 -ml-2 text-gray-600 md:inline-block hidden hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 text-[.875rem]"
							href="/"
						>
							Enterprise
						</a>
						<div className="md:inline-block hidden">
							<div className="relative w-full md:w-64">
								<div className="relative flex items-center">
									<input
										className="block w-full px-3 py-2 placeholder-gray-600 text-sm bg-[#292929] leading-tight rounded-lg appearance-none focus:outline-none focus:right-1 focus:right-gray-200 focus:bg-white hover:opacity-5 transition-colors dark:focus:bg-dark dark:focus:ring-gray-100 dark:focus:ring-opacity-20"
										type="search"
										placeholder="Search documentation..."
									></input>
									<div className="hidden sm:flex absolute inset-y-0 right-0 py-1.5 pr-1.5 select-none pointer-events-none">
										<kbd className="inline-flex items-center bg-[#1c1c1c] px-1.5 text-sm font-medium  dark:bg-black dark:bg-opacity-50 text-gray-400 dark:text-gray-500  dark:border-opacity-20 border border-gray-600 rounded">
											/
										</kbd>
									</div>
								</div>
							</div>
						</div>
						<div className="p-2">
							<Github className="text-white" />
						</div>
						<div className="p-2">
							<Discode className="text-white" />
						</div>
						<button className="md:hidden block">
							<div className="p-2">
								<Hamburger className="text-white" />
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
