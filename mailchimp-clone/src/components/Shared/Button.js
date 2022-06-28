import React from "react";

function Button({ Content }) {
	return (
		<button
			className="text-[#004e56] bg-transparent font-[600] py-[20px] px-[40px] box-border border border-[#56b044d8] hover:border-[#004e56] h-auto text-center"
			style={{
				fontFamily:
					"Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif",
			}}
		>
			<a href="/">{Content}</a>
		</button>
	);
}

export default Button;
