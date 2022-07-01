import React from "react";

function Newsletter() {
	return (
		<div className="mt-12 xl:!mt-0">
			<h3 class="text-sm text-white">Subscribe to our newsletter</h3>
			<p class="mt-4 text-sm text-gray-600 dark:text-gray-500">
				Join the Turborepo newsletter and stay updated on new releases and
				features, guides, and case studies.
			</p>
			<form class="mt-4 sm:flex sm:max-w-md">
				<label for="email-address" class="sr-only">
					Email address
				</label>
				<input
					type="email"
					name="email-address"
					id="email-address"
					autocomplete="email"
					required=""
					value=""
					class="w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-gray-900 border border-transparent rounded-md appearance-none dark:text-white sm:text-sm dark:border-gray-700 dark:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:border-white focus:placeholder-gray-400"
					placeholder="you@domain.com"
				/>
				<div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
					<button
						type="submit"
						class="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-black dark:bg-white dark:text-black border border-transparent rounded-md sm:text-sm betterhover:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-white dark:betterhover:hover:bg-gray-300"
					>
						Subscribe
					</button>
				</div>
			</form>
		</div>
	);
}

export default Newsletter;
