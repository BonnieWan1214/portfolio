import { useState } from "react";
import styles from "./Footer.module.css";
import mailIcon from "../assets/mail_icon.png";
import linkedinIcon from "../assets/linkedin_icon.png";
import behanceIcon from "../assets/behance_icon.png";

function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("bonniewan1998@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>© 2026 Bonnie Wan. All rights reserved.</p>
        <div className={styles.socialIcons}>
          <button
            onClick={handleCopyEmail}
            className={styles.iconButton}
            aria-label="Copy email"
            title={copied ? "Copied!" : "Copy email"}
          >
            <img src={mailIcon} alt="Email" className={styles.icon} />
          </button>
          <a
            href="https://www.linkedin.com/in/bonniewan1998/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconButton}
            aria-label="LinkedIn"
          >
            <img src={linkedinIcon} alt="LinkedIn" className={styles.icon} />
          </a>
          <a
            href="https://www.behance.net/bonniewan1998"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconButton}
            aria-label="Behance"
          >
            <img src={behanceIcon} alt="Behance" className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
