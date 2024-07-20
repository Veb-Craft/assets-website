import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useNavigate } from "react-router-dom";

import { navbarData } from "../data";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const NAV_LINKS = Object.values(navbarData.LINKS);

  const handleNavigate = (link) => {
    if (link.startsWith("http://") || link.startsWith("https://")) {
      // External link
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      // Internal link
      navigate(link);
    }
  };

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="fixed inset-x-0 top-10 z-[5000] mx-auto flex min-w-[50%] max-w-fit items-center justify-between gap-4 rounded-full border border-transparent bg-black px-3 py-4 md:gap-10 md:px-8"
      >
        <div className="hidden max-h-7 items-center justify-center md:flex">
          <img
            className="aspect-square size-12 object-contain"
            src={navbarData.LOGO}
            alt="VebCraft Logo"
          />
        </div>
        <nav className="flex items-center justify-evenly gap-1 md:gap-8">
          {NAV_LINKS.map((navItem, idx) => (
            <ul
              key={`link=${idx}`}
              onClick={() => handleNavigate(navItem.link)}
              className="relative flex cursor-pointer select-none items-center p-1 text-white hover:opacity-90"
            >
              <span className="text-sm md:text-xl">{navItem.name}</span>
            </ul>
          ))}
        </nav>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
