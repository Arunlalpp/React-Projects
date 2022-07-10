import React from "react";
import StartJourney from "./StartJourney";

function CardWithImage() {
	return (
		<div className="bg-red-400 px-4 mx-auto">
			<div>
				<div className="flex flex-col">
					<div className=" flex flex-row justify-between">
						<span>Arun</span>
						<span>Lal</span>
					</div>
					<div className="flex flex-row justify-center">
						<span>A learning Journey</span>
					</div>
				</div>
			</div>
			<div className="bg-white shadow-2xl rounded-lg px-4 px-auto mt-[10rem]">
				<div className="relative block">
					<div className="w-64 h-64 mx-auto">
						<img
							className="absolute left-0 right-0 -top-[50%] m-auto max-w-full max-h-full rounded-2xl"
							src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
							alt=""
						/>
					</div>
					<div className="absolute inset-0 top-[50%]">
						<h2>6 Pillers of Brain Health</h2>
						<p>kedgberbgekgbvubgjwvugfuwsjbvgfwogf</p>
					</div>
				</div>
				<StartJourney />
			</div>
		</div>
	);
}

export default CardWithImage;
