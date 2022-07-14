import React from "react";

function NewsLetter() {
	return (
		<div className="w-full md:w-4/6  lg:max-w-96 mx-auto">
			<div className="p-6 ">
				<form className="lg:flex lg:flex-row mt-2 lg:justify-center">
					<label className="block mb-6 md:mb-3">
						<input
							name="email"
							type="email"
							className=" border-b-2 border-[#ffa00a]   block w-full py-3"
							placeholder="Email address"
						/>
					</label>
					<div className="mb-6 mt-[1px]">
						<button
							type="submit"
							className="h-10 md:h-12 px-5 bg-[#e50914] transition-colors duration-150 focus:shadow-outline text-white font-medium"
						>
							Get Started
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default NewsLetter;
