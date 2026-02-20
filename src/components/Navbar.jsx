import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import logoImage from "../assets/Logo_Bonnie.png";
import logoImageBlack from "../assets/Logo_Bonnie_B.png";

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

    // Only check for landing/about section on homepage
    const aboutSection = document.getElementById("about");
    if (!aboutSection) {
      setIsLightMode(true); // Default to light mode on landing section
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When about section touches the top of viewport (header area)
          if (entry.boundingClientRect.top <= 0) {
            setIsLightMode(false);
          } else {
            setIsLightMode(true);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "-52px 0px 0px 0px", // Account for header height
      }
    );

    observer.observe(aboutSection);

    // Also check on scroll for more accurate detection
    const handleScroll = () => {
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top <= 52) {
        setIsLightMode(false);
      } else {
        setIsLightMode(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
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
          <a href="/#contact" className={`${styles.navLink} ${isLightMode ? styles.navLinkLight : styles.navLinkDark}`}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
