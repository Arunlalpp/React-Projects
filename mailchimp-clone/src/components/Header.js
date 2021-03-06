import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import MailchimpLogo from "./MailchimpLogo";
import HeaderButton from "./Shared/HeaderButton";

function Header() {
	const [headerColor, setHeaderColor] = useState("");

	const listenScrollEvent = () => {
		window.scrollY > 200 ? setHeaderColor("white") : setHeaderColor("#ffe01b");
	};

	useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent);
		window.addEventListener("hover", listenScrollEvent);
	});
	return (
		<div className="lg:block hidden">
			<div
				className="bg-[#ffe01b] hover:bg-[#fff] cursor-pointer fixed left-0 right-0 top-0 z-10 "
				style={{ background: headerColor }}
			>
				<div className="max-w-[95%] w-full mx-auto box-border ">
					<div className="flex flex-row justify-between items-center h-[7rem]">
						<div className="">
							<ul
								className="flex flex-row  gap-[2rem] "
								style={{
									fontFamily:
										"Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif",
								}}
							>
								<li className="text-[18px] text-Primary p-[0.75rem] font-semibold hover:underline hover:text-[#004e56]">
									Products
								</li>
								<li className="text-[18px] text-Primary p-[0.75rem] font-semibold hover:underline hover:text-[#004e56]">
									Resources
								</li>
								<li className="text-[18px] text-Primary p-[0.75rem] font-semibold hover:underline hover:text-[#004e56]">
									Inspiratin
								</li>
								<li className="text-[18px] text-Primary p-[0.75rem] font-semibold hover:underline hover:text-[#004e56]">
									Pricing
								</li>
							</ul>
						</div>

						<MailchimpLogo />

						<div className="flex flex-row items-center gap-7">
							<div className="flex flex-row items-center gap-4">
								<span className="text-[20px]">
									Sales: <span className="text-[20px]">+1 (800) 315-5939</span>
								</span>
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="18"
									viewBox="0 0 18 18"
								>
									<path
										d="M9 0C4.03.02 0 4.04 0 9a9 9 0 109-9zm.37 12.22V9.38h3.6c-.02 1.18-.16 2.3-.42 3.36a13.6 13.6 0 00-3.18-.52zm1.9 4.7a8 8 0 001.8-3.24c.98.33 1.7.68 2.03.87a8.16 8.16 0 01-3.83 2.38zm-1.9.29v-4.25c.98.06 1.98.22 2.97.5-.66 2.12-1.77 3.5-2.97 3.75zm3.64-13.02a8.22 8.22 0 00-1.74-3.12c1.4.4 2.68 1.16 3.7 2.23-.63.37-1.28.67-1.96.9zm-.04 4.43h-3.6V5.58c1.07-.02 2.12-.15 3.14-.45.28 1.1.43 2.27.46 3.5zm-3.6-3.8V.79c1.16.24 2.25 1.57 2.92 3.62-.92.26-1.92.4-2.92.4zm7.87 4.56a8.22 8.22 0 01-1.64 4.58c-.32-.19-1.15-.61-2.33-1.02.28-1.1.42-2.3.46-3.56h3.51zm0-.76h-3.5a14.88 14.88 0 00-.5-3.7c.75-.27 1.5-.62 2.23-1.02 1.09 1.36 1.7 2.99 1.77 4.72zM4.71 12.87c-.8.27-1.57.64-2.3 1.09A8.22 8.22 0 01.75 9.38h3.5c.05 1.24.2 2.4.45 3.49zM.76 8.62a8.11 8.11 0 011.77-4.74c.4.22 1.18.6 2.26.96a16.3 16.3 0 00-.52 3.8H.76v-.02zm4.16 4.99a7.89 7.89 0 001.8 3.32 8.16 8.16 0 01-3.82-2.38c.65-.39 1.33-.7 2.02-.94zm.1-4.23h3.61v2.82c-1.09.02-2.16.17-3.2.45a15.35 15.35 0 01-.4-3.27zm3.61 3.56v4.27c-1.22-.24-2.33-1.67-3-3.84.97-.26 1.97-.41 3-.43zm0-7.38v3.06h-3.6c.02-1.25.2-2.47.48-3.58 1.03.3 2.09.46 3.12.52zM3.05 3.3A8.13 8.13 0 016.73 1.1c-.7.72-1.3 1.75-1.72 3.05a14.6 14.6 0 01-1.96-.84zM8.63.8v4c-.96-.06-1.94-.2-2.9-.48.66-1.98 1.74-3.29 2.9-3.53z"
										fill="#241c15"
										fill-rule="nonzero"
									></path>
								</svg>
								<AiOutlineSearch className="text-[24px]" />
							</div>
							<div>
								<HeaderButton Header="Login" />
							</div>
							<div className="">
								<a
									href="/"
									className="text-white bg-[#007c89] font-semibold text-[16px] py-[16px] px-[20px] text-center cursor-pointer leading-[21.6px]"
									style={{
										fontFamily:
											"Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif",
									}}
								>
									Sign Up Free
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
