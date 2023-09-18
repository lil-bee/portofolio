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
		title: "Meme Generator",
		techs: ["React", "Material UI"],
		link: "https://memegenerator-lilbee.netlify.app/",
	},
	{
		title: "Password Generator",
		techs: ["HTML", "CSS", "Javascript"],
		link: "https://passwordgenerator-lilbee.netlify.app/",
	},
	{
		title: "Sushiman Landing Page",
		techs: ["HTML", "CSS", "Responsive"],
		link: "https://sushiman-lilbee.netlify.app/",
	},
	{
		title: "Edie Homepage",
		techs: ["HTML", "CSS", "Responsive"],
		link: "https://ediehomepage-lilbee.netlify.app/",
	},
	{
		title: "Astro - Portofolio",
		techs: ["Astro"],
		link: "/",
	},
];

export default projects;

