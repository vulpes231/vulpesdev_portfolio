import React, { useState } from "react";
import { experiences } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../constants/styles";

const Experience = () => {
  const [activeExperiences, setActiveExperiences] = useState({});

  function toggleExperience(expId) {
    setActiveExperiences((prev) => ({
      ...prev,
      [expId]: !prev[expId],
    }));
  }

  const workExperiences = experiences.map((exp) => (
    <article key={exp.id}>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          ease: "linear",
          duration: 2,
          x: { duration: 0.5 },
        }}
        className="flex flex-col gap-3 cursor-pointer "
      >
        <div
          onClick={() => toggleExperience(exp.id)}
          className="font-extralight bg-[#fff] text-[#0D0D0D] p-4 rounded-md"
        >
          <div className="flex items-center">
            <span className="font-medium">{exp.position}</span>
            <span className="text-[#F24B59] font-medium">{exp.company}</span>
          </div>
          <small className="font-extralight">{exp.date}</small>
        </div>

        <ul
          className={
            !activeExperiences[exp.id]
              ? "hidden"
              : "list-disc flex flex-col gap-2 text-slate-600 font-[Montserrat] text-sm font-extralight"
          }
        >
          {exp.achievements.map((achievement, index) => (
            <li className="mx-5 ml-5 text-xs" key={index}>
              {achievement}
            </li>
          ))}
        </ul>
      </motion.div>
    </article>
  ));
  return (
    <section
      id="experience"
      className={`${styles.colors.darkBg} ${styles.padding.large} min-h-screen bg-opacity-10 ${styles.fontFamily.primary}`}
    >
      <div className="lg:max-w-[1000px] mx-auto">
        <div className="">
          <h3 className="text-2xl md:text-3xl text-[#333] font-semibold mt-20 mb-10 capitalize inline-block border-b-4 border-b-[#F24B59]">
            Experiences
          </h3>
        </div>
        <div className="flex flex-col gap-4">{workExperiences}</div>
      </div>
    </section>
  );
};

export default Experience;
