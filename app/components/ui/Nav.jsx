"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const link = [
  {
    name: "home",
    paht: "/",
  },
  {
    name: "service",
    paht: "/services",
  },
  {
    name: "resume",
    paht: "/resume",
  },
  {
    name: "contact",
    paht: "/contact",
  },
];

function Nav() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div>
      <nav className="flex gap-8">
        {link.map((link, index) => {
          return (
            <Link
              href={link.paht}
              key={index}
              className={`${
                link.paht === pathname &&
                "text-red-700 border-b-2 border-red-700"
              } capitalize font-medium hover:text-red-700 transition-all`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Nav;
