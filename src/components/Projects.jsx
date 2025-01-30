import React from "react";
import ProjectCard from "./ProjectCard";
import { ButtonMore } from "./Button";

const projects = [
  {
    imgSrc: "/images/project-notes.png",
    title: "Full stack Notes App",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://notes-app-adeeb.vercel.app/",
    linkIcon: "link",
  },
  {
    imgSrc: "/images/project-flutter.png",
    title: "Flutter Quiz App",
    tags: ["Flutter"],
    projectLink: "https://github.com/adeeburrahman11/quiz_app",
    linkIcon: "android",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "Recipe app",
    tags: ["Development", "API"],
    projectLink: "",
    linkIcon: "android",
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Real state website",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee-org/wealthome",
    linkIcon: "link",
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "eCommerce website",
    tags: ["eCommerce", "Development"],
    projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
    linkIcon: "link",
  },
  {
    imgSrc: "/images/project-6.jpg",
    title: "vCard Personal portfolio",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
    linkIcon: "link",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">My project highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {projects.map(
            ({ imgSrc, title, tags, projectLink, linkIcon }, index) => (
              <ProjectCard
                key={index}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
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
