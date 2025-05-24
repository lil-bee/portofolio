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
    "I'm a Front-End Engineer from Indonesia with a passion for crafting accessible interfaces using React, TypeScript, and modern tools like Tailwind CSS, Shadcn/ui, and Framer Motion. I'm currently expanding into backend development to build more end-to-end solutions. Beyond code, I enjoy football and reading.",
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
