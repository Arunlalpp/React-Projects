import React from "react";

function StrangerThings() {
	return (
		<div>
			<div className="md:px-[70px] px-[30px] py-[45px] mx-auto border-b-8 border-[#222]  border-t-8 bg-black">
				<div className="max-w-[1100px] mx-auto flex md:flex-row justify-between items-center flex-col ">
					<div className="text-white text-center">
						<h1 className="text-[1.625rem] font-medium">
							Download your shows to watch offline.
						</h1>
						<h2 className="text-[1.125rem]">
							Save your favourites easily and always have something to watch.
						</h2>
					</div>
					<div className="text-white relative">
						<img
							className="relative"
							src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
							alt=""
						/>
						<div className="flex gap-1 items-center shadow-md absolute w-[60%] min-w-[15rem] left-[20%] bg-black rounded-xl border translate-y-[-50%] border-[#222] py-[0.35rem] px-[0.75em]">
							<img
								className="h-[3rem]"
								src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
								alt=""
							/>
							<div className="leading-5 mx-[0.3rem] shrink-1 grow-1">
								<div className="text-white font-semibold text-[.9rem]">
									Stranger Things
								</div>
								<div className="text-[#0071eb] font-normal text-[0.75rem]">
									Downloading...
								</div>
							</div>
							<div className="Loadin-image"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StrangerThings;
