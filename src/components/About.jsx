import React from "react";

const About = () => {
  const aboutItems = [
    {
      label: "Project done",
      number: 10,
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-a-black/5 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-a-black/80 mb-4 md:mb-8 md:text-lg md:max-w-[70ch]">
            Student pursuing my Bachelor's degree in Computer Science &
            Engineering from Nagpur, Maharashtra. Detail-oriented and ambitious
            engineering student with a passion for obtaining accurate results
            and working on a team. Seeking an entry-level position in the
            engineering industry to pursue a career as a Software Developer and
            improve my skill set.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, index) => (
              <div key={index}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-a-yellow font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-cool-grey">{label}</p>
              </div>
            ))}
            <img
              src="/images/logo.png"
              alt=""
              height={50}
              width={50}
              className="ml-auto md:w-[50px] md:h-[50px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
