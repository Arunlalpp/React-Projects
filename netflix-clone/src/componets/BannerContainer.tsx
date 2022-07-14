import React from "react";
import NewsLetter from "./NewsLetter";
type BannerProps = {
	BannerSubText: string;
	Bannertitle: string;
};
function BannerContainer({ BannerSubText, Bannertitle }: BannerProps) {
	return (
		<div>
			<div className="text-center py-[75px] px-0 max-w-[950px] mx-auto">
				<span className="text-white font-semibold text-3xl">
					Unlimted movies, TV <br />
					shows and more.
				</span>
				<h2 className="text-white text-[1.625rem]">{BannerSubText}</h2>
				<p className="text-white  mx-auto lg:px-0 lg:mx-0 text-[23px] leading-5 mt-6">
					{Bannertitle}
				</p>
				<NewsLetter />
			</div>
		</div>
	);
}

export default BannerContainer;
