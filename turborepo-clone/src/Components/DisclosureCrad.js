import { Disclosure } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";

export default function DisclosureComponent({ title, content }) {
	return (
		<div className="w-full">
			<div className="mx-auto w-full max-w-md rounded-2xl">
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button className="flex w-full justify-between rounded-lg focus:bg-[#1B1C1D] py-[0.375rem] px-2 text-left text-sm text-[#737373]">
								<span>{title}</span>
								<FiChevronDown
									className={`${
										open
											? "text-[#737373]"
											: "-rotate-90 transform text-[#737373]"
									} h-5 w-5 `}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className="pl-3 ml-3 text-sm text-[#737373] border-l border-[#737373] border-opacity-40">
								{content}
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
		</div>
	);
}
