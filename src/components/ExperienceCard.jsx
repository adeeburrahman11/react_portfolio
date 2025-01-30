import React from "react";
import PropTypes from "prop-types";

const ExperienceCard = ({ content, companyName, imgSrc, duration }) => {
  return (
    <div className=" bg-a-black/5 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
      <p className="text-cool-grey mb-8">{content}</p>
      <div className="flex items-center gap-2 mt-auto">
        <figure className="img-box rounded-lg">
          <img
            src={imgSrc}
            alt={companyName}
            width={44}
            height={44}
            loading="lazy"
            className="img-cover"
          />
        </figure>
        <div>
          <p>{companyName}</p>
          <p className="text-xs text-cool-grey tracking-wider">{duration}</p>
        </div>
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  content: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

export default ExperienceCard;
