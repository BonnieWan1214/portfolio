import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./About.module.css";
import about01 from "../assets/Aboutme01.png";
import about02 from "../assets/Aboutme02.png";
import about03 from "../assets/Aboutme03.png";
import resumePdf from "../assets/BonnieWan_Resume.pdf";

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
          <motion.section
            className={styles.aboutIntro}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.85, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className={styles.aboutIntroBold}>
              The Hybrid Designer who speaks the language of marketing
            </p>
            <p className={styles.aboutIntroBody}>
              Over the past five years, my design journey has taken me through e-commerce, publishing, and advertising industries, even into the world of B2B SaaS marketing. I bring a multidimensional perspective and a strategic lens to every project, ensuring design always serves a business purpose.
            </p>
          </motion.section>
          <motion.div
            className={styles.aboutTagsWrap}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
              hidden: {},
            }}
          >
            {["UI / UX Design", "Product Design", "Branding", "Graphic Design", "Digital Marketing Strategy"].map((label) => (
              <motion.span
                key={label}
                className={styles.aboutTagPill}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 10 },
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {label}
              </motion.span>
            ))}
          </motion.div>
          <motion.section
            className={styles.workExp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
              hidden: {},
            }}
          >
            <motion.h2
              className={styles.workExpHeading}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 12 },
              }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Work Experience
            </motion.h2>
            <motion.div
              className={styles.workExpListWrap}
              variants={{
                visible: { transition: { staggerChildren: 0, delayChildren: 0 } },
                hidden: {},
              }}
            >
            <motion.div
              className={styles.workExpList}
              variants={{
                visible: { transition: { staggerChildren: 0.2, delayChildren: 0.05 } },
                hidden: {},
              }}
            >
              {[
                { year: "2020", title: "Digital Graphic Designer", company: "Global Views Monthly" },
                { year: "2021", title: "Marketing Specialist", company: "Adidas (Headquarters)" },
                { year: "2022-Now", title: "Freelance Designer", company: "" },
                { year: "2022", title: "Digital Marketing Account Executive Intern", company: "Agility Group" },
                { year: "2023", title: "Graphic Designer Intern", company: "Shopee" },
                { year: "2024", title: "Marketing Specialist", company: "TenMax ad Tech Lab" },
              ].map(({ year, title, company }) => (
                <motion.div
                  key={`${year}-${title}`}
                  className={styles.workExpBlock}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 14 },
                  }}
                  transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <span className={styles.workExpYear}>{year}</span>
                  <span className={styles.workExpTitleCell}>{title}</span>
                  {company ? <span className={styles.workExpCompany}>{company}</span> : null}
                </motion.div>
              ))}
            </motion.div>
            </motion.div>
          </motion.section>
          <div className={styles.resumeWrap}>
            <a href={resumePdf} download="BonnieWan_Resume.pdf" className={styles.resumeBtn} aria-label="Download Resume">
              <span className={styles.resumeBtnShine} aria-hidden />
              Download Resume
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default About;
