"use client";

import aboutPic from "../assets/images/aboutPic.jpg";
import { userDetails } from "../lib/data";
import { usePageInView } from "../lib/hooks";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const About = () => {
  const { ref, inView } = usePageInView("About");
  const animateAbout = useAnimation();
  const animateImage = useAnimation();

  useEffect(() => {
    if (inView) {
      animateImage.start({ opacity: 1 });
      animateAbout.start({ opacity: 1, y: 0 });
    } else {
      animateImage.start({ opacity: 0 });
      animateAbout.start({ opacity: 0, y: -50 });
    }
  }, [inView]);

  return (
    <>
      <div ref={ref} id="About" className="w-full h-fit flex justify-center items-center">
        <div className="w-3/4 h-full flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={animateImage}
            className="w-full flex justify-center items-center"
          >
            <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full border-8 border-cyan-600 overflow-hidden">
              <img src={aboutPic.src} />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={animateAbout}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full flex flex-col justify-center px-6 text-center"
          >
            <h1 className="w-full text-3xl md:text-4xl lg:text-5xl font-bold">
              <span>About Me</span>
            </h1>
            <div className="border-2 rounded-full my-4"></div>
            <p className="text-white text-sm md:text-base lg:text-lg drop-shadow-lg">{userDetails}</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
