import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-a-black/5 hover:bg-a-black/10 active:bg-a-black/15 ring-1 ring-inset ring-a-black/20 transition-colors " +
        classes
      }
    >
      <figure className="img-box aspect-square rounded-lg mb-4">
        <img src={imgSrc} loading="lazy" alt={title} className="img-cover" />
      </figure>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, index) => (
              <span
                key={index}
                className="h-8 text-sm text-cool-grey bg-a-black/15 grid items-center px-3 rounded-lg"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="grid">
          <a href={projectLink} className="" target="_blank">
            <div className="w-10 h-10 rounded-lg grid place-items-center bg-a-yellow text-cool-grey shrink-0 my-1">
              <span className="material-symbols-rounded" aria-hidden="true">
                link
              </span>
            </div>
          </a>
          <a href={projectLink} className="" target="_blank">
            <div className="w-10 h-10 rounded-lg grid place-items-center bg-a-yellow text-cool-grey shrink-0 my-1">
              <span className="material-symbols-rounded" aria-hidden="true">
                code
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
// import React from "react";
// import PropTypes from "prop-types";

// const ProjectCard = ({ imgSrc, title, tags = [], projectLink, classes }) => {
//   return (
//     <div className={"" + classes}>
//       <figure className="">
//         <img src={imgSrc} loading="lazy" alt={title} className="img-cover" />
//       </figure>
//       <div className="">
//         <div>
//           <h3 className="title-1">{title}</h3>
//           <div className="">
//             {tags.map((label, index) => (
//               <span key={index} className="">
//                 {label}
//               </span>
//             ))}
//           </div>
//         </div>
//         <div>
//           <span className="material-symbol-rounded" aria-hidden="true">
//             arrow_outward
//           </span>
//         </div>
//       </div>
//       <a href={projectLink} className="" target="_blank"></a>
//     </div>
//   );
// };

// ProjectCard.propTypes = {
//   imgSrc: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   tags: PropTypes.arrayOf(PropTypes.string),
//   projectLink: PropTypes.string,
//   classes: PropTypes.string,
// };

// export default ProjectCard;
