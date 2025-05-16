"use client";

import { usePageInView } from "../lib/hooks";
import { motion, AnimatePresence } from "framer-motion";
import { educationData, experienceData } from "../lib/data";
import { useState } from "react";
import { EllipsisVertical, X } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3, ease: "easeInOut" } },
};

const headerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

const Education = () => {
  const { ref, inView } = usePageInView("Education", 0.2);
  const [expandedCard, setExpandedCard] = useState<{ type: "edu" | "exp"; index: number } | null>(null);

  const handleExpandClick = (type: "edu" | "exp", index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedCard((prev) => (prev?.type === type && prev.index === index ? null : { type, index }));
  };

  return (
    <div ref={ref} id="Education" className="w-full h-screen flex justify-center items-center my-5 lg:my-20">
      <div className="w-3/4 h-full flex flex-col justify-center items-center gap-10">
        <motion.div
          className="w-full flex justify-between px-4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          exit="exit"
        >
          <motion.h1 variants={headerVariants} className="text-4xl font-bold text-center w-full">
            <span>Education</span>
          </motion.h1>
          <motion.h1 variants={headerVariants} className="text-4xl font-bold text-center w-full">
            <span>Experience</span>
          </motion.h1>
        </motion.div>
        <motion.div
          className="w-full flex justify-between px-4 gap-5"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          exit="exit"
          variants={containerVariants}
        >
          <motion.div className="w-full space-y-4">
            {educationData.map((education, index) => {
              const isExpanded = expandedCard?.type === "edu" && expandedCard.index === index;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  layout
                  className="relative text-white bg-white rounded-md bg-opacity-5 p-6 overflow-hidden drop-shadow-lg cursor-pointer"
                >
                  <h1 className="font-semibold"><span>{education.title}</span></h1>
                  <p className="text-sm">{education.location}</p>
                  <p className="text-sm">{education.address}</p>
                  <p className="text-sm">{education.date}</p>
                  <button
                    onClick={(e) => handleExpandClick("edu", index, e)}
                    className="absolute top-4 right-4"
                    aria-label="Toggle description"
                  >
                    {isExpanded ? <X /> : <EllipsisVertical />}
                  </button>

                  <AnimatePresence mode="wait">
                    {isExpanded && (
                      <motion.p
                        key="description"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="text-sm mt-2"
                      >
                        {education.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div className="w-full space-y-4">
            {experienceData.map((experience, index) => {
              const isExpanded = expandedCard?.type === "exp" && expandedCard.index === index;
              return (
                <motion.div
                  key={`exp-${index}`}
                  variants={cardVariants}
                  layout
                  className="relative text-white bg-white rounded-md bg-opacity-5 p-6 overflow-hidden drop-shadow-lg cursor-pointer"
                >
                  <h1 className="font-semibold"><span>{experience.position}</span></h1>
                  <p className="text-sm">{experience.location}</p>
                  <p className="text-sm">{experience.address}</p>
                  <p className="text-sm">{experience.date}</p>
                  <button
                    onClick={(e) => handleExpandClick("exp", index, e)}
                    className="absolute top-4 right-4"
                    aria-label="Toggle projects"
                  >
                    {isExpanded ? <X /> : <EllipsisVertical />}
                  </button>
                  <AnimatePresence mode="wait">
                    {isExpanded && (
                      <motion.div
                        key="exp-description"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="text-sm space-y-3 mt-2"
                      >
                        {experience.projects.map((project, pIndex) => (
                          <div key={pIndex}>
                            <p className="font-semibold">{project.title} :</p>
                            <p>{project.description}</p>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
