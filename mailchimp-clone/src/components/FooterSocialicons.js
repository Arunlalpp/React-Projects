import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function FooterSocialicons() {
	return (
		<div className="box-border max-w-[1600px] mx-auto px-[1.875rem] py-[4rem] lg:flex lg:flex-row gap-[5rem] lg:justify-center">
			<div className="lg:flex lg:flex-row items-center lg:gap-8">
				<div className="mx-[5px] flex flex-row justify-between lg:justify-start lg:gap-6">
					<img
						className="lg:w-[5vw] lg:h-[2vw]"
						src="https://eep.io/images/yzco4xsimv0y/1u3hha7FE0Q402e2qsMu6a/5e403548149c1618b64034284f692ff1/icon-ios.svg?w=320&fm=webp&q=80"
						alt="Apple"
					/>
					<img
						className="lg:w-[5vw] lg:h-[2vw]"
						src="https://eep.io/images/yzco4xsimv0y/64EpnI4RsQI66c2y2O60G2/4c34d7bc4dd7a4362c7e19a06c109e21/icon-android.svg?w=320&fm=webp&q=80"
						alt="googlePlay"
					/>
				</div>
				<div className="flex flex-row py-[3rem]">
					<picture className="flex flex-row items-center gap-[3rem] mx-auto xs:gap-[8rem]">
						<img
							src="https://eep.io/images/yzco4xsimv0y/5daYAeMRSgIUUiSquGwsgI/1904e3f818575ec9625fa15dab193243/icon-facebook.svg?w=320&fm=webp&q=80"
							alt="Facebook"
						/>
						<img
							src="https://eep.io/images/yzco4xsimv0y/3VjJhbqftKuok6gqYuUQKy/328d56c5d13ad50b9679b11e716bb218/icon-twitter.svg?w=320&fm=webp&q=80"
							alt="Facebook"
						/>
						<img
							src="https://eep.io/images/yzco4xsimv0y/RlNw7Xkw8uKYAUoYU4aQw/ff3eada8736da9e63fbd9f929c6a677c/icon-instagram.svg?w=320&fm=webp&q=80"
							alt="Facebook"
						/>
						<img
							src="https://eep.io/images/yzco4xsimv0y/n5saFR4miW4U4ygUIQo0A/8f9c60cb133b80fda2fe9bdb825b4a5f/icon-linkedin.svg?w=320&fm=webp&q=80"
							alt="Facebook"
						/>
						<img
							src="https://eep.io/images/yzco4xsimv0y/2z1ra9BrgQewIqMQckMasg/58e3e8ec04acd60f0642f89dfbd71218/icon-youtube.svg?w=320&fm=webp&q=80"
							alt="Facebook"
						/>
						<img
							src="https://eep.io/images/yzco4xsimv0y/7nawBEArBKpxRukK66OZtN/af9879112b20982e13748d47b24c8681/pinterest-logo.svg?w=320&fm=webp&q=80"
							alt="Facebook"
						/>
					</picture>
				</div>
			</div>
			<div className="flex flex-col text-center lg:text-left gap-5 lg:w-[15vw] lg:gap-2">
				<div className="">
					<select
						className="border-[1px] border-black px-5 py-2 text-left appearance-none"
						name="languagePicker"
						id="languagePicker-1615926199"
						data-behavior="languagePicker"
					>
						<option value="/" data-locale="en">
							English{" "}
						</option>

						<option value="/es/" data-locale="es">
							Español{" "}
						</option>

						<option value="/fr/" data-locale="fr">
							Français{" "}
						</option>

						<option value="/pt-br/" data-locale="pt-br">
							Português{" "}
						</option>

						<option value="/de/" data-locale="de">
							Deutsch{" "}
						</option>

						<option value="/it/" data-locale="it">
							Italiano{" "}
						</option>
						<div className="">
							<MdKeyboardArrowDown className="text-[20px] text-red-800" />
						</div>
					</select>
				</div>
				<div className="">
					<p
						className="text-[10px] font-[400] leading-[15px] block text-justify "
						style={{
							fontFamily:
								"Graphik Web,Helvetica Neue,Helvetica,Arial,Verdana,sans-serif",
						}}
					>
						©2001-2022 All Rights Reserved. Mailchimp® is a registered trademark
						of The Rocket Science Group. Apple and the Apple logo are trademarks
						of Apple Inc. Mac App Store is a service mark of Apple Inc. Google
						Play and the Google Play logo are trademarks of Google Inc.{" "}
						<span className="text-black font-semibold px-[1px]">Privacy |</span>
						<span className="text-black font-semibold px-[1px]">Terms |</span>
						<span className="text-black font-semibold px-[1px]">
							Cookies Preference
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default FooterSocialicons;
