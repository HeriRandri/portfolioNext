import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div className="py-8 text-white data-in xl:py-6">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Nandrianina <span className="text-red-600 ">.</span>
          </h1>
        </Link>
        {/* DeskTop Nav  */}
        <div className="items-center hidden gap-8 xl:flex">
          <Nav />
          <Link href="/contact">
            <Button>Hired me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
