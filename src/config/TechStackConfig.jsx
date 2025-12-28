import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaPython
} from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVite,
  SiMysql,
} from "react-icons/si";
import { TbBrandCpp, TbBrandReactNative } from "react-icons/tb";

const TechStack = [
  {
    icon: <FaHtml5 />,
    title: "HTML",
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS",
  },
  {
    icon: <FaReact />,
    title: "ReactJs",
  },
  {
    icon: <TbBrandReactNative />,
    title: "React Native",
  },
  {
    icon: <RiTailwindCssFill />,
    title: "Tailwindcss",
  },
  {
    icon: <FaBootstrap />,
    title: "BootStrap",
  },
  {
    icon: <DiNodejs />,
    title: "NodeJs",
  },
  {
    icon: <SiExpress />,
    title: "Express",
  }
];

const ToolsStack = [
  {
    icon: <SiPostman />,
    title: "Postman",
  },
  {
    icon: <FaGitAlt />,
    title: "Git",
  },
  {
    icon: <FaGithub />,
    title: "Github",
  },
  {
    icon: <FaAws />,
    title: "AWS",
  },
  {
    icon: <SiVite />,
    title: "Vite",
  },
];

const DataBase = [
  {
    icon: <SiMongodb />,
    title: "MongoDB",
  },
  {
    icon: <SiMysql />,
    title: "MySQL",
  },
];

const Languages = [
  {
    icon: <FaSquareJs />,
    title: "JavaScript",
  },
  {
    icon: <TbBrandCpp />,
    title: "C++",
  },
  {
    icon: <FaPython />,
    title: "Python",
  },
];

export { TechStack, ToolsStack, DataBase, Languages };
