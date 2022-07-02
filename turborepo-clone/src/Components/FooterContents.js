import React from "react";
import FooterVecel from "./FooterVecel";
import Newsletter from "./Newsletter";

function FooterContents() {
	return (
		<>
			<div className="py-8 mx-auto max-w-7xl">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<div className="grid grid-cols-2 gap-8 xl:col-span-2">
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm text-white">Solutions</h3>
								<ul className="mt-4 space-y-1.5 list-none ml-0">
									<li className="text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition">
										Documentaion
									</li>
									<li className="text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition">
										API Reference{" "}
									</li>
									<li className="text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition">
										Blog
									</li>
									<li className="text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition">
										Releases
									</li>
									<li className="text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition">
										FAQ
									</li>
									<li className="text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition">
										Enterprise
									</li>
								</ul>
							</div>
							<div>
								<h3 className="text-sm text-white">Solutions</h3>
								<ul className="mt-4 space-y-1.5 list-none ml-0">
									<li className="text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition">
										Github
									</li>
									<li className="text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition">
										Discord
									</li>
								</ul>
							</div>
						</div>
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm text-white">Solutions</h3>
								<ul className="mt-4 space-y-1.5 list-none ml-0">
									<li className="text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition">
										Open Source Software
									</li>
									<li className="text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition">
										Github
									</li>
									<li className="text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition">
										Twitter
									</li>
								</ul>
							</div>
							<div>
								<h3 className="text-sm text-white">Solutions</h3>
								<ul className="mt-4 space-y-1.5 list-none ml-0">
									<li className="text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition">
										Privacy Policy
									</li>
									<li className="text-sm text-gray-500 no-underline betterhover:hover:text-gray-700 betterhover:hover:dark:text-white transition">
										Terms of use
									</li>
								</ul>
							</div>
						</div>
					</div>
					<Newsletter />
				</div>
				<FooterVecel />
			</div>
		</>
	);
}

export default FooterContents;
