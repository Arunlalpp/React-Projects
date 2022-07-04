import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { Disclosure } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import { ReactComponent as HeaderLogo } from "./SvgFiles/HeaderLogo.svg";
import { ReactComponent as Github } from "./SvgFiles/Github.svg";
import { ReactComponent as Discode } from "./SvgFiles/Discode.svg";
import { ReactComponent as Hamburger } from "./SvgFiles/Hamburger.svg";
import DisclosureCrad from "./DisclosureCrad";

function Header() {
	const [isOpen, setIsOpen] = useState(false);
	function open() {
		setIsOpen(true);
	}
	function close() {
		setIsOpen(false);
	}
	return (
		<header className="sticky top-0 z-20">
			<div className="bg-transparent z-20 w-full top-0 sticky border-gray-700 border-b">
				<div
					className={`shadow-sm absolute w-full h-full dark:bg-white bg-black pointer-events-none md:opacity-80 ${
						isOpen ? "opacity-100" : "opacity-80"
					}`}
				></div>
				<nav className="sticky flex gap-2 z-50 items-center px-6 h-16 max-w-[90rem] mx-auto text-white pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
					<div className="flex flex-1 items-center mr-2">
						<a
							href="/"
							className="inline-flex items-center text-current text-white"
						>
							<HeaderLogo />
							<span className="sr-only">Turborepo</span>
						</a>
					</div>
					<div className="flex-1"></div>
					<a
						href="/"
						className="text-sm text-[#9ca3af] hover:text-[#e5e7eb] dark:text-gray-400  no-underline p-2 whitespace-nowrap -ml-2 hidden md:inline-block"
					>
						Docs
					</a>
					<a
						href="/"
						className="text-sm text-[#9ca3af] hover:text-[#e5e7eb] dark:text-gray-400 no-underline p-2 whitespace-nowrap -ml-2 hidden md:inline-block"
					>
						Blog
					</a>
					<a
						href="/"
						className="text-sm text-[#9ca3af] hover:text-[#e5e7eb] dark:text-gray-400 no-underline p-2 whitespace-nowrap -ml-2 hidden md:inline-block"
					>
						Enterprise
					</a>
					<div className="hidden md:inline-block">
						<div className="relative w-full md:w-64  leading-tight bg-[#f9fafb1a] text-[#d1d5db] border border-[#1f2937] rounded-lg box-border">
							<div className="relative flex items-center px-3 py-2">
								<input
									type="search"
									className="block w-full leading-tight appearance-none focus:outline-none bg-inherit text-sm"
									placeholder="Search documentation..."
								/>
								<div className="hidden sm:flex absolute inset-y-0 right-0 py-1.5 pr-1.5 select-none pointer-events-none"></div>
								<kbd className="inline-flex items-center px-1.5 font-mono text-sm font-medium dark:bg-white bg-dark dark:bg-opacity-50 dark:text-gray-400 text-gray-500 border-gray-100 border-opacity-20 border rounded">
									/
								</kbd>
							</div>
						</div>
					</div>
					<a href="/" className="text-current p-2">
						<Github />
						<span className="sr-only">GitHub</span>
					</a>
					<a href="/" className="text-current p-2">
						<Discode />
						<span className="sr-only">Discord</span>
					</a>

					{!isOpen && (
						<button
							onClick={open}
							className="rounded outline-2 outline-offset-2 select-none p-2 block md:hidden"
						>
							<Hamburger />
						</button>
					)}
					{isOpen && (
						<button
							className="rounded outline-2 outline-offset-2 select-none p-2 block md:hidden bg-red"
							onClick={close}
						>
							<MdOutlineClose size="24px" />
						</button>
					)}
				</nav>
				{isOpen && (
					<div className="flex flex-1 w-full ">
						<aside className="pt-16 opacity-100  fixed flex-shrink-0 w-full md:w-64 md:sticky z-[15] top-0 self-start overflow-y-auto transform-none h-[cal(100vh-4rem)] md:hidden">
							<div className="p-4 min-h-[cal(100vh-4rem-61px)] bg-[#111111]">
								<div className="mb-4 pt-4 block md:hidden shadow-[0 2px 14px 6px #111] bg-[#111111] z-[1] sticky top-0 -mt-4">
									<div className="w-full relative">
										<div className="relative flex items-center">
											<input
												type="search"
												className="text-[#d1d5db] bg-[#f9fafb1a] border-[#1f2937] leading-tight px-3 py-2 rounded-lg w-full appearance-none block outline-offset-[-2px]"
												placeholder="Search documentation..."
											/>
										</div>
									</div>
								</div>
								<div>
									<div className="text-white bg-[#111111] h-[200vh]">
										<div className="w-full">
											<div className="mx-auto w-full max-w-md rounded-2xl">
												<Disclosure>
													{({ open }) => (
														<>
															<Disclosure.Button className="flex w-full justify-between rounded-lg focus:bg-[#1B1C1D] mt-1 py-[0.375rem] px-2 text-left text-sm font-medium text-white">
																<span
																	className={`${
																		open ? "text-[#737373]" : "text-[#737373]"
																	}`}
																>
																	Docs
																</span>
																<FiChevronDown
																	className={`${
																		open
																			? "text-gray-500"
																			: "-rotate-90 transform text-[#737373] "
																	} h-5 w-5 `}
																/>
															</Disclosure.Button>
															<Disclosure.Panel className="pl-3 ml-3 text-sm text-[#737373] border-l border-[#737373] border-opacity-40">
																<div>
																	<p className="mt-1 py-[0.375rem] px-2">
																		Introducton
																	</p>
																	<p className="mt-1 py-[0.375rem] px-2">
																		Getting Started
																	</p>
																	<DisclosureCrad
																		title="Core Concept"
																		content={
																			<div>
																				<p className="mt-1 py-[0.375rem] px-2">
																					Pipelines
																				</p>
																				<p className="mt-1 py-[0.375rem] px-2">
																					Filtering Packages
																				</p>
																				<p className="mt-1 py-[0.375rem] px-2">
																					Caching
																				</p>
																				<p className="mt-1 py-[0.375rem] px-2">
																					Remote Caching
																				</p>
																			</div>
																		}
																	/>
																	<DisclosureCrad
																		title="Guides"
																		content={
																			<div>
																				<p className="mt-1 py-[0.375rem] px-2">
																					Workspaces
																				</p>
																				<p className="mt-1 py-[0.375rem] px-2">
																					Migrate from Lerna
																				</p>
																				<p className="mt-1 py-[0.375rem] px-2">
																					Complementary Tools
																				</p>
																			</div>
																		}
																	/>
																	<DisclosureCrad
																		title="API Reference"
																		content={
																			<div>
																				<p className="mt-1 py-[0.375rem] px-2">
																					Configuration Options
																				</p>
																				<p className="mt-1 py-[0.375rem] px-2">
																					CLI Usage
																				</p>
																				<p className="mt-1 py-[0.375rem] px-2">
																					Codemods
																				</p>
																			</div>
																		}
																	/>
																	<p className="text-[#0099ff] mt-1 py-[0.375rem] px-2">
																		Changelog
																	</p>
																	<p className="mt-1 py-[0.375rem] px-2">
																		Upgrading to v1
																	</p>
																	<p className="mt-1 py-[0.375rem] px-2">
																		Troubleshooting
																	</p>
																	<p className="mt-1 py-[0.375rem] px-2">
																		Glossary
																	</p>
																	<p className="mt-1 py-[0.375rem] px-2">
																		Acknowledgements
																	</p>
																	<p className="mt-1 py-[0.375rem] px-2">FAQ</p>
																</div>
															</Disclosure.Panel>
															<p className="text-[#737373] ml-2 mt-3 text-sm">
																Blog
															</p>
															<p className="text-[#0099ff] bg- ml-2  font-semibold bg-gray-800 opacity-50 px-4 mx-auto border-1 rounded-sm text-sm">
																Enterprises
															</p>
														</>
													)}
												</Disclosure>
											</div>
										</div>
									</div>
								</div>
							</div>
						</aside>
					</div>
				)}
			</div>
		</header>
	);
}

export default Header;
