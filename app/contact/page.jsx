"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+261)382663429",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "hrandri30@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Madagascar",
  },
];

const Contact = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen py-12 xl:py-0">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="h-screen py-6 data-in"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px] ">
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form className="flex flex-col gap-6 p-10  bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-red-400 before:">
                  Let's Work Together
                </h3>
                <p className="text-white/60">
                  je vis a Madagascar , c'est un pays tres aggreable et
                  incroyable, avec une paysage tres motivant
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
                  <Input type="firstname" placeholder="FirstName" />
                  <Input type="lastname" placeholder="lastname" />
                  <Input type="Email" placeholder="Email" />
                  <Input type="Phone" placeholder="Phone Number" />
                </div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a services" />
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select a Service</SelectLabel>
                        <SelectItem value="est">Web Development</SelectItem>
                        <SelectItem value="cst">UI/UX Design</SelectItem>
                        <SelectItem value="mst">Mobile Development</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </SelectTrigger>
                </Select>
                <Textarea
                  className="h-[200px]"
                  placeholder="Type your message here"
                />
                <Button size="md" className="max-w-40">
                  Send message
                </Button>
              </form>
            </div>
            <div className="flex items-center flex-1 order-1 mb-8 xl:justify-center xl:order-none xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-red-400 rounded-md flex items-center justify-center ">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>

                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default Contact;
