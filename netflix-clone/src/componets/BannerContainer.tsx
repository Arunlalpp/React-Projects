import React from "react";
import NewsLetter from "./NewsLetter";
type BannerProps = {
	BannerText: string;
	BannerSubText: string;
	Bannertitle: string;
};
function BannerContainer({
	BannerText,
	BannerSubText,
	Bannertitle,
}: BannerProps) {
	return (
		<div>
			<div className="text-center py-[75px] px-0 max-w-[950px] mx-auto">
				<span className="text-white font-semibold text-3xl">{BannerText}</span>
				<h2>{BannerSubText}</h2>
				<p>{Bannertitle}</p>
				<NewsLetter />
			</div>
		</div>
	);
}

export default BannerContainer;
