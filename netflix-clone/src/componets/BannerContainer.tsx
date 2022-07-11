import React from "react";
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
			<div className="text-center">
				<span className="text-white font-semibold text-3xl">{BannerText}</span>
				<h2>{BannerSubText}</h2>
				<p>{Bannertitle}</p>
			</div>
		</div>
	);
}

export default BannerContainer;
