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
    "Howdy, i'm an *Indonesian Frontend Engineer* specializing in the *React ecosystem*. Passionate about crafting pretty UI and smooth animations with *Framer Motion*. Currently *exploring backend development* and tackling projects to sharpen my engineering skills. Outside tech, you'll find me watching football or reading book.",
  socials: [
    {
      label: "Bento",
      link: "https://bento.me/fdhlakbr",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/fadhilakbar/",
    },
    {
      label: "Github",
      link: "https://github.com/lil-bee",
    },
  ],
};

export default presentation;
