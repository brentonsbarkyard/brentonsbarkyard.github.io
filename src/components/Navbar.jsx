import { useState } from "react";
import BookingModal from "./BookingModal";
import InstagramIcon from "./InstagramIcon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpened] = useState(false);
  const menuClass = isMenuOpen ? "is-active" : "";

  const toggleMenu = () => setIsMenuOpened(!isMenuOpen);
  const closeMenu = () => setIsMenuOpened(false);

  const scrollTo = (id) => {
    closeMenu();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  return (
    <nav
      className="navbar is-dark is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            href="https://instagram.com/brentons_barkyard"
            target="_blank"
            className="is-flex is-align-items-center ml-3"
          >
            <InstagramIcon />
          </a>
          <div className="navbar-item">Brenton's Barkyard</div>
          <a
            role="button"
            onClick={toggleMenu}
            className={`navbar-burger ${menuClass}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${menuClass}`}>
          <div className="navbar-end">
            <BookingModal isNavItem={true} />
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" onClick={() => scrollTo("services")}>
                Services
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item" onClick={() => scrollTo("boarding")}>
                  Boarding
                </a>
                <a className="navbar-item" onClick={() => scrollTo("daycare")}>
                  Daycare
                </a>
                <a
                  className="navbar-item"
                  onClick={() => scrollTo("park-visit")}
                >
                  Park Visit
                </a>
                <a
                  className="navbar-item"
                  onClick={() => scrollTo("drop-in-visit")}
                >
                  Drop-In Visit
                </a>
                <a
                  className="navbar-item"
                  onClick={() => scrollTo("pick-up-drop-off")}
                >
                  Pickup/Dropoff
                </a>
                <a
                  className="navbar-item"
                  onClick={() => scrollTo("extra-care")}
                >
                  Extra Care
                </a>
                <hr
                  className="navbar-divider"
                  style={{ backgroundColor: "#dbdbdb" }}
                />
                <a className="navbar-item" onClick={() => scrollTo("policy")}>
                  Policy
                </a>
                <a className="navbar-item" onClick={() => scrollTo("policy")}>
                  Terms & Conditions
                </a>
              </div>
            </div>

            <a className="navbar-item" onClick={() => scrollTo("about")}>
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
