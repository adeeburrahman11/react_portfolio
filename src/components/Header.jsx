import React, { useState, useRef } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navBarRef = useRef();
  const handleContactClick = () => {
    // navBarRef.current?.removeActiveBox();
    navBarRef.current?.setActiveLink("#contact");
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-baby-blue to-baby-blue/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md-grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="/" className="logo">
            <img
              width={80}
              height={80}
              src="/images/logo.png"
              alt="Adeebur Rahman"
            />
          </a>
        </h1>
        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} ref={navBarRef} />
        </div>
        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
          onClick={handleContactClick}
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
