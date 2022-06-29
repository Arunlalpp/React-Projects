import React from "react";

function Button({ Header }) {
	return (
		<button
			className="text-[#004e56] hover:bg-gray-200 font-[600] py-[12px] px-[40px] box-border border border-[#000]  h-auto text-center"
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
