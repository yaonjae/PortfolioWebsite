"use client";

import React, { useEffect } from "react";
import { usePageInView } from "../lib/hooks";
import { skillsData } from "../lib/data";
import { motion, useAnimation } from "framer-motion";

const Skills = () => {
  const { ref, inView } = usePageInView("Skills", 0.5);
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
        className="w-full h-fit flex justify-center items-center"
      >
        <div className="w-3/4 h-full flex flex-col justify-center px-4 lg:px-0 mb-10 lg:mb-20">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={animateH1}
            className="text-center mb-10 text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            <span>My Skills</span>
          </motion.h1>
          <div className="w-full flex flex-col gap-5 lg:gap-10">
            <div className="w-full">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={animateH1}
                className="text-center text-sm lg:text-base font-bold py-1 px-2 mb-4 uppercase drop-shadow-lg bg-blue-700 rounded-full text-white"
              >
                Web Development Skills
              </motion.h1>
              <div className="flex flex-wrap justify-center gap-3">
                {skillsData
                  .filter((skill) => skill.category === "Web Development")
                  .map((skill, index) => (
                    <motion.p
                      initial={{ opacity: 0, y: -50 }}
                      animate={animateDetails}
                      transition={{
                        delay: index * 0.1 + 0.1,
                        type: "spring",
                        bounce: 0.3,
                      }}
                      key={skill.name}
                      className="text-white text-sm lg:text-base py-1 lg:py-2 px-2 lg:px-4 bg-blue-700 rounded drop-shadow-lg font-bold"
                    >
                      {skill.name}
                    </motion.p>
                  ))}
              </div>
            </div>
            <div className="w-full">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={animateH1}
                className="text-center text-sm lg:text-base font-bold py-1 px-2 mb-4 uppercase drop-shadow-lg bg-blue-700 rounded-full text-white"
              >
                Other Programming Skills
              </motion.h1>
              <div className="flex flex-wrap justify-center gap-3">
                {skillsData
                  .filter((skill) => skill.category === "Others")
                  .map((skill, index) => (
                    <motion.p
                      initial={{ opacity: 0, y: -50 }}
                      animate={animateDetails}
                      transition={{
                        delay: index * 0.1 + 0.1,
                        type: "spring",
                        bounce: 0.3,
                      }}
                      key={skill.name}
                      className="text-white text-sm lg:text-base py-1 lg:py-2 px-2 lg:px-4 bg-blue-700 rounded drop-shadow-lg font-bold"
                    >
                      {skill.name}
                    </motion.p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;