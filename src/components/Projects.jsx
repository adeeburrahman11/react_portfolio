import React from "react";
import ProjectCard from "./ProjectCard";
import { ButtonMore } from "./Button";

const projects = [
  {
    imgSrc: "/images/project-notes.png",
    title: "Full stack Notes App",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://notes-app-adeeb.vercel.app/",
    githubLink: "https://github.com/adeeburrahman11/Notes-App",
    linkIcon: "link",
  },
  {
    imgSrc: "/images/project-quizApp.png",
    title: "Flutter Quiz App",
    tags: ["Flutter", "Android"],
    projectLink:
      "https://drive.google.com/file/d/1SizubUiIUHUH1Qx2luGM8FzKbuZFw5jL/view?usp=sharing",
    githubLink: "https://github.com/adeeburrahman11/quiz_app",
    linkIcon: "android",
  },
  {
    imgSrc: "/images/project-diceRoll.png",
    title: "Dice Roll App",
    tags: ["Flutter", "Android"],
    projectLink:
      "https://drive.google.com/file/d/1Uir9C3-GKsImH8uHG0jVaJUM_hVTHNQE/view?usp=sharing",
    githubLink: "https://github.com/adeeburrahman11/dice_roll",
    linkIcon: "android",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">My project highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {projects.map(
            (
              { imgSrc, title, tags, projectLink, githubLink, linkIcon },
              index
            ) => (
              <ProjectCard
                key={index}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                githubLink={githubLink}
                linkIcon={linkIcon}
              />
            )
          )}
        </div>
        <div className="flex justify-center mt-8">
          <ButtonMore
            href="https://github.com/adeeburrahman11"
            label="Show More"
            icon="arrow_outward"
          />
          {/* <button type="submit" className="btn btn-primary">
            <a href="https://github.com/adeeburrahman11" target="_blank">
              Show More
            </a>
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
