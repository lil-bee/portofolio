export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Devflow - Stackoverflow Clone",
    techs: ["Next.js", "MongoDB", "Shadcn UI", "Tailwind CSS"],
    link: "https://devflow-lilbee.vercel.app/",
  },
  {
    title: "AI SEO - Modern & Interactive Sass Landing Page",
    techs: ["Next.js", "Framer Motion", "Tailwind CSS"],
    link: "https://aiseo-lilbee.vercel.app/",
  },
  {
    title: "Sushiman - Interactive Restaurant Landing Page",
    techs: ["HTML", "CSS", "AOS"],
    link: "https://sushiman-lilbee.netlify.app/",
  },
];

export default projects;
