import React from "react";
import { cardDatas } from "../Constants";

function CradContainer() {
	return (
		<div className="bg-[#111111]">
			<div className="py-16 max-w-[90rem] w-full mx-auto">
				<div className="px-4 py-16 mx-auto sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24">
					<h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl xl:text-6xl lg:text-center text-white">
						Build like the best
					</h2>
					<p className="mx-auto mt-4 text-lg font-medium text-gray-400 lg:max-w-3xl lg:text-xl lg:text-center">
						Turborepo reimagines build system techniques used by Facebook and
						Google to remove maintenance burden and overhead.
					</p>
					<div class="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
						{cardDatas.map((cardData) => {
							return (
								<div class="p-10 bg-[#1d1d1d] shadow-lg rounded-xl bg-opacity-2 ">
									<div className="h-8 w-8 text-white rounded-full p-1.5 bg-white dark:bg-opacity-1 bg-opacity-10 grid place-content-center">
										{cardData.Icon}
									</div>
									<div class="mt-4">
										<h3 class="text-lg font-medium text-white">
											{cardData.Title}
										</h3>
										<p class="mt-6 text-base font-medium text-gray-500 dark:text-gray-400">
											{cardData.SubText}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default CradContainer;
