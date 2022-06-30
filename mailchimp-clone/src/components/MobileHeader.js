import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import MailchimpLogo from "./MailchimpLogo";
import HeaderButton from "./Shared/HeaderButton";
import Hamburger from "./Shared/Hamburger";

function MobileHeader() {
	const [sidebar, setsidebar] = useState(false);
	const showSidebar = () => {
		setsidebar(!sidebar);
	};
	const [headerColor, setHeaderColor] = useState("");

	const listenScrollEvent = () => {
		window.scrollY > 200 ? setHeaderColor("white") : setHeaderColor("#ffe01b");
	};

	useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent);
		window.addEventListener("hover", listenScrollEvent);
	});
	return (
		<div
			className="bg-[#fff] h-[65px]  mx-auto fixed top-0 left-0 z-999 right-0 "
			style={{ background: headerColor }}
		>
			<div className=" flex flex-row items-center justify-between mx-auto  max-w-[90%] mt-4">
				<div className="menu-bars  text-[#fff]">
					<button onClick={showSidebar}>
						<Hamburger />
					</button>
				</div>
				<div>
					<MailchimpLogo />
				</div>
				<span
					className="text-[13px]  font-medium"
					style={{
						fontFamily:
							"Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif",
					}}
				>
					Log In
				</span>

				<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
					<ul className="nav-menu-items">
						<div className="navbar-toggle ">
							<div className="menu-bars">
								<AiOutlineClose onClick={() => setsidebar(false)} />
							</div>
							<div className="flex flex-row gap-3 items-center">
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
								<AiOutlineSearch className="text-[24px] text-[#000]" />
							</div>
						</div>
						<div className="border-b-[2px] border-[#000] max-w-[95%] mx-auto">
							<div className="flex flex-row justify-between items-center py-3">
								<span>Products</span>
								<span>
									<IoIosArrowForward />
								</span>
							</div>
							<div className="flex flex-row justify-between items-center py-3">
								<span>resources</span>
								<span>
									<IoIosArrowForward />
								</span>
							</div>
							<div className="flex flex-row justify-between items-center py-3">
								<span>Inspiration</span>
								<span>
									<IoIosArrowForward />
								</span>
							</div>
							<div className="flex flex-row justify-between items-center py-3">
								<span>Pricing</span>
								<span>
									<IoIosArrowForward />
								</span>
							</div>
						</div>
						<div className="max-w-[95%] mx-auto mt-3 flex flex-row items-center">
							<span>Talk to Sale</span>
							<FiPhone className="ml-1 text-[1.2rem]" />
						</div>
						<div className="flex  flex-col gap-5 justify-end max-w-[95%] mx-auto">
							<div className="mt-[12px]">
								<span className="txt-[15px] leading-[20.25px] ">
									Product Updates
								</span>
							</div>
							<div className="max-w-[95%] mx-auto px-1.5">
								<p className="text-[12px] font-light">
									{" "}
									Get the latest on new features, product improvements, and
									other announcements.
								</p>
								<p className="text-[#007c89] text-[14px] mt-[12px] mb-[12px] flex flex-row items-center gap-2">
									See what's new
									<img
										className="w-[16.7069px] h-[9px]"
										src="https://mailchimp.com/release/plums/cxp/images/global_nav/icon-arrow-right.595f14f6.svg"
										alt=""
									/>
								</p>
							</div>
						</div>
						<hr></hr>
						<div className="max-w-[95%] mx-auto mt-3 flex flex-row items-center gap-5">
							<HeaderButton Header="Login" />
							<div className="">
								<a
									href="/"
									className="text-white bg-[#007c89] text-[#fff] font-semibold text-[14px] py-[10px] px-[40px] text-center cursor-pointer leading-[21.6px]"
									style={{
										fontFamily:
											"Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif",
									}}
								>
									Sign Up Free
								</a>
							</div>
						</div>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default MobileHeader;
