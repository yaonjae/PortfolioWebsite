"use client";

import { usePageInView } from "../lib/hooks";
import { motion, useAnimation } from "framer-motion";
import { educationData } from "../lib/data";
import { useEffect } from "react";

const Education = () => {
  const { ref, inView } = usePageInView("Education", 0.5);
  const animateH1 = useAnimation();
  const animateTimeline = useAnimation();

  useEffect(() => {
    if (inView) {
      animateH1.start({ opacity: 1 });
      animateTimeline.start({ opacity: 1, x: 0 });
    } else {
      animateH1.start({ opacity: 0 });
      animateTimeline.start({ opacity: 0, x: -30 });
    }
  }, [inView]);

  return (
    <>
      <div ref={ref} id="Education" className="w-full h-fit flex justify-center items-center my-5 lg:my-20">
        <div className="w-3/4 h-full flex flex-col justify-center items-center gap-0 lg:gap-10">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={animateH1}
            className="text-center my-2 font-bold text-3xl md:text-4xl lg:text-5xl mb-0 lg:mb-2"
          >
            <span>Education</span>
          </motion.h1>
          <div className="w-full flex flex-col lg:flex-row gap-5 px-4 lg:px-0">
            {educationData.map((education, index) => (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={animateTimeline}
                transition={{
                  delay: index * 0.2 + 0.2,
                  type: "spring",
                  bounce: 0.3,
                }}
                key={index}
                className="w-full flex flex-col"
              >
                <div className="w-full flex justify-center items-center gap-2">
                  <div className="w-20 h-16 bg-transparent border-cyan-500 border-4 rounded-full flex justify-center items-center drop-shadow-lg scale-75 lg:scale-100">
                    <h1 className="font-bold text-blue-500 text-2xl drop-shadow-lg">
                      {education.count}
                    </h1>
                  </div>
                  <div className="border-cyan-500 border-2 lg:border-b-8 rounded-full w-full"></div>
                </div>
                <div className="w-full pl-16">
                  <p className="font-bold text-white text-center mb-2 text-sm lg:text-base">
                    {education.date}
                  </p>
                  <div className="bg-gradient-to-b from-cyan-600 to-blue-700 rounded-lg p-4 flex flex-col gap-3">
                    <h1 className="font-bold text-white text-base lg:text-lg">
                      {education.title}
                    </h1>
                    <p className="font-medium text-white text-sm lg:text-base">
                      {education.location}
                    </p>
                    <p className="font-medium text-white text-sm lg:text-base">
                      {education.address}
                    </p>
                    <p className="font-medium text-white text-sm lg:text-base">
                      - {education.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
