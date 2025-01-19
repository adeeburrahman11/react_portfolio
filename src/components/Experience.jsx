import React from "react";
import ExperienceCard from "./ExperienceCard";

const experience = [
  {
    content:
      "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
    companyName: "Sophia Ramirez",
    imgSrc: "/images/people-1.jpg",
    duration: "PixelForge",
  },
  {
    content:
      "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
    companyName: "Ethan Caldwell",
    imgSrc: "/images/people-2.jpg",
    duration: "NexaWave",
  },
  {
    content:
      "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
    companyName: "Liam Bennett",
    imgSrc: "/images/people-3.jpg",
    duration: "CodeCraft",
  },
  {
    content:
      "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
    companyName: "Noah Williams",
    imgSrc: "/images/people-4.jpg",
    duration: "BrightWeb",
  },
  {
    content:
      "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
    companyName: "Ava Thompson",
    imgSrc: "/images/people-5.jpg",
    duration: "TechMosaic",
  },
  {
    content:
      "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
    companyName: "Jonathan",
    imgSrc: "/images/people-6.jpg",
    duration: "Skyline Digital",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8">My Experience</h2>
        <div className="flex items-stretch gap-3 w-fit">
          {experience.map(
            ({ content, companyName, imgSrc, duration }, index) => (
              <ExperienceCard
                key={index}
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
