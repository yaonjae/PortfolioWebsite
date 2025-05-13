"use client";

import React, { useEffect, useRef } from "react";
import { usePageInView } from "../lib/hooks";
import { skillsData } from "../lib/data";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  const { ref, inView } = usePageInView("Skills", 0.2);
  const animateH1 = useAnimation();
  const animateDetails = useAnimation();
  const animateProficiency = useAnimation();

  useEffect(() => {
    if (inView) {
      animateH1.start({ opacity: 1 });
      animateDetails.start({ opacity: 1, y: 0 });
      animateProficiency.start({ opacity: 1, x: 0 });
    } else {
      animateH1.start({ opacity: 0 });
      animateDetails.start({ opacity: 0, y: -50 });
      animateProficiency.start({ opacity: 0, x: -100 });
    }
  }, [inView, animateH1, animateDetails, animateProficiency]);

  return (
    <>
      <div
        ref={ref}
        id="Skills"
        className="w-full h-screen flex justify-center items-center"
      >
        <div className="w-3/4 h-full flex flex-col justify-center px-4 lg:px-0 mb-10 lg:mb-20">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={animateH1}
            className="text-center mb-10 text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            <span>My Skills</span>
          </motion.h1>
          <div className="flex flex-wrap justify-center items-start gap-5 p-4 w-full overflow-y-auto">
            {skillsData.map((skill, index) => (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={animateDetails}
                transition={{
                  delay: index * 0.1 + 0.1,
                  type: "spring",
                  bounce: 0.3,
                }}
                key={skill.name}
                className="flex flex-col w-40 h-40 justify-center items-center border-2 border-cyan-600 rounded-md text-white gap-2 bg-[rgba(255,255,255,0.05)]"
              >
                <Image src={skill.icon} alt={skill.name} className="w-24 h-24" />
                <p>{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;