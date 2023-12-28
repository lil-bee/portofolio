export type Project = {
	title: string;
	techs: string[];
	link: string;
	isComingSoon?: boolean;
};

const projects: Project[] = [
	{
		title: "Quiz App",
		techs: ["React", "Material UI"],
		link: "https://quizzical-lilbee.netlify.app/",
	},
	{
		title: "Tenzies Game",
		techs: ["React", "Material UI"],
		link: "https://tenzies-lilbee.netlify.app/",
	},
	{
		title: "Quote Generator",
		techs: ["React", "Typescript", "Chakra UI"],
		link: "https://quotes-generator-lilbee.netlify.app/",
	},
	{
		title: "Password Generator",
		techs: ["HTML", "CSS", "Javascript"],
		link: "https://passwordgenerator-lilbee.netlify.app/",
	},
	{
		title: "Responsive Web Dev - DevChallenges.io",
		techs: ["HTML", "CSS", "Responsive"],
		link: "https://github.com/lil-bee/ResponsiveWebDev-DevChallenges.io",
	},
	{
		title: "Astro - Portofolio",
		techs: ["Astro"],
		link: "/",
	},
];

export default projects;
