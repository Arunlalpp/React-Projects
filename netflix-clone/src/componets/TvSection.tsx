import React from "react";

function TvSection() {
	return (
		<div>
			<div className="md:px-[70px] px-[30px] py-[45px] mx-auto border-b-8 border-[#222]  border-t-8 bg-black">
				<div className="max-w-[1100px] mx-auto flex md:flex-row justify-between items-center flex-col ">
					<div className="text-white text-center">
						<h1 className="text-[1.625rem] font-medium">Enjoy on your TV.</h1>
						<h2 className="text-[1.125rem]">
							Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
							Blu-ray players and more.
						</h2>
					</div>
					<div className="text-white relative">
						<img
							className="relative"
							src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
							alt=""
						/>

						<div className="absolute top-[21%] left-[13%] max-w-[73%] max-h-[54%]">
							<video>
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
