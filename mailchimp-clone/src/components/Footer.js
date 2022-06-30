import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { footerLinks } from "../Constants";
import FooterSocialicons from "./FooterSocialicons";

function Footer() {
	return (
		<div className="bg-[#efeeea] ">
			<div className="box-border max-w-[1600px] mx-auto px-[1.875rem] lg:pt-0 pt-[5rem] pb-[2rem] border-b-[1px] border-black">
				<div className=" lg:block lg:flex-row gap-6 justify-between   lg:pt-[7.5rem] lg:pb-[4rem]">
					<div className=" flex lg:flex-row justify-between lg:justify-center gap-6 lg:gap-20 flex-col w-auto">
						{footerLinks?.map((footerLink) => {
							return (
								<div className="text-black">
									<div className="mb-[24px] leading-[16px] tracking-[0]">
										<span
											className="text-[16px] text-[#241c15] mb-[1.5rem] m-0 font-semibold"
											style={{
												fontFamily:
													"Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif",
											}}
										>
											{footerLink.title}
										</span>
									</div>
									{footerLink?.contents?.map((content) => {
										return (
											<div
												className="text-[#241c15] text-[.8125rem] p-[1px] whitespace-nowrap leading-7 mb-[.625rem]"
												style={{
													fontFamily:
														"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
												}}
												key={content.text}
											>
												<button className="border-none hover:underline ">
													{content.text}
												</button>
											</div>
										);
									})}
								</div>
							);
						})}
						<div className=" flex flex-col gap-8 lg:gap-24">
							<div className="">
								<img
									className="w-[40%] lg:w-[70%] mb-2"
									src="https://eep.io/images/yzco4xsimv0y/73ZAoe8O3Y7SXQLeCNTq5u/8ddf1f63b4abdf7f67149d3a9d74a0bd/MCP.svg?w=260&fm=webp&q=80"
									alt=""
								/>
								<span
									className="text-[14px] text-Primary font-medium leading-[0]"
									style={{
										fontFamily: "Means Web,Georgia,Times,Times New Roman,serif",
									}}
								>
									Films, podcasts, and original series that
									<br /> celebrate the entrepreneurial spirit.
								</span>
								<div className="mt-[0.75rem] flex flex-row items-center gap-2">
									<span className="text-[14px]">Check it out </span>
									<BsArrowRight className=" text-[20px] fill-black" />
								</div>
							</div>
							<div className="">
								<img
									className="w-[40%] lg:w-[70%] mb-2"
									src="https://eep.io/images/yzco4xsimv0y/5itQmdXHB6vMuAcvyWp5MR/ef5cd2cecd4c92b7029a22ec67585c65/Courier.svg?w=260&fm=webp&q=80"
									alt=""
								/>
								<span
									className="text-[14px] text-Primary font-medium leading-[0]"
									style={{
										fontFamily: "Means Web,Georgia,Times,Times New Roman,serif",
									}}
								>
									Expert insights, industry trends, <br />
									and inspiring stories that help you live and work <br /> on
									your own terms.
								</span>
								<div className="mt-[0.75rem] flex flex-row items-center gap-2">
									<span className="text-[14px]">Learn more </span>
									<BsArrowRight className=" text-[20px] fill-black" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <hr className="pt-[2rem] text-black " /> */}
			<FooterSocialicons />
		</div>
	);
}

export default Footer;
