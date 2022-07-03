import { ReactComponent as RoundArrow } from "../src/Components/SvgFiles/RoundArrow.svg";
import { ReactComponent as Finger } from "../src/Components/SvgFiles/Finger.svg";
import { ReactComponent as Remote } from "../src/Components/SvgFiles/Remote.svg";
import { ReactComponent as Parallel } from "../src/Components/SvgFiles/Parallel.svg";
import { ReactComponent as Zero } from "../src/Components/SvgFiles/Zero.svg";
import { ReactComponent as Pruned } from "../src/Components/SvgFiles/Pruned.svg";
import { ReactComponent as TaskPipeline } from "../src/Components/SvgFiles/TaskPipeline.svg";
import { ReactComponent as MeetsYou } from "../src/Components/SvgFiles/MeetsYou.svg";
import { ReactComponent as Profile } from "../src/Components/SvgFiles/Profile.svg";


const teamLogos = [
	{
		url: "https://turborepo.org/images/logos/vercel.svg",
	},
	{
		url: "https://turborepo.org/images/logos/aws.svg",
	},
	{
		url: "https://turborepo.org/images/logos/paypal.svg",
	},
	{
		url: "https://turborepo.org/images/logos/shopify.svg",
	},
	{
		url: "https://turborepo.org/images/logos/twilio.svg",
	},
	{
		url: "https://turborepo.org/images/logos/washingtonpost.svg",
	},
];

const cardDatas = [
	{
		Icon: <RoundArrow />,
		Title: "Incremental builds",
		SubText:
			"Building once is painful enough, Turborepo will remember what you've built and skip the stuff that's already been computed.",
	},
	{
		Icon: <Finger />,
		Title: "Content-aware hashing",
		SubText:
			"Turborepo looks at the contents of your files, not timestamps to figure out what needs to be built.",
	},
	{
		Icon: <Remote />,
		Title: "Remote Caching",
		SubText:
			"Share a remote build cache with your teammates and CI/CD for even faster builds.",
	},
	{
		Icon: <Parallel />,
		Title: "Parallel execution",
		SubText:
			"Execute builds using every core at maximum parallelism without wasting idle CPUs.",
	},
	{
		Icon: <Zero />,
		Title: "Zero runtime overhead",
		SubText:
			"Turborepo won’t interfere with your runtime code or touch your sourcemaps.",
	},
	{
		Icon: <Pruned />,
		Title: "Pruned subsets",
		SubText:
			"Speed up PaaS deploys by generating a subset of your monorepo with only what's needed to build a specific target.",
	},
	{
		Icon: <TaskPipeline />,
		Title: "Task pipelines",
		SubText:
			"Define the relationships between your tasks and then let Turborepo optimize what to build and when.",
	},
	{
		Icon: <MeetsYou />,
		Title: "Meets you where you’re at",
		SubText:
			"Using Lerna? Keep your package publishing workflow and use Turborepo to turbocharge task running.",
	},
	{
		Icon: <Profile />,
		Title: "Profile in your browser",
		SubText:
			"Generate build profiles and import them in Chrome or Edge to understand which tasks are taking the longest.",
	},
];
export { teamLogos, cardDatas };
