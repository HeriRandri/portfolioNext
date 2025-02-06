"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      {/* Ce div est pour le fond de la transition */}
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        exit={{
          opacity: 0,
          transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
        }}
        className="fixed top-0 left-0 w-screen h-screen pointer-events-none bg-primary"
      />
      {/* Les enfants sont rendus après la transition */}
      {children}
    </AnimatePresence>
  );
};

export default PageTransition;
