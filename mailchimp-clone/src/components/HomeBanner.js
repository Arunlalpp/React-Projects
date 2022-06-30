import React from "react";
import Banner from "../Images/Banner.webp";

function HomeBanner() {
	return (
		<div>
			<div className="bg-full bg-[#ffe01b] pb-[120px] lg:pt-[120px] pt-[5.8rem] lg:pb-[50px] ">
				<div className="box-border max-w-[1600px] mx-auto px-[1.875rem]">
					<div className="mx-auto items-center lg:flex flex-row lg:w-[80%] md:w-[75%]">
						<span className=" text-[#403b3b] lg:w-[50%] md:w-[75%]">
							<div className="w-ful mt-[1.875rem]">
								<h1
									className="text-[2.5rem] lg:text-[48px] tracking-[.03125rem] leading-[1] text-[#241c15] mt-[1.875rem] font-[450]"
									style={{
										fontFamily: "Means Web,Georgia,Times,Times New Roman,serif",
									}}
								>
									Grow your audience and your revenue
								</h1>
								<p
									className="mt-[1.875rem] text-[1.25rem] leading-[1.4] text-[#241c15] font-light tracking-[0]"
									style={{
										fontFamily:
											"Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif",
										fontWeight: "lighter",
									}}
								>
									Win over new and repeat customers by sending emails and
									automations from a marketing platform that has expert advice
									built in.
								</p>
							</div>
							<div className="flex  flex-row mt-[3rem] mr-[1.25rem] items-center flex-wrap">
								<div className="mr-[1.25rem]">
									<a
										href="/"
										className="text-white bg-[#007c89] font-semibold text-[#fff] text-[.9375rem] py-[20px] px-[40px] text-center cursor-pointer leading-[20.25px]"
										style={{
											fontFamily:
												"Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif",
										}}
									>
										Sign Up
									</a>
								</div>
								<div className=" lg:mt-0 text-[#403b3b] border-none font-medium text-[.9375rem] py-0 ">
									<a href="/">Compare Plans</a>
								</div>
							</div>
						</span>
						<div className="pt-[4.9rem] lg:pt-0 w-[365.931px] h-[273.466px] lg:w-[50%] lg:h-auto md:w-full md:h-auto">
							<picture>
								<img className="block  w-full h-auto " src={Banner} alt="" />
							</picture>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeBanner;
