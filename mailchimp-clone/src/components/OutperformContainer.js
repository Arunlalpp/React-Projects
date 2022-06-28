import React from "react";
import Button from "./Shared/Button";
import { containerDatas } from "../Constants";

function OutperformContainer(props) {
	return (
		<div className="bg-white my-[6.25rem]">
			<div className="mb-[80px]">
				<div className="w-full box-border max-w-[1600px] mx-auto px-[1.875rem] text-center flex flex-col ">
					<h1
						className="text-[2.5rem] leading-[1] tracking-[.3125rem] text-Primary font-light"
						style={{
							fontFamily:
								"Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif",
						}}
					>
						Outperform your last campaign
					</h1>
				</div>
			</div>
			<div className="bg-white">
				<div className="w-full box-border max-w-[1600px] px-[1.875rem] mx-auto ">
					{containerDatas.map((containerData) => {
						return (
							<>
								<div className="lg:flex lg:flex-row lg:items-center lg:justify-center">
									<div className="pt-[3.75rem] lg:w-[577.5px] lg:pr-[126.241px]">
										<img src={containerData.url} alt="" />
									</div>
									<div className="mt-[60px] lg:w-[577.5px] lg:pl-[57.7474px]">
										<h2
											className="leading-[21.6px] text-[28px] text-Primary tracking-[0] font-light"
											style={{
												fontFamily:
													"Means Web,Georgia,Times,Times New Roman,serif",
											}}
										>
											{containerData.Title}
										</h2>
										<div
											className="mt-[2.5rem] text-[16px] text-Secondary leading-[1.35]"
											style={{
												fontFamily:
													"Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif",
											}}
										>
											{containerData.SubText}
										</div>
										<div className="mt-[2.5rem]">
											<Button Content={containerData.Button} />
										</div>
									</div>
								</div>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default OutperformContainer;