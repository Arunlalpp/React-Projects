import React from "react";

function TwiterCardContainer({
	profileImage,
	alternate,
	name,
	profileName,
	date,
	children,
}) {
	return (
		<div className="flex p-4 bg-white rounded-md shadow-xl bg-opacity-10">
			<div className="flex-shrink-0 mr-4">
				<span className="box-border inline-block overflow-hidden bg-none opacity-100 border-0 p-0 relative max-w-full">
					<span className="box-border block overflow-hidden bg-none opacity-100 border-0 p-0 relative max-w-full">
						<img
							className=" block overflow-hidden bg-none opacity-100 border-0 p-0 relative max-w-full"
							alt=""
							aria-hidden="true"
							src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2742%27%20height=%2742%27/%3e"
						/>
					</span>
					<img
						alt={alternate}
						src={profileImage}
						decoding="async"
						data-nimg="intrinsic"
						className="w-12 h-12 rounded-full absolute inset-0 box-border p-0 m-auto border-none  block max-w-full min-w-full min-h-full max-h-full"
					/>
					<noscript>
						<img
							alt="Jon Gold twitter avatar"
							src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjongold.fbf6e797.jpeg&amp;w=96&amp;q=75"
							decoding="async"
							data-nimg="intrinsic"
							className="w-12 h-12 rounded-full absolute inset-0 box-border p-0 border-none m-auto block min-w-full max-w-full min-h-full max-h-full "
							loading="lazy"
						/>
					</noscript>
				</span>
			</div>
			<div>
				<div className="flex items-center space-x-1 text-sm">
					<h4 className="font-medium text-white">{name}</h4>
					<div className="truncate text-gray-400">@{profileName}</div>
					<div className="text-gray-500 md:hidden xl:block">• {date}</div>
				</div>
				<div className="mt-1 text-sm text-gray-200">{children}</div>
			</div>
		</div>
	);
}

export default TwiterCardContainer;
