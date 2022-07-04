import { useState } from "react";
import { Switch } from "@headlessui/react";

function DarkMode() {
	const [enabled, setEnabled] = useState(false);
	return (
		<div className="py-2">
			<Switch
				checked={enabled}
				onChange={setEnabled}
				className={`${enabled ? "bg-red-700" : "bg-teal-700"}
              relative inline-flex h-[30px] w-[65px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
			>
				<span className="sr-only">Use setting</span>
				<span
					aria-hidden="true"
					className={`${enabled ? "translate-x-9" : "translate-x-0"}
                pointer-events-none inline-block h-[29px] w-[30px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
				/>
			</Switch>
		</div>
	);
}

export default DarkMode;
