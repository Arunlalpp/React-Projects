import {
	OutperformBanner1,
	OutperformBanner2,
	OutperformBanner3,
} from "../src/Images/Index";
import {
	CustomerCompanyLogo1,
	CustomerCompanyLogo2,
	CustomerCompanyLogo3,
} from "../src/Images/Index";
import { Mailchimp1, Mailchimp2, Mailchimp3 } from "../src/Images/Index";
import { Inspiration1, Inspiration2, Inspiration3 } from "../src/Images/Index";

const containerDatas = [
	{
		url: OutperformBanner1,
		Title: "Sell more with email automations",
		SubText:
			"Generate more orders with our prebuilt automations: remind abandoned cart shoppers, reengage lost customers, or cross-sell your products. Marketers have seen, on average, 4x more orders with our Customer Journey Builder than with bulk emails",
		Button: "Sell more",
	},
	{
		url: OutperformBanner2,
		Title: "Win repeat business with predictive segmentation",
		SubText:
			"Find and target your most valuable customers to help get them to buy again. Marketers have seen, on average, a 76% increase in revenue when using our Customer Lifetime Value and Likelihood to Purchase segments compared to when they didn’t.",
		Button: "Win repeat business",
	},
	{
		url: OutperformBanner3,
		Title: "Engage more customers with stand-out emails",
		SubText:
			"Improve your marketing results with suggestions based on what we know works best. We’ll help you create click-worthy content with our insights and drag-and-drop design tools.",
		Button: "Engage more customers",
	},
];

const customerLogos = [
	{
		Logo: CustomerCompanyLogo1,
		Text: "Customers since 2011",
	},
	{
		Logo: CustomerCompanyLogo2,
		Text: "Customers since 2012",
	},
	{
		Logo: CustomerCompanyLogo3,
		Text: "Customers since 2010",
	},
];
const insiprationDatas = [
	{
		Logo: Inspiration3,
		Title: "Award-winning support",
		Description:
			"Get answers when you need them from our team and marketing resources.",
		DetailsButton: "Learn more",
	},
	{
		Logo: Inspiration2,
		Title: "300+ app integrations ",
		Description: "Connect your favorite apps to send more targeted campaigns.",
		DetailsButton: "Explore apps",
	},
	{
		Logo: Inspiration1,
		Title: "Expert guidance",
		Description:
			"Work with a Mailchimp partner to take your marketing to the next level.",
		DetailsButton: "Browse partners",
	},
];
const mailchimpDatas = [
	{
		url: Mailchimp1,
		Title: "Get your business online",
		SubText:
			"Give your brand a home with a custom domain. Then launch a website to sell products or take appointments, all with built-in marketing tools to help you boost sales and find fans.",
		Button: "Websites and Stores",
	},
	{
		url: Mailchimp2,
		Title: "Market your business",
		SubText:
			"FSend the right messages on all the right channels. Build emails, social ads, landing pages, postcards, and more from one place.",
		Button: "Marketing campaigns",
	},
	{
		url: Mailchimp3,
		empty: "",
	},
];

const footerLinks = [
	{
		title: "Products",
		contents: [
			{
				text: "Why Mailchimp?",
				link: "",
			},
			{
				text: "Product Updates",
				link: "",
			},
			{
				text: "Email Marketing",
				link: "",
			},
			{
				text: "Websites",
				link: "",
			},
			{
				text: "Transactional Email",
				link: "",
			},
			{
				text: "GDPR Compliance",
				link: "",
			},
			{
				text: "Security",
				link: "",
			},
			{
				text: "Status",
				link: "",
			},
			{
				text: "Mobile App",
				link: "",
			},
		],
	},
	{
		title: "Resources",
		contents: [
			{
				text: "Marketing Library",
				link: "",
			},
			{
				text: "Free Marketing Tools",
				link: "",
			},
			{
				text: "Marketing Glossary",
				link: "",
			},
			{
				text: "Integrations Directory",
				link: "",
			},
		],
	},
	{
		title: "Community",
		contents: [
			{
				text: "Agencies & Freelancers",
				link: "",
			},
			{
				text: "Developers",
				link: "",
			},
			{
				text: "Events",
				link: "",
			},
		],
	},
	{
		title: "Company",
		contents: [
			{
				text: "Newsroom",
				link: "",
			},
			{
				text: "Annual Report",
				link: "",
			},
			{
				text: "Careers",
				link: "",
			},
			{
				text: "Accessibility",
				link: "",
			},
		],
	},
	{
		title: "Help",
		contents: [
			{
				text: "Contact Us",

				link: "",
			},
			{
				text: "Hire an Expert",
				link: "",
			},
			{
				text: "Help Center",
				link: "",
			},
			{
				text: "Talk to Sales",
				link: "",
			},
		],
	},
];
export {
	containerDatas,
	customerLogos,
	insiprationDatas,
	mailchimpDatas,
	footerLinks,
};
