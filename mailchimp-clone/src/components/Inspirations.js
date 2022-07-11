import React from "react";
import { insiprationDatas } from "../Constants";

function Inspirations() {
	return (
		<div className="bg-[#fbeeca]">
			<div className="py-[5rem]">
				<div className="w-full box-border max-w-[1600px] mx-auto px-[1.875rem]">
					<>
						<div className="mx-auto text-center mb-[5rem]">
							<h2
								className="mb-[20px] text-Primary text-[2.5rem] font-[350] leading-[1] tracking-[.03125rem]"
								style={{
									fontFamily: "Means Web,Georgia,Times,Times New Roman,serif",
								}}
							>
								Keep pushing forward. We've got your back.
							</h2>
						</div>
						<div className="text-center lg:flex flex-row lg:w-[65%] justify-between items-center m-auto w-[78%]">
							{insiprationDatas.map((insiprationData) => {
								return (
									<div className="lg:p-[2.5rem]">
										<img
											className="block max-w-[140px] w-[140px]  m-auto  mb-[1.875rem]"
											src={insiprationData.Logo}
											alt=""
										/>
										<p
											className="text-[#241c15] text-[1.25rem] font-[400] leading-[1.5] tracking-[0] mb-[1.25rem]"
											style={{
												fontFamily:
													"Means Web,Georgia,Times,Times New Roman,serif",
											}}
										>
											{insiprationData.Title}
										</p>
										<div className="mb-[1.25rem] text-center ">
											<p>{insiprationData.Description}</p>
										</div>
										<div className="cursor-pointer text-[#004e56] px-0 font-medium ">
											<a href="/">{insiprationData.DetailsButton}</a>
										</div>
									</div>
								);
							})}
						</div>
					</>
				</div>
			</div>
		</div>
	);
}

export default Inspirations;
