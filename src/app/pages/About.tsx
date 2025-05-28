"use client";

import aboutPic from "../assets/images/aboutPic.jpg";
import { userDetails, userInfo } from "../lib/data";
import { usePageInView } from "../lib/hooks";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Cake, Calendar, Heart, Mars, MapPin } from 'lucide-react';

const fadeInVariant = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.3,
    },
  }),
};

const About = () => {
  const { ref, inView } = usePageInView("About", 0.2);
  const animateDiv = useAnimation();
  const { name, birthdate, age, gender, status, nationality, quote, hobby } = userInfo;

  useEffect(() => {
    if (inView) {
      animateDiv.start("visible");
    } else {
      animateDiv.start("hidden");
    }
  }, [inView]);

  return (
    <div ref={ref} id="About" className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-screen-xl px-4 grid grid-cols-4 gap-4 text-white text-sm">

        <motion.div
          custom={0}
          variants={fadeInVariant}
          initial="hidden"
          animate={animateDiv}
          className="w-full h-72 drop-shadow-md rounded-lg overflow-hidden relative">
          <img src={aboutPic.src} className="object-cover" />
          <div className="absolute w-full bottom-0 bg-gradient-to-t from-black to-transparent flex justify-center items-end h-32">
            <p className="text-center tracking-widest font-extrabold text-lg pb-3">{name}</p>
          </div>
        </motion.div>

        <motion.div
          custom={1}
          variants={fadeInVariant}
          initial="hidden"
          animate={animateDiv}
          className="w-full h-72 p-6 bg-white bg-opacity-5 drop-shadow-md rounded-lg col-span-2 space-y-0 xl:space-y-4 overflow-auto scroll-hidden">
          <h1 className="font-bold"><span>BIO :</span></h1>
          <p className="text-justify indent-10 leading-2 xl:leading-6">{userDetails}</p>
        </motion.div>

        <motion.div
          custom={2}
          variants={fadeInVariant}
          initial="hidden"
          animate={animateDiv}
          className="w-full h-72 p-6 bg-white bg-opacity-5 drop-shadow-md rounded-lg space-y-5">
          <h1 className="font-bold"><span>HOBBIES :</span></h1>
          <ul className="space-y-2 list-disc list-inside">
            {hobby.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          custom={3}
          variants={fadeInVariant}
          initial="hidden"
          animate={animateDiv}
          className="w-full h-60 p-6 bg-white bg-opacity-5 drop-shadow-md rounded-lg col-span-4 flex">
          <div className="w-1/3 space-y-8">
            <h1 className="font-bold"><span>PERSONAL :</span></h1>
            <div className="w-full grid grid-cols-2 gap-y-5">
              <div className="flex justify-start items-center gap-2">
                <Cake />
                <p>{age}</p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <Calendar />
                <p>{birthdate}</p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <Mars />
                <p>{gender}</p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <Heart />
                <p>{status}</p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <MapPin />
                <p>{nationality}</p>
              </div>
            </div>
          </div>
          <div className="h-full border-l-2 border-cyan-600 mx-4"></div>
          <div className="w-2/3">
            <div className="space-y-3">
              <h1 className="font-bold"><span>User Environment :</span></h1>
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <p>Home Space</p>
                  <p>Office Space</p>
                </div>
                <div className="bg-white bg-opacity-5 w-full rounded-md overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={animateDiv}
                    variants={{
                      visible: { width: "75%", transition: { duration: 0.8, delay: 0.1 } },
                      hidden: { width: 0 },
                    }}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-md"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <p>Solo Worker</p>
                  <p>Collaborator</p>
                </div>
                <div className="bg-white bg-opacity-5 w-full rounded-md overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={animateDiv}
                    variants={{
                      visible: { width: "65%", transition: { duration: 0.8, delay: 0.3 } },
                      hidden: { width: 0 },
                    }}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-md"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <p>Mobile</p>
                  <p>Desktop</p>
                </div>
                <div className="bg-white bg-opacity-5 w-full rounded-md overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={animateDiv}
                    variants={{
                      visible: { width: "90%", transition: { duration: 0.8, delay: 0.5 } },
                      hidden: { width: 0 },
                    }}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          custom={4}
          variants={fadeInVariant}
          initial="hidden"
          animate={animateDiv}
          className="w-full h-14 p-3 bg-white bg-opacity-5 drop-shadow-md rounded-lg col-span-4 flex items-center justify-center">
          <p className="text-center">{quote}</p>
        </motion.div>

      </div>
    </div>
  );
};

export default About;