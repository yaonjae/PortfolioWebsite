"use client";

import aboutPic from "../assets/images/aboutPic.jpg";
import { userDetails, userInfo } from "../lib/data";
import { usePageInView } from "../lib/hooks";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Cake, Calendar, Heart, Mars, MapPin } from 'lucide-react';

const About = () => {
  const { ref, inView } = usePageInView("About", 0.2);
  const animateAbout = useAnimation();
  const animateImage = useAnimation();
  const { name, birthdate, age, gender, status, nationality, quote, hobby } = userInfo;

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
      <div ref={ref} id="About" className="w-full h-screen flex justify-center items-center">
        <div className="w-3/5 grid grid-cols-4 gap-4 text-white text-sm">
          <div className="w-full h-72 drop-shadow-md rounded-lg overflow-hidden relative">
            <img src={aboutPic.src} className="object-cover" />
            <div className="absolute w-full bottom-0 bg-gradient-to-t from-black to-transparent flex justify-center items-end h-32">
              <p className="text-center tracking-widest font-extrabold text-lg pb-3">{name}</p>
            </div>
          </div>
          <div className="w-full h-72 p-6 bg-white bg-opacity-5 drop-shadow-md rounded-lg col-span-2 space-y-5">
            <h1 className="font-bold"><span>BIO :</span></h1>
            <p className="text-justify indent-10 leading-6">{userDetails}</p>
          </div>
          <div className="w-full h-72 p-6 bg-white bg-opacity-5 drop-shadow-md rounded-lg space-y-5">
            <h1 className="font-bold"><span>HOBBIES :</span></h1>
            <ul className="space-y-2 list-disc list-inside">
              {hobby.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>
          <div className="w-full h-60 p-6 bg-white bg-opacity-5 drop-shadow-md rounded-lg col-span-4 flex">
            <div className="w-96 space-y-8">
              <h1 className="font-bold"><span>PERSONAL :</span></h1>
              <div className="w-full grid grid-cols-2  gap-y-5">
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
            <div className="h-full border-l-2 border-cyan-600 mx-2"></div>
          </div>
          <div className="w-full h-14 p-3 bg-white bg-opacity-5 drop-shadow-md rounded-lg col-span-4 flex items-center justify-center"><p className="text-center">{quote}</p></div>
        </div>
      </div>
    </>
  );
};

export default About;
