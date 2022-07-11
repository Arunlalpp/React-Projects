import React from "react";

function NewsLetter() {
	return (
		<div className="w-full md:w-96 md:max-w-full mx-auto">
			<div className="p-6">
				<form>
					<label className="block mb-6">
						<input
							name="email"
							type="email"
							className=" border-b-2 border-[#ffa00a]   block w-full py-3"
							placeholder="Email address"
						/>
					</label>
					<div className="mb-6">
						<button
							type="submit"
							className="h-10 px-5 bg-[#e50914] transition-colors duration-150 focus:shadow-outline text-white font-medium"
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
