type Social = {
	label: string;
	link: string;
};

type Presentation = {
	mail: string;
	title: string;
	description: string;
	socials: Social[];
};

const presentation: Presentation = {
	mail: "fdhlakbr280102@gmail.com",
	title: "Hi, I’m Fadhil 👋",
	description:
		"Howdy, i'm an *Indonesian Front-end Developer* and constantly learning new technologies. Currently diving into *React.js* and *Gatsby* to enhance my skills. Always looking for new projects to challenge and improve my abilities. Outside of work I like to watch football match and reading books.",
	socials: [
		{
			label: "Bento",
			link: "https://bento.me/fdhlakbr",
		},
		{
			label: "Github",
			link: "https://github.com/lil-bee",
		},
	],
};

export default presentation;

