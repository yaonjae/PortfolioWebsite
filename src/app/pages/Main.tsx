"use client";

import profilePic from "../assets/images/profilePic.png";
import { usePageInView } from "../lib/hooks";
import { motion, useAnimation } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useEffect } from "react";
import Cube from "../assets/components/cube";
import { intro} from "../lib/data";

const Main = () => {
  const { ref, inView } = usePageInView("Index", 0.2);

  const [text] = useTypewriter({
    words: ["Web Development", "Web Design", "Programming"],
    loop: Infinity,
    typeSpeed: 100,
    deleteSpeed: 80,
  });

  const animateImage = useAnimation();
  const animateName = useAnimation();

  useEffect(() => {
    if (inView) {
      animateImage.start({ opacity: 1, scale: 1 });
      animateName.start({ opacity: 1, x: 0 });
    } else {
      animateImage.start({ opacity: 0, scale: 0.3 });
      animateName.start({ opacity: 0, x: -100 });
    }
  }, [inView]);

  return (
    <>
      <div
        ref={ref}
        id="Index"
        className="w-full h-screen flex justify-center items-center"
      >
        <div className="w-full max-w-screen-xl px-4 h-full flex justify-center gap-2 lg:gap-0 flex-col lg:flex-row">
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={animateImage}
            className="w-full flex items-center justify-center"
          >
            <Cube />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={animateName}
            transition={{ delay: 0.5 }}
            className="w-full flex flex-col gap-1 lg:gap-4 justify-center items-start"
          >
            <h2 className="font-semibold text-white text-xl lg:text-2xl drop-shadow-md">
              {`Hi there, I'm Jae`}
            </h2>
            <h1 className="font-extrabold text-center text-white text-2xl lg:text-3xl xl:text-4xl">
              I am into <span>{text}</span>
              <span>
                <Cursor cursorStyle="|" />
              </span>
            </h1>
            <h2 className="text-white text-xs lg:text-base drop-shadow-md">
              {intro}
            </h2>
            <div className="follow-list">
              <ol className="flex gap-1 lg:gap-4">
                <li className="p-3 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 group hover:scale-110 active:scale-105 transition-all scale-75 lg:scale-100">
                  <a
                    href="https://www.facebook.com/profile.php?id=100004264547024&mibextid=ZbWKwL"
                    target="_blank"
                  >
                    <svg
                      className="h-8 w-8 text-black group-hover:text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                </li>
                <li className="p-3 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 group hover:scale-110 active:scale-105 transition-all scale-75 lg:scale-100">
                  <a
                    href="https://www.linkedin.com/in/jae-yaon-b5264327a"
                    target="_blank"
                  >
                    <svg
                      className="h-8 w-8 text-black group-hover:text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
                      <rect x="2" y="9" width="4" height="12" />{" "}
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </li>
                <li className="p-3 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 group hover:scale-110 active:scale-105 transition-all scale-75 lg:scale-100">
                  <a href="https://github.com/yaonjae" target="_blank">
                    <svg
                      className="h-8 w-8 text-black group-hover:text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                </li>
              </ol>
            </div>
            <div>
              <a href="#Contact">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Hire Me
                  </span>
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Main;
