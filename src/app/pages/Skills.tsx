"use client";

import React, { useEffect, useRef } from "react";
import { usePageInView } from "../lib/hooks";
import { skillsData } from "../lib/data";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  const { ref, inView } = usePageInView("Skills", 0.2);
  const animateContainer = useAnimation();

  useEffect(() => {
    if (inView) {
      animateContainer.start({ scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } });
    } else {
      animateContainer.start({ scale: 0, opacity: 0, transition: { duration: 0.3, ease: "easeIn" } });
    }
  }, [inView, animateContainer]);

  return (
    <>
      <div
        ref={ref}
        id="Skills"
        className="w-full h-screen flex justify-center items-center"
      >
        <motion.div
          className="w-full max-w-screen-xl px-4 h-full relative"
          initial={{ scale: 0, opacity: 0 }}
          animate={animateContainer}
        >
          <div className="slider" style={{ ['--quantity' as any]: skillsData.length }}>
            {skillsData.map((skill, index) => (
              <div
                key={skill.name}
                className="item flex flex-col text-white justify-center items-center bg-white bg-opacity-5 rounded-md hover:bg-cyan-900 transition-all"
                style={{ ['--position' as any]: index + 1 }}
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  className="w-14 h-20 object-contain"
                />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Skills;