import React from "react";
import { customerLogos } from "../Constants";

function CustomerExperience() {
	return (
		<div className="bg-[#f6f6f4]">
			<div className="py-[5rem]">
				<div className="w-full box-border max-w-[1600px] mx-auto px-[1.875rem]">
					<>
						<div className="w-[75%] mx-auto text-center">
							<h2
								className="mb-[20px] text-Primary text-[2.5rem] font-[350] leading-[1] tracking-[.03125rem]"
								style={{
									fontFamily: "Means Web,Georgia,Times,Times New Roman,serif",
								}}
							>
								Grow with Mailchimp
							</h2>
							<h2 className="font-[300] text-[1.125rem] tracking-[0] lg:tracking-wider leading-[1.5] lg:text-[1.25rem]">
								Our marketing platform helps over 13 million businesses like
								these build their thing and keep it growing.
							</h2>
						</div>
						<div className="text-center lg:flex flex-row lg:w-[65%] justify-between items-center m-auto">
							{customerLogos.map((customerLogo) => {
								return (
									<div className="lg:p-[2.5rem]">
										<img
											className="block max-w-[140px] w-[140px]  m-auto"
											src={customerLogo.Logo}
											alt=""
										/>
										<p className="text-[#403b3b] text-[16px] font-[400] leading-[1.5] tracking-[0] mt-[1.25rem]">
											{customerLogo.Text}
										</p>
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

export default CustomerExperience;
