"use client";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
const services = [
  {
    num: "01",
    title: "We Development",
    description: "Lorem ipsum dolor sit amet consectetur elit",
    href: "",
  },
  {
    num: "02",
    title: "Mobile Development",
    description: "Lorem ipsum dolor sit amet consectetur elit",
    href: "",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description: "Lorem ipsum dolor sit amet consectetur elit",
    href: "",
  },
  {
    num: "04",
    title: "Application Desktop",
    description: "Lorem ipsum dolor sit amet consectetur elit",
    href: "",
  },
];
const Services = () => {
  return (
    <section className="flex flex-col justify-center py-12 data-in xl:py-0 xl:pt-10">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
        >
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center flex-1 gap-6 group"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="text-5xl font-extrabold text-transparent text-outline group-hover:text-red-400">
                    {item.num}
                  </div>
                  <Link
                    href={item.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-red-400 transition-all duration-500 flex justify-center items-center hover:rotate-45"
                  >
                    <BsArrowDownRight className="text-3xl text-red-400 group-hover:text-white" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-red-400 transition-all duration-500">
                  {item.title}
                </h2>
                <p>{item.description}</p>
                {/**Border */}
                <div className="border-b border-white/20 w--full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
