import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import logoImage from "../assets/Logo_Bonnie.png";
import logoImageBlack from "../assets/logo_Bonnie_B.png";

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isLightMode, setIsLightMode] = useState(isHomePage);

  useEffect(() => {
    // If not on homepage, always use dark mode
    if (!isHomePage) {
      setIsLightMode(false);
      return;
    }

    // Light header on landing + work; dark header on about + contact
    const aboutSection = document.getElementById("about");
    const workSection = document.getElementById("work");
    const contactSection = document.getElementById("contact");
    if (!aboutSection) {
      setIsLightMode(true);
      return;
    }

    const handleScroll = () => {
      const workRect = workSection?.getBoundingClientRect();
      const aboutRect = aboutSection.getBoundingClientRect();
      const contactRect = contactSection?.getBoundingClientRect();
      // Contact at top → dark
      if (contactSection && contactRect.top <= 52) {
        setIsLightMode(false);
      } else if (workSection && workRect.top <= 52) {
        setIsLightMode(true);
      } else if (aboutRect.top <= 52) {
        setIsLightMode(false);
      } else {
        setIsLightMode(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <nav className={`${styles.navbar} ${isLightMode ? styles.navbarLight : styles.navbarDark}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} aria-label="Back to homepage">
          <img 
            src={isLightMode ? logoImageBlack : logoImage} 
            alt="Bonnie Wan Logo" 
            className={styles.logoImage} 
          />
        </Link>
        <div className={styles.navLinks}>
          <Link to="/about" className={`${styles.navLink} ${isLightMode ? styles.navLinkLight : styles.navLinkDark}`}>About</Link>
          <span className={`${styles.navSeparator} ${isLightMode ? styles.navSeparatorLight : styles.navSeparatorDark}`}>|</span>
          <Link to="/work" className={`${styles.navLink} ${isLightMode ? styles.navLinkLight : styles.navLinkDark}`}>Work</Link>
          <span className={`${styles.navSeparator} ${isLightMode ? styles.navSeparatorLight : styles.navSeparatorDark}`}>|</span>
          <Link
            to="/#contact"
            className={`${styles.navLink} ${isLightMode ? styles.navLinkLight : styles.navLinkDark}`}
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
