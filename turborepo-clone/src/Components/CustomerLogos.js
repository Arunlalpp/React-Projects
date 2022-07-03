import React from "react";
import { teamLogos } from "../Constants";

function CustomerLogos() {
	return (
		<div className="bg-[#111111]">
			<div class="py-16 max-w-[90rem] w-full mx-auto  bg-[#111111]">
				<div class="max-w-6xl mx-auto ">
					<p class="text-sm font-semibold tracking-wide text-center text-gray-400 text-opacity-50 uppercase dark:text-gray-500">
						Trusted by teams from around the world
					</p>
					<div class="grid grid-cols-2 gap-8 mt-6 md:grid-cols-6">
						{teamLogos.map((teamLogo) => {
							return (
								<div class="flex justify-center col-span-1 filter contrast-50 grayscale dark:opacity-50 md:col-span-2 lg:col-span-1">
									<img class="h-6 " src={teamLogo.url} alt="Vercel" />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default CustomerLogos;
