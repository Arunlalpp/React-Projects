import React from "react";

function TvSection() {
	return (
		<div>
			<div className="px-[70px] py-[45px] mx-auto border-b-8 border-[#222]  border-t-8 border-[#222] bg-black">
				<div className="mnax-w-[1100px] mx-auto flex flex-row justify-between items-center">
					<div className="w-[50%] text-white">
						<h1>Enjoy on your TV.</h1>
						<h2>
							Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
							Blu-ray players and more.
						</h2>
					</div>
					<div className="text-white relative">
						<div className="">
							<img
								src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
								alt=""
							/>
						</div>
						<div className="absolute top-[20%] left-[12%]">
							<video
								className="our-story-card-video"
								data-uia="our-story-card-video"
							>
								{" "}
								<source
									src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
									type="video/mp4"
								/>
							</video>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TvSection;
