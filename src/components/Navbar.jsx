import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logoImage from "../assets/Logo_Bonnie.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} aria-label="Back to homepage">
          <img src={logoImage} alt="Bonnie Wan Logo" className={styles.logoImage} />
        </Link>
        <div className={styles.navLinks}>
          <Link to="/about" className={styles.navLink}>About</Link>
          <span className={styles.navSeparator}>|</span>
          <Link to="/work" className={styles.navLink}>Work</Link>
          <span className={styles.navSeparator}>|</span>
          <a href="/#contact" className={styles.navLink}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
