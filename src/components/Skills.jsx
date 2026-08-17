import SkillsCard from "./SkillsCard";
import { FaAngular } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BsTypescript } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const SkillsInfo = [
  {
    title: "Professional Experience",
    skills: [
      { SkillName: "Angular 11", SkillIcon: FaAngular },
      { SkillName: "HTML", SkillIcon: FaHtml5 },
      { SkillName: "CSS", SkillIcon: FaCss3Alt },
      { SkillName: "JavaScript", SkillIcon: IoLogoJavascript },
      { SkillName: "TypeScript", SkillIcon: BsTypescript },
      { SkillName: "UI/UX", SkillIcon: MdOutlineDesignServices },
    ],
  },
  {
    title: "Building with",
    skills: [
      { SkillName: "React", SkillIcon: FaReact },
      { SkillName: "Tailwind CSS", SkillIcon: RiTailwindCssFill },
      { SkillName: "Node.js", SkillIcon: FaNodeJs },
      { SkillName: "Express.js", SkillIcon: SiExpress },
      { SkillName: "MongoDB", SkillIcon: SiMongodb },
    ],
  },
  {
    title: "Tools",
    skills: [
      { SkillName: "Git", SkillIcon: FaGitAlt },
      { SkillName: "GitHub", SkillIcon: FaGithub },
      { SkillName: "VS Code", SkillIcon: VscVscode },
      { SkillName: "Figma", SkillIcon: FaFigma },
    ],
  },
];

function Skills() {
  return (
    // <>
    //   <h1 className="text-5xl font-bold p-2 m-4 text-center bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
    //     Skills
    //   </h1>
    //   <header>Professional Experience</header>
    //   <ul>
    //     <li>Angular 11</li>
    //     <li>HTML</li>
    //   </ul>
    // </>
    <>
      <div className="border-t-2 border-teal-200 py-8 mb-8"></div>
      <h2
        id="Skills"
        className="p-2 m-4 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-teal-900"
      >
        Skills
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-400 mx-auto rounded-full mb-8"></div>
      <div className="flex flex-wrap gap-6 my-3">
        {SkillsInfo.map((info) => {
          return <SkillsCard key={`${info.title}`} {...info} />;
        })}
      </div>
    </>
  );
}

export default Skills;
