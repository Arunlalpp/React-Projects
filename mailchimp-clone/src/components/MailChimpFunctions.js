import React from "react";
import Button from "./Shared/Button";
import { mailchimpDatas } from "../Constants";
import { WhyMailchimp } from "../Images/Index";

function MailChimpFunctions() {
	return (
		<div className="bg-white my-[6.25rem]">
			<div className="mb-[80px]">
				<div className="w-full box-border max-w-[1600px] mx-auto px-[1.875rem] text-center flex flex-col ">
					<h1
						className="text-[2.5rem] leading-[1] lg:tracking-[.3125rem] text-Primary font-light"
						style={{
							fontFamily: "Means Web,Georgia,Times,Times New Roman,serif",
						}}
					>
						Do it all with Mailchimp
					</h1>
					<div
						className="mt-[1.875rem]"
						style={{
							fontFamily:
								"Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif",
						}}
					>
						<p className="text-[1rem] font-normal leading-[1.5] tracking-[0] text-Primary text-center">
							Bring your audience data, marketing channels, and insights
							together so you can work on reaching your goals faster—all from a
							single platform.
						</p>
					</div>
				</div>
			</div>
			<div className="bg-white">
				<div className="w-full box-border max-w-[1600px] px-[1.875rem] mx-auto ">
					{mailchimpDatas.map((mailchimpData) => {
						return (
							<>
								<div className="lg:flex lg:flex-row-reverse lg:items-center lg:justify-center lg:justify-between">
									<div className="pt-[3.75rem] lg:w-[577.5px] lg:pr-[126.241px]">
										<img src={mailchimpData.url} alt="" />
									</div>
									<div className="mt-[60px] lg:w-[577.5px] lg:pl-[57.7474px]">
										<h2
											className="leading-[21.6px] text-[28px] text-Primary tracking-[0] font-light"
											style={{
												fontFamily:
													"Means Web,Georgia,Times,Times New Roman,serif",
											}}
										>
											{mailchimpData.Title}
										</h2>
										<div
											className="mt-[2.5rem] text-[16px] text-Secondary leading-[1.35]"
											style={{
												fontFamily:
													"Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif",
											}}
										>
											{mailchimpData.SubText}
										</div>
										<div className="mt-[2.5rem]">
											<Button Content={mailchimpData.Button} />
										</div>
									</div>
								</div>
							</>
						);
					})}
					<div className="">
						<img src={WhyMailchimp} alt="" />
					</div>
					<div className="">
						<p
							className="mb-[1.25rem] leading-[1.35] text-[#403b3b] text-[18.72px]"
							style={{
								fontFamily: "Means Web,Georgia,Times,Times New Roman,serif",
							}}
						>
							Since using Mailchimp, I feel so much more confident in managing
							all our marketing. Like I got this.
						</p>
						<p
							className="text-[#727070] text-[.8125rem] "
							style={{
								fontFamily:
									"Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif",
							}}
						>
							– Marissa Axell, co-founder of 17th Street Athletic Club{" "}
						</p>
					</div>
					<div className="mt-[3rem]">
						<div className="flex flex-row gap-[5rem]">
							<div className="w-[25vw]">
								<span
									className="text-[3.125rem] text-[#403b3b] m-0"
									style={{
										fontFamily: "Means Web,Georgia,Times,Times New Roman,serif",
									}}
								>
									37%
								</span>
								<h1 className="text-[14px] font-light">
									lift on online bookings
								</h1>
							</div>
							<div className="w-[25vw]">
								<span
									className="text-[3.125rem] text-[#403b3b] m-0"
									style={{
										fontFamily: "Means Web,Georgia,Times,Times New Roman,serif",
									}}
								>
									250%
								</span>
								<h1 className="text-[14px] font-light">
									increase in email signups
								</h1>
							</div>
						</div>
						<div className="mt-[1.25rem]">
							<span className="text-[#727070] text-[14px] m-0">
								Results not typical.
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MailChimpFunctions;
