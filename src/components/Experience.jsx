import React from "react";
import ExperienceCard from "./ExperienceCard";

// import styles bundle
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { Pagination, FreeMode, Autoplay } from "swiper/modules";

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
  {
    title: "Software Engineering Intern",
    content:
      "Developed a Full stack Notes App (web application) using MERN stack - MERN, JavaScript.",
    companyName: "Fledge Consulting",
    imgSrc: "/images/fledge.jpg",
    duration: "JUNE 2024 - JULY 2024",
  },
  {
    title: "Software Engineering Intern",
    content:
      "Developed a Full stack Notes App (web application) using MERN stack - MERN, JavaScript.",
    companyName: "Fledge Consulting",
    imgSrc: "/images/fledge.jpg",
    duration: "JUNE 2024 - JULY 2024",
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
    <section id="experience" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Experience</h2>
        <div className="flex items-stretch">
          <Swiper
            breakpoints={{
              780: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
            }}
            spaceBetween={15}
            freeMode={true}
            pagination={{
              // bulletClass: "swiper-bullet",
              // bulletActiveClass: "swiper-bullet-active",
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            // className="max-w-[90%] lg:max-w-[80%]"
          >
            {experience.map(
              ({ title, content, companyName, imgSrc, duration }, index) => (
                <SwiperSlide key={index}>
                  <ExperienceCard
                    key={index}
                    title={title}
                    content={content}
                    companyName={companyName}
                    imgSrc={imgSrc}
                    duration={duration}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Experience;
