import React from "react";
import { footerLinks } from "./Constants";

function Footer() {
	return (
		<div className="bg-black">
			<div className="box-border max-w-[1000px] mx-auto border-b-[1px] border-black">
				<div className="lg:pt-[7.5rem] lg:pb-[4rem]">
					<div className="flex justify-start text-[#737373]">
						<span>Questions? Call 000-800-040-1843 </span>
					</div>
					<div className="grid grid-cols-2 md:grid md:grid-cols-4 w-[90%] mx-auto">
						{footerLinks?.map((footerLink) => {
							return (
								<div
									className="text-[#737373] text-[.8125rem] p-[1px] whitespace-nowrap leading-7"
									key={footerLink.text}
								>
									<button className="border-none hover:underline ">
										{footerLink.text}
									</button>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
