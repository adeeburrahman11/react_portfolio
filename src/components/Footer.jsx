import React from "react";
import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "projects",
    href: "#projects",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/adeeburrahman11",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adeebur-rahman",
  },
  {
    label: "Twitter X",
    href: "https://x.com/adeebur_rahman",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/just.adeeb_11",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
              Let's work together!
            </h2>

            <ButtonPrimary
              href={"mailto:adeeburrahman9021@gmail.com"}
              label="Start project"
              icon="chevron_right"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      className="block text-sm text-cool-grey py-1 transition-colors hover:text-a-black"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2">Socials</p>
              <ul>
                {socials.map(({ label, href }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-cool-grey py-1 transition-colors hover:text-a-black"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="#home" className="">
            <img src="/images/logo.png" width={50} height={50} alt="Logo" />
          </a>
          <p className="text-cool-grey text-sm">
            &copy; 2024
            <span className="text-a-black ml-1">Adeebur Rahman</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
