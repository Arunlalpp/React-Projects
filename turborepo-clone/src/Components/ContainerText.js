import React from "react";

function ContainerText() {
	return (
		<div className="bg-[#111111]">
			<div className="px-4 py-16 mx-auto sm:pt-20 sm:pb-24 lg:pt-24 lg:px-8 max-w-[90rem] ">
				<h2 className="max-w-4xl mx-auto pb-6 text-5xl font-extrabold tracking-tight lg:text-6xl xl:text-7xl leading-[1.25!important] md:text-center text-white">
					Scaling your monorepo shouldn't be so difficult
				</h2>
				<div className="max-w-2xl mx-auto lg:mt-2 text-gray-400">
					<p className="mb-6 text-lg leading-normal text-current lg:text-xl">
						Monorepos are incredible for productivity, especially on the
						frontend, but the tooling can be a nightmare. There's a lot of stuff
						to do (and things to mess up). Nothing “just works.” It's become
						completely normal to waste entire days or weeks on plumbing—tweaking
						configs, writing one-off scripts, and stitching stuff together.
					</p>
					<p className="mb-6 text-lg leading-normal text-current lg:text-xl">
						We need something else.
					</p>
					<p className="mb-6 text-lg leading-normal text-current lg:text-xl">
						A fresh take on the whole setup. Designed to glue everything
						together. A toolchain that works for you and not against you. With
						sensible defaults, but even better escape hatches. Built with the
						same techniques used by the big guys, but in a way that doesn't
						require PhD to learn or a staff to maintain.
					</p>
					<p className="mb-6 text-lg leading-normal text-current lg:text-xl">
						<b className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
							With Turborepo, we're doing just that.
						</b>{" "}
						We're abstracting the complex configuration needed for most
						monorepos into a single cohesive build system—giving you a world
						className development experience without the maintenance burden.
					</p>
				</div>
				<div className="flex flex-row items-center max-w-2xl py-4 mx-auto space-x-4">
					<div className="-mb-4 block">
						<span className=" box-border inline-block overflow-hidden bg-none opacity-1 m-0 p-0 relative max-w-full border-0">
							<span className="box-border block overflow-hidden bg-none opacity-1 m-0 p-0 relative max-w-full border-0"></span>
							<img
								className="rounded-full mr-6"
								src="https://turborepo.org/_next/image?url=%2Fimages%2Fpeople%2Fjaredpalmer_headshot.jpeg&w=256&q=75"
								alt="Profile-sign"
							/>
						</span>
					</div>
					<div className="flex flex-col h-full space-y-3">
						<div className="-mb-4 block">
							<span className=" box-border inline-block overflow-hidden bg-none opacity-1 m-0 p- 0 relative max-w-full border-0">
								<span className="box-border block overflow-hidden bg-none opacity-1 m-0 p- 0 relative max-w-full border-0"></span>
								<img
									src="https://turborepo.org/_next/image?url=%2Fimages%2Fhome%2Fjared_signature.png&w=256&q=75"
									alt="Profile-sign"
								/>
							</span>
						</div>
						<div class="inline-flex items-center whitespace-nowrap">
							<a
								href="https://twitter.com/jaredpalmer"
								target="_blank"
								class="font-bold text-gray-400 no-underline"
								rel="noopener noreferrer"
							>
								Jared Palmer
							</a>
							<div class="ml-2 text-gray-500">Founder of Turborepo</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContainerText;
