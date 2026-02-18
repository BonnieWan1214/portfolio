import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./About.module.css";
import about01 from "../assets/Aboutme01.png";
import about02 from "../assets/Aboutme02.png";
import about03 from "../assets/Aboutme03.png";

function About() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.hero}>
            <motion.p
              className={styles.hiThere}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Hi there
            </motion.p>
            <div className={styles.nameStage}>
              <motion.h1
                className={styles.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.95, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                I’m Bonnie
              </motion.h1>

              <div className={styles.photoStack} aria-hidden="true">
                <motion.div
                  className={`${styles.photoCard} ${styles.photoCard01}`}
                  initial={{ opacity: 0, x: 140 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.75, delay: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <img src={about01} alt="" className={styles.photoImg} />
                </motion.div>
                <motion.div
                  className={`${styles.photoCard} ${styles.photoCard02}`}
                  initial={{ opacity: 0, x: 160 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.75, delay: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <img src={about02} alt="" className={styles.photoImg} />
                </motion.div>
                <motion.div
                  className={`${styles.photoCard} ${styles.photoCard03}`}
                  initial={{ opacity: 0, x: 180 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.75, delay: 2.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <img src={about03} alt="" className={styles.photoImg} />
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default About;
