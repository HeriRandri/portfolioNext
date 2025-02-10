import { Button } from "@/components/ui/button";
import Image from "next/image";
import Social from "./components/ui/Social";
import Photo from "./components/ui/Photo";
import Stats from "./components/ui/Stats";

export default function Home() {
  return (
    <section className="h-screen data-in">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pb-24 ">
          <div className="order-2 text-center xl:text-left xl:order-none">
            <span className="text-2xl">Software Developer</span>
            <h1 className="text-[58px] xl:text-[80px] leading-[1.1] font-semibold">
              Hello I'm <br />
              <span className="text-red-400">Nandrianina</span>{" "}
            </h1>
            <p className="max-w-[400px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and i am
              proficient in various programming languages and technologies
            </p>
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Button>
                <span>Download CV</span>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyle="flex gap-6"
                  iconStyle="w-9 h-9 border border-red-400 rounded-full flex justify-center items-center text-red-400
                  text-base hover:bg-red-400 hover:text-white hover:transition-all duration-500"
                />
              </div>
            </div>
            <Stats style="xl:mt-10" />
          </div>
          <div className="order-1 mb-8 xl:order-none xl:mb-10">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
