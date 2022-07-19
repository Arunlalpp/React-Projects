import React from "react";

function SacredGames() {
	return (
		<div>
			<div className="md:px-[70px] px-[30px] py-[45px] mx-auto border-b-8 border-[#222]  border-t-8 bg-black">
				<div className="max-w-[1100px] mx-auto flex md:flex-row justify-between items-center flex-col ">
					<div className="text-white text-center">
						<h1 className="text-[1.625rem] font-medium">Watch everywhere.</h1>
						<h2 className="text-[1.125rem]">
							Stream unlimited movies and TV shows on your phone, tablet,
							laptop, and TV.
						</h2>
					</div>
					<div className="text-white relative stragerthings-banner">
						<img
							className="relative"
							src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
							alt=""
						/>
						<div className="absolute left-[17%] max-h-[47%] max-w-[63%] top-[10%] ">
							<video
								className="our-story-card-video"
								data-uia="our-story-card-video"
							>
								<source
									src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
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

export default SacredGames;
