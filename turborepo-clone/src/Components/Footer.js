import React from "react";
import FooterContents from "./FooterContents";

function Footer() {
	return (
		<div className="bg-neutral-900 pb-[env(safe-area-inset-bottom)]">
			<div className="py-2 border-b border-neutral-800  md:block">
				<div className="max-w-[90rem] mx-auto pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-left),1.5rem)] py-12">
					<div className="">
						<span className="text-gray-600 dark:text-gray-400">
							<footer>
								<h2 id="footer-heading" className="sr-only">
									Footer
								</h2>
								<FooterContents />
							</footer>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
