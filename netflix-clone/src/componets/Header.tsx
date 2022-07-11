import React from "react";
import BannerContainer from "./BannerContainer";

interface HeaderProps {
	HeaderLogo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
export const Header = ({ HeaderLogo }: HeaderProps) => {
	return (
		<div className="header">
			<div className="Banner-image">
				<div className="pt-[0.5rem] Container">
					<div className="">
						<HeaderLogo className="wrapper" />
					</div>
					<div className="Container-selector">
						<select placeholder="lang-switcher">
							<option>Englsh</option>
							<option>हिन्दी</option>
						</select>
						<div className="bg-[#e50914] px-[.5rem] py-[.15rem] rounded-sm">
							<span className="text-white font-medium">Sign in</span>
						</div>
					</div>
				</div>
				<BannerContainer
					BannerText="Unlimted movies,TV shows and more."
					BannerSubText="Watch anywhere.Cancel anytime"
					Bannertitle="Ready to watch? Enter your email to create or restart your membership."
				/>
			</div>
		</div>
	);
};
