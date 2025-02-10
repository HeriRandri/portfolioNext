"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

const about = {
  title: "About me",
  description:
    "Dote d'une approche empathique, d'un esprit ouvert, de sens de la responsabilité et de la communication et passionné par l'apprentissage continu et animé, par la resoulution de problème",
  info: [
    {
      filedName: "Name",
      fieldValue: "Nandrianina",
    },
    {
      filedName: "Phone",
      fieldValue: "+261382663429",
    },
    {
      filedName: "Skipe",
      fieldValue: "Nandrianina074",
    },
    {
      filedName: "Nationality",
      fieldValue: "dans le monde",
    },
    {
      filedName: "Email",
      fieldValue: "hrandri30@gmail.com",
    },
    {
      filedName: "Langue",
      fieldValue: "French, English",
    },
  ],
};

// Experience
const experiences = {
  icon: "",
  title: "My Expericences",
  description:
    " Gestion des réparations et de la maintenace des sites existants.",
  items: [
    {
      company: "Universal Marketing and Management",
      postion: "Supervisor de l'equipe",
      duration: "2023-2024",
    },
    {
      company: "E-Commerce Startup",
      postion: "Front-End Developer",
      duration: "2024-2025",
    },
    {
      company: "Web Design UMM",
      postion: "Junior Front-End Developer",
      duration: "2025-Present",
    },

    {
      company: "Web Design UMM",
      postion: "Junior Front-End Developer",
      duration: "2025-Present",
    },
    {
      company: "Web Design UMM",
      postion: "Junior Front-End Developer",
      duration: "2025-Present",
    },
    ,
    {
      company: "Web Design UMM",
      postion: "Junior Front-End Developer",
      duration: "2025-Present",
    },
    ,
    {
      company: "Web Design UMM",
      postion: "Junior Front-End Developer",
      duration: "2025-Present",
    },
  ],
};

const education = {
  icon: "",
  title: "My educations",
  items: [
    {
      istitution: "Udemy",
      degree: "Reactjs/ Nextjs/Nodejs/Mysql/MongoDb",
      duration: "203-present",
    },
    {
      istitution: "OpenClassroom",
      degree: "C",
      duration: "2021",
    },
    {
      istitution: "Design Online Course",
      degree: "Figma",
      duration: "2023",
    },
  ],
};

const skills = {
  title: "My Skills",
  items: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "Css",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailWindCss",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJs",
    },
  ],
};

const Resume = () => {
  return (
    <section className="data-in min-h-[100vh] flex flex-col justify-center py-12 xl:py-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="data-in min-h-[80vh] flex items-center justify-center py-12 "
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col gap-[60px] xl:flex-row"
          >
            <TabsList className="gap-6 flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 ">
              <TabsTrigger value="experience" className="rounded-xl">
                Experience
              </TabsTrigger>
              <TabsTrigger value="education" className="rounded-xl">
                Educations
              </TabsTrigger>
              <TabsTrigger value="skills" className="rounded-xl">
                Skills
              </TabsTrigger>
              <TabsTrigger value="about" className="rounded-xl">
                About me
              </TabsTrigger>
            </TabsList>
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experiences.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experiences.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experiences.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-red-400">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.postion}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-red-400 "></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-red-400">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-red-400 "></span>
                            <p className="text-white/60">{item.istitution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] items-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px]">
                  {skills.items.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className=" group w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center">
                              <div className="text-6xl transition-all duration-300 group-hover:text-red-400">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center gap-4 xl:justify-start"
                      >
                        <span className="text-white/60">{item.filedName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
