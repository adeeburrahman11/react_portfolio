import React from "react";
import ExperienceCard from "./ExperienceCard";

const experience = [
  {
    title: "Full Stack Developer Intern",
    content:
      "Assisting in developing responsive and visually appealing web application using MERN stack.",
    companyName: "Clustor Computing",
    imgSrc: "/images/clustor_computing.jpg",
    duration: "DECEMBER 2024 - CURRENT",
  },
  {
    title: "Software Engineering Intern",
    content:
      "Developed a Full stack Notes App (web application) using MERN stack - MERN, JavaScript.",
    companyName: "Fledge Consulting",
    imgSrc: "/images/fledge.jpg",
    duration: "JUNE 2024 - JULY 2024",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8">My Experience</h2>
        <div className="flex items-stretch gap-3 w-fit">
          {experience.map(
            ({ title, content, companyName, imgSrc, duration }, index) => (
              <ExperienceCard
                key={index}
                title={title}
                content={content}
                companyName={companyName}
                imgSrc={imgSrc}
                duration={duration}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
