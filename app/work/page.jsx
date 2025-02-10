// "use client";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { BsArrowUpRight, BsGithub } from "react-icons/bs";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import Link from "next/link";
// import Image from "next/image";

// const projects = [
//   {
//     num: "01",
//     category: "fronted",
//     title: "project",
//     description: "site de transcription audio /video",
//     stack: [{ name: "html 5" }, { name: "Css 3" }, { name: "Javascript" }],
//     image: "/public/globe.svg",
//     live: "",
//     github: "",
//   },
//   {
//     num: "02",
//     category: "fronted",
//     title: "project",
//     description: "site de transcription audio /video",
//     stack: [{ name: "html 5" }, { name: "Css 3" }, { name: "Javascript" }],
//     image: "/public/globe.svg",
//     live: "",
//     github: "",
//   },
//   {
//     num: "03",
//     category: "fronted",
//     title: "project",
//     description: "site de transcription audio /video",
//     stack: [{ name: "html 5" }, { name: "Css 3" }, { name: "Javascript" }],
//     image: "/public/globe.svg",
//     live: "",
//     github: "",
//   },
// ];

// const Work = () => {
//   const [project, setProject] = useState(project[0]);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="min-h-[80vh] flex justify-center py-12 xl:px-0"
//     >
//       <div className="container mx-auto">
//         <div className="flex flex-col xl:flex-row xl:gap-[30px]">
//           <div className="w-fulxl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
//             <div>
//               <div className="font-extrabold leading-none text-transparent text-8xl text-outline">
//                 {" "}
//                 {project.num}
//               </div>
//               <h2>{project.category}</h2>
//             </div>
//           </div>
//           <div className="w-full">slider</div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Work;
