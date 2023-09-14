"use client";

import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { links } from "@/app/lib/data";
import { useActivePageContext } from "@/app/context/active-page-context";

const Sidebar = () => {
  const { active, setActive } = useActivePageContext();

  return (
    <>
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 380,
          damping: 30,
        }}
        className="fixed w-fit lg:w-28 h-full p-6 flex justify-center items-center z-[999]"
      >
        <div className="bg-white bg-opacity-5 w-full p-2 rounded-full">
          <ul className="flex flex-col justify-center items-center my-4 gap-2 lg:gap-6">
            {links.map((link, index) => (
              <li key={index} className="relative scale-75 lg:scale-100">
                <Link
                  href={link.href}
                  onClick={() => setActive(link.text)}
                  className={clsx(
                    "text-black hover:text-blue-400 duration-100",
                    {
                      "text-blue-400": active === link.text,
                    }
                  )}
                >
                  {link.icon}
                  {link.text === active && (
                    <motion.span
                      layoutId="active"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="bg-cyan-900 rounded-full absolute inset-0 -z-10 blur-md"
                    ></motion.span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
