import React from "react";
import TwiterCardContainer from "./TwiterCardContainer";
import jongold from "./Images/JonGold.webp";
import Flavio from "./Images/Flavio.webp";
import yangshunz from "./Images/yangshunz.webp";
import paularmstrong from "./Images/paularmstrong.webp";
import Edelman from "./Images/Edelman.webp";
import shadcn from "./Images/shadcn.webp";
import nmoore from "./Images/nmoore.jpg";
import ollermi from "./Images/ollermi.webp";
import elad from "./Images/elad.webp";
import christian from "./Images/christian.webp";
import joshlarson from "./Images/joshlarson.webp";

function TwitterCardData() {
	return (
		<div className="grid gap-4 px-4 mx-auto lg:grid-cols-3 max-w-7xl">
			<div className="space-y-4">
				<TwiterCardContainer
					profileImage={jongold}
					alternate="Jon Gold twitter avatar"
					name="Jon Gold"
					profileName="jongold"
					date="Jun 28"
				>
					<>
						{" "}
						.
						<a
							href="https://twitter.com/turborepo"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block text-[#35ACDF]"
						>
							@turborepo
						</a>{" "}
						is the coolest javascript thing i've seen probably since an early
						prototype of Next.js
						<br />
						<br />
						javascript fatigue is over
					</>
				</TwiterCardContainer>
				<TwiterCardContainer
					profileImage={Flavio}
					alternate="Flavio"
					name="Flávio Carvalho"
					profileName="flavioukk"
					date="Jun 17"
				>
					<>
						{" "}
						.
						<a
							href="https://twitter.com/turborepo"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block text-[#35ACDF]"
						>
							@turborepo
						</a>{" "}
						cache hit in CI is the most satisfying thing ever, why hasn't anyone
						thought of this before lol
					</>
				</TwiterCardContainer>
				<TwiterCardContainer
					profileImage={yangshunz}
					alternate="Yangshun"
					name="Yangshun Tay"
					profileName="yangshunz"
					date="Dec 12"
				>
					<>
						Experimented with
						<a
							href="https://twitter.com/turborepo"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block text-[#35ACDF]"
						>
							@turborepo
						</a>{" "}
						on my Flow-based 4-package monorepo where each package contains
						lint, test and build commands:
						<br />
						<br />- lint, test, build all files in series: ~75s
						<br />- lerna --parallel: ~62s <br />- turbo: ~35s (791ms on cache
						hit)
						<br />
						<br /> 🤯 Impressive results! FULL TURBO!
					</>
				</TwiterCardContainer>
			</div>
			<div className="space-y-4">
				<TwiterCardContainer
					profileImage={paularmstrong}
					alternate="Paul Armstrong twitter avatar"
					name="Paul Armstrong"
					socialMediaLInk="paularmstrong"
					date="Apr 26"
				>
					Just saw{" "}
					<a
						href="https://twitter.com/turborepo"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block text-[#35ACDF]"
					>
						@turborepo{" "}
					</a>
					in action and gotta say: it looks amazing!
				</TwiterCardContainer>
				<TwiterCardContainer
					profileImage={Edelman}
					alternate="Michael Edelman twitter avatar"
					name="Michael Edelman"
					profileName="edelman215"
					date="Jun 30"
				>
					10 runtime-diverse apps, 7 IAC stacks, 6 custom JSII CDK constructs, 5
					third-party client wrappers, 2 auto-generated internal api sdks, a
					handful of utility/misc packages under management, & growing, in 1
					monorepo--all in a day's work for{" "}
					<a
						href="https://twitter.com/turborepo"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block text-[#35ACDF]"
					>
						@turborepo
					</a>{" "}
					--no pain, all gain. 😻
				</TwiterCardContainer>
				<TwiterCardContainer
					profileImage={shadcn}
					alternate="shadcn twitter avatar"
					name="shadcn"
					profileName="shadcn"
					date="Dec 12"
				>
					Turborepo is really good at what it does: Ridiculously fast builds.
				</TwiterCardContainer>
				<TwiterCardContainer
					profileImage={nmoore}
					alternate="Nate Moore twitter avatar"
					name="Nate Moore"
					profileName="n_moore"
					date="Dec 10"
				>
					Finally!{" "}
					<a
						href="https://twitter.com/astrodotbuild"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block text-[#35ACDF]"
					>
						@astrodotbuild
					</a>{" "}
					is now using
					<a
						href="https://twitter.com/turborepo"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block text-[#35ACDF]"
					>
						@turborepo
					</a>{" "}
					. ♥️⚡️
					<br />
					So glad it's open source now—congrats to{" "}
					<a
						href="https://twitter.com/jaredpalmer"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block text-[#35ACDF]"
					>
						@jaredpalmer
					</a>{" "}
					and
					<a
						href="https://twitter.com/vercel"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block text-[#35ACDF]"
					>
						@vercel
					</a>{" "}
					on the release!
				</TwiterCardContainer>
			</div>
			<div className="space-y-4">
				<TwiterCardContainer
					profileImage={ollermi}
					alternate="Miguel Oller twitter avatar"
					name="Miguel Oller"
					profileName="ollermi"
					date="Mar 31"
				>
					It's been a joy to use{" "}
					<a
						href="https://twitter.com/turborepo"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block text-[#35ACDF]"
					>
						@turborepo.
					</a>
					<a
						href="https://twitter.com/jaredpalmer"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block text-[#35ACDF]"
					>
						@jaredpalmer
					</a>{" "}
					is building something truly wonderful for the JS community
				</TwiterCardContainer>
				<TwiterCardContainer
					profileImage={elad}
					alternate="Elad Ossadon twitter avatar"
					name="Elad Ossadon"
					profileName="elado"
					date="Mar 31"
				>
					If you build for web, leave everything and go see what
					<a
						href="https://twitter.com/jaredpalmer"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block text-[#35ACDF]"
					>
						@jaredpalmer
					</a>{" "}
					is doing with{" "}
					<a
						href="https://twitter.com/turborepo"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block text-[#35ACDF]"
					>
						@turborepo
					</a>
					. One of the most exciting pieces of tech lately! The hype is real
				</TwiterCardContainer>
				<TwiterCardContainer
					profileImage={christian}
					alternate="Christian 👨🏼‍💻 twitter avatar"
					name="Christian 👨🏼‍💻"
					profileName="christianjuth"
					date="Dec 10"
				>
					Holy wow, I just rewrote my entire Lerna monorepo to use Turborepo and
					SWC, and it took me like maybe 20 minutes. This is insane. Literally,
					everything Vercel has backed/acquired/created makes development a
					little easier. But wow, it just blew my mind how easy this all is to
					use.
				</TwiterCardContainer>
				<TwiterCardContainer
					profileImage={joshlarson}
					alternate="Josh Larson twitter avatar"
					name="Josh Larson"
					profileName="jplhomer"
					date="Feb 16"
				>
					Living that{" "}
					<a
						href="https://twitter.com/turborepo"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block text-[#35ACDF]"
					>
						@turborepo
					</a>{" "}
					life
				</TwiterCardContainer>
			</div>
		</div>
	);
}
export default TwitterCardData;
