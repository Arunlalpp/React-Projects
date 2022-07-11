import React from "react";

function PlansBanner() {
	return (
		<div className="bg-[#ffe01b]">
			<div className="py-[5rem]">
				<div className="w-full box-border max-w-[1600px] mx-auto px-[1.875rem] text-center">
					<div className="mx-auto">
						<h2
							className="text-Primary text-[3.125rem] font-light leading-[1] tracking-[.0625rem]"
							style={{
								fontFamily: "Means Web,Georgia,Times,Times New Roman,serif",
							}}
						>
							Let’s do this
						</h2>
					</div>

					<div className="mt-[1.875rem]">
						<p className="text-Primary text-[1.25rem] leading-[1.4] tracking-[0]">
							Every big idea starts with a small step forward.
						</p>

						<div className="mt-[2rem] ">
							<a
								className="text-[#fff] bg-[#007c89] font-semibold text-[.9375rem] py-[20px] px-[40px] text-center cursor-pointer leading-[20.25px]"
								href="/"
								style={{
									fontFamily:
										"Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif",
								}}
							>
								{" "}
								Pick A Plan{" "}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PlansBanner;
