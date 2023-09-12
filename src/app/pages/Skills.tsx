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
  }, [inView]);

  return (
    <>
      <div ref={ref} id="Skills" className="w-full h-screen">
        <div className="mx-56 h-full flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={animateH1}
            className="text-center mb-10 text-5xl font-bold"
          >
            <span>My Skills</span>
          </motion.h1>
          <div className="w-full flex gap-10">
            <div className="w-full">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={animateH1}
                className="w-full text-center font-bold py-1 px-2 mb-4 uppercase rounded-full drop-shadow-lg text-white bg-blue-700 bg-opacity-70"
              >
                Front-end
              </motion.h1>
              {skillsData
                .filter((skill) => skill.category === "Front-end")
                .map((skill, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={animateDetails}
                    transition={{ delay: index * 0.2 + 0.5, type: 'spring', bounce: 0.3 }}
                    key={skill.name}
                    className="mb-10"
                  >
                    <div className="flex justify-between items-center">
                      <h1 className="font-bold text-white text-xl drop-shadow-lg">
                        {skill.name}
                      </h1>
                      <h2 className="font-bold text-blue-500 text-lg drop-shadow-lg">
                        {skill.proficiency}%
                      </h2>
                    </div>
                    <div className="relative pt-1">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full drop-shadow-lg bg-neutral-600">
                        <motion.div
                          initial={{ opacity: 0, x: -100 }}
                          animate={animateProficiency}
                          transition={{ duration: 0.5, delay: 1.5 }}
                          style={{ width: `${skill.proficiency}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap border-black border-1 rounded-full text-white justify-center bg-gradient-to-r from-cyan-500 to-blue-500"
                        ></motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
            <div className="w-full">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={animateH1}
                className="w-full text-center font-bold py-1 px-2 mb-4 uppercase rounded-full drop-shadow-lg text-white bg-blue-700 bg-opacity-70"
              >
                Back-end
              </motion.h1>
              {skillsData
                .filter((skill) => skill.category === "Back-end")
                .map((skill, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={animateDetails}
                    transition={{ delay: index * 0.2 + 0.5, type: 'spring', bounce: 0.3 }}
                    key={skill.name}
                    className="mb-10"
                  >
                    <div className="flex justify-between items-center">
                      <h1 className="font-bold text-white text-xl drop-shadow-lg">
                        {skill.name}
                      </h1>
                      <h2 className="font-bold text-blue-500 text-lg drop-shadow-lg">
                        {skill.proficiency}%
                      </h2>
                    </div>
                    <div className="relative pt-1">
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full drop-shadow-lg bg-neutral-600">
                        <motion.div
                          initial={{ opacity: 0, x: -100 }}
                          animate={animateProficiency}
                          transition={{ duration: 0.5, delay: 1.5 }}
                          style={{ width: `${skill.proficiency}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap border-black border-1 rounded-full text-white justify-center bg-gradient-to-r from-cyan-500 to-blue-500"
                        ></motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
