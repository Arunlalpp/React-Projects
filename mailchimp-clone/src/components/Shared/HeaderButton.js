import React from "react";

function Button({ Header }) {
	return (
		<button
			className="lg:text-[#004e56] text-[#000]  hover:bg-gray-200 font-[600] lg:py-[12px] lg:px-[40px] py-[5px] px-[40px] box-border border border-[#000]  h-auto text-center"
			style={{
				fontFamily:
					"Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif",
			}}
		>
			<a href="/">{Header}</a>
		</button>
	);
}

export default Button;
