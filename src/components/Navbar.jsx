import styles from "./Navbar.module.css";
import logoImage from "../assets/Logo_Bonnie.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <img src={logoImage} alt="Bonnie Wan Logo" className={styles.logoImage} />
        </a>
        <ul className={styles.navLinks}>
          <li>
            <a href="#about" className={styles.pillButton}>
              About
            </a>
          </li>
          <li>
            <a href="#work" className={styles.pillButton}>
              Work
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.pillButton}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
