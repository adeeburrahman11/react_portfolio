import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import PropTypes from "prop-types";

const Navbar = forwardRef(({ navOpen }, ref) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  // const contactLinkRef = useRef();

  const initActiveBox = () => {
    if (lastActiveLink.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height =
        lastActiveLink.current.offsetHeight + "px";
    }
  };

  useEffect(initActiveBox, []);
  window.addEventListener("resize", initActiveBox);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;
    activeBox.current.style.top = event.target.offsetTop + "px";
    activeBox.current.style.left = event.target.offsetLeft + "px";
    activeBox.current.style.width = event.target.offsetWidth + "px";
    activeBox.current.style.height = event.target.offsetHeight + "px";
  };

  useImperativeHandle(ref, () => ({
    // removeActiveBox: () => {
    //   lastActiveLink.current?.classList.remove("active");
    //   activeBox.current.style.width = "0";
    //   activeBox.current.style.height = "0";
    // },
    setActiveLink: (link) => {
      const targetLink = navItems.find((item) => item.link === link);
      if (targetLink && targetLink.ref.current) {
        activeCurrentLink({ target: targetLink.ref.current });
      }
    },
  }));

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
      ref: useRef(),
    },
    {
      label: "Projects",
      link: "#projects",
      className: "nav-link",
      ref: useRef(),
    },
    {
      label: "Experience",
      link: "#experience",
      className: "nav-link",
      ref: useRef(),
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
      ref: useRef(),
    },
  ];

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          className={className}
          key={key}
          ref={ref}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
});

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
