import React from "react";
import { ReactComponent as HeaderLogo } from "./SvgFiles/HeaderLogo.svg";
import { ReactComponent as Github } from "./SvgFiles/Github.svg";
import { ReactComponent as Discode } from "./SvgFiles/Discode.svg";
import { ReactComponent as Hamburger } from "./SvgFiles/Hamburger.svg";

function Header() {
	return (
		<div>
			<div className="">
				<div className="bg-black w-full h-full">
					<div className="max-w-[90rem] px-6 mx-auto h-16 flex flex-row items-center gap-2">
						<div className="flex flex-row items-center mr-2 flex-auto">
							<HeaderLogo className="text-white" />
						</div>
						<div className="p-2">
							<Github className="text-white" />
						</div>
						<div className="p-2">
							<Discode className="text-white" />
						</div>
						<button>
							<div className="p-2">
								<Hamburger className="text-white" />
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
