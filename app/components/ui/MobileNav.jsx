"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link"; // Correction : Importation correcte de Link
import { CiMenuFries } from "react-icons/ci";

// Correction du tableau link, changement de "paht" en "path"
const link = [
  {
    name: "home",
    path: "/", // Correction de "paht" à "path"
  },
  {
    name: "service",
    path: "/services", // Correction de "paht" à "path"
  },
  {
    name: "resume",
    path: "/resume", // Correction de "paht" à "path"
  },
  {
    name: "contact",
    path: "/contact", // Correction de "paht" à "path"
  },
];

const MobileNav = () => {
  const pathname = usePathname(); // Utilisation de usePathname pour obtenir le chemin actuel

  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="text-[32px] text-red-400" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="text-white">
          <div className="mt-32 mb-20 text-2xl text-center">
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                Niavo <span className="text-red-400">.</span>
              </h1>
            </Link>
          </div>
          <nav className="flex items-center justify-center gap-8">
            {/* Navigation dynamique basée sur le tableau link */}
            <ul className="flex flex-col space-y-4">
              {link.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    href={path}
                    className={`text-xl ${
                      pathname === path ? "text-red-400" : "text-white"
                    }`} // Ajout d'une classe active pour le lien actif
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
