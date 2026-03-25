import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BounceCards from "./components/BounceCards";
import styles from "./App.module.css";
import landing1 from "./assets/Landing page_1.png";
import landing2 from "./assets/Landing page_2.png";
import landing3 from "./assets/Landing page_3.png";
import landing4 from "./assets/Landing page_4.png";
import landing5 from "./assets/Landing-page_5.png";
import landing6 from "./assets/Landing-page_6.png";
import landing7 from "./assets/Landing-page_7.jpg";
import landingTag01 from "./assets/Landing-page_tag01.png";
import landingTag02 from "./assets/Landing-page_tag02.png";
import workUXUI01 from "./assets/Work_landingpage_UXUI01.png";
import workUXUI02 from "./assets/Work_landingpage_UXUI02.png";
import workDesign01 from "./assets/Work_landingpage_design01.png";
import workDesign02 from "./assets/Work_landingpage_design02.png";
import bonniePhoto from "./assets/Picture_Bonnie.png";

function StatNumber({ value, suffix = "" }) {
  const [display, setDisplay] = useState(0);
  const hasAnimatedRef = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    let frame;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          const duration = 2000;
          const start = performance.now();

          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const current = Math.round(progress * value);
            setDisplay(current);
            if (progress < 1) {
              frame = requestAnimationFrame(animate);
            }
          };

          frame = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function App() {
  const aboutImageRef = useRef(null);
  const aboutInView = useInView(aboutImageRef, { once: true, amount: 0.4 });
  const [showAboutScrollBtn, setShowAboutScrollBtn] = useState(false);
  useEffect(() => {
    if (!aboutInView) return;
    const t = setTimeout(() => setShowAboutScrollBtn(true), 1200);
    return () => clearTimeout(t);
  }, [aboutInView]);

  const handleScrollToWork = () => {
    const el = document.getElementById("work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section id="landing" className={styles.section} style={{ backgroundColor: '#FFFFFF' }}>
          <div className={styles.container}>
            <div className={styles.landingContent}>
              <motion.h1
                className={styles.landingTitle}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Designed for Resonance
              </motion.h1>
              <motion.h1
                className={styles.landingTitle}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Built for Impact
              </motion.h1>
              <div className={styles.landingCardsWrap}>
                <div className={styles.landingCardsAndTags}>
                  <BounceCards
                    images={[landing1, landing2, landing3, landing4, landing5, landing6, landing7]}
                    containerWidth={820}
                    containerHeight={400}
                    animationDelay={1.45}
                    animationStagger={0.06}
                    transformStyles={[
                      'rotate(4deg) translate(-345px)',
                      'rotate(1deg) translate(-230px)',
                      'rotate(-2deg) translate(-115px)',
                      'rotate(0deg)',
                      'rotate(-1.5deg) translate(115px)',
                      'rotate(2deg) translate(230px)',
                      'rotate(-1.5deg) translate(345px) translateY(-22px)'
                    ]}
                  />
                  <div className={styles.landingTag01Wrap}>
                    <motion.img
                      src={landingTag01}
                      alt=""
                      className={styles.landingTag01}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.95, type: "spring", stiffness: 260, damping: 18 }}
                    />
                  </div>
                  <motion.img
                    src={landingTag02}
                    alt=""
                    className={styles.landingTag02}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.12, type: "spring", stiffness: 260, damping: 18 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.aboutContent}>
              <div className={styles.aboutText}>
                <h2 className={styles.aboutMainTitle} style={{ fontSize: '3.25rem', fontWeight: 900 }}>I'm Bonnie</h2>
                <p className={styles.aboutBody}>
                  With over five years of experience in digital design and B2B marketing across multiple industries, I focus on how design supports both user needs and business goals—creating impact beyond aesthetics.
                </p>
                <div className={styles.aboutStats}>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>
                      <StatNumber value={5} />
                    </div>
                    <div className={styles.statLabel}>Years of Experience</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>
                      <StatNumber value={20} />
                    </div>
                    <div className={styles.statLabel}>Completed Projects</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>
                      <StatNumber value={5} suffix="+" />
                    </div>
                    <div className={styles.statLabel}>Industries Explored</div>
                  </div>
                </div>
                <Link to="/about" className={styles.aboutCtaButton}>
                  SEE MY JOURNEY→
                </Link>
              </div>
              <div className={styles.aboutImage} ref={aboutImageRef}>
                <div className={styles.aboutImageFrame}>
                  <div className={styles.aboutImageGlow}></div>
                  <img
                    src={bonniePhoto}
                    alt="Portrait of Bonnie Wan"
                    className={styles.aboutImagePhoto}
                  />
                </div>
                <motion.div
                  className={`${styles.aboutTag} ${styles.aboutTagTopLeft}`}
                  initial={{ opacity: 0, scale: 0.7, y: -8, rotate: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 10 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ type: "spring", stiffness: 520, damping: 20, delay: 0.1 }}
                >
                  TPE / YVR
                </motion.div>
                <motion.div
                  className={`${styles.aboutTag} ${styles.aboutTagTopRight}`}
                  initial={{ opacity: 0, scale: 0.7, y: -8 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ type: "spring", stiffness: 520, damping: 20, delay: 0.22 }}
                >
                  UI / UX Designer
                </motion.div>
                <motion.div
                  className={`${styles.aboutTag} ${styles.aboutTagBottomLeft}`}
                  initial={{ opacity: 0, scale: 0.7, y: 8, rotate: -15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0, rotate: -15 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ type: "spring", stiffness: 520, damping: 20, delay: 0.34 }}
                >
                  Product Designer
                </motion.div>
                <motion.div
                  className={`${styles.aboutTag} ${styles.aboutTagBottomRight}`}
                  initial={{ opacity: 0, scale: 0.7, y: 8, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0, rotate: -5 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ type: "spring", stiffness: 520, damping: 20, delay: 0.46 }}
                >
                  Outdoor Enthusiast
                </motion.div>
                <motion.div
                  className={`${styles.aboutTag} ${styles.aboutTagCenter}`}
                  initial={{ opacity: 0, scale: 0.7, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ type: "spring", stiffness: 520, damping: 20, delay: 0.6 }}
                >
                  ENFJ
                </motion.div>
              </div>
      </div>
            <motion.div
              className={styles.aboutScrollWrap}
              initial={{ opacity: 0 }}
              animate={{ opacity: showAboutScrollBtn ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            >
              <button className={styles.scrollCircleButton} onClick={handleScrollToWork} aria-label="Scroll to Work section">
                ⌄
        </button>
            </motion.div>
          </div>
        </section>
        <section id="work" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.workHeader}>
              <h2 className={styles.workTitle}>Selected Works</h2>
              <p className={styles.workSubtitle}>
                A curated collection of projects that balance aesthetic craft with strategic results.
        </p>
      </div>
            <div className={styles.workRows}>
              <div className={styles.workRow}>
                <div className={styles.workText}>
                  <h3 className={styles.workRowTitle}>UX / UI</h3>
                  <p className={styles.workRowSubtitle}>
                    Focusing on solving everyday challenges through user research and intuitive interface design.
                  </p>
                  <Link to="/work/ux-ui" className={styles.workLearnMoreBtn}>Learn more →</Link>
                </div>
                <div className={styles.workImages}>
                  <div className={styles.workImageContainer}>
                    <img src={workUXUI01} alt="UX/UI Work 1" className={styles.workImage} />
                    <div className={styles.workImageOverlay}>
                      <p className={styles.workImageText}>A scheduling solution for parents in the skilled trades</p>
                      <Link to="/work/ux-ui" className={styles.workImageLearnMoreBtn}>Learn more →</Link>
                    </div>
                  </div>
                  <div className={styles.workImageContainer}>
                    <img src={workUXUI02} alt="UX/UI Work 2" className={styles.workImage} />
                    <div className={styles.workImageOverlay}>
                      <p className={styles.workImageText}>A social app for inclusive foodies</p>
                      <Link to="/work/sporkshare" className={styles.workImageLearnMoreBtn}>Learn more →</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.workRow}>
                <div className={styles.workText}>
                  <h3 className={styles.workRowTitle}>Graphic Design</h3>
                  <p className={styles.workRowSubtitle}>
                    A blend of professional marketing assets and creative visual storytelling for diverse brands.
                  </p>
                  <Link to="/work/cocktail-packaging" className={styles.workLearnMoreBtn}>Learn more →</Link>
                </div>
                <div className={styles.workImages}>
                  <div className={styles.workImageContainer}>
                    <img src={workDesign01} alt="Graphic Design Work 1" className={styles.workImage} />
                    <div className={styles.workImageOverlay}>
                      <p className={styles.workImageText}>Cocktail packaging design</p>
                      <Link to="/work/cocktail-packaging" className={styles.workImageLearnMoreBtn}>Learn more →</Link>
                    </div>
                  </div>
                  <div className={styles.workImageContainer}>
                    <img src={workDesign02} alt="Graphic Design Work 2" className={styles.workImage} />
                    <div className={styles.workImageOverlay}>
                      <p className={styles.workImageText}>Social media campaign</p>
                      <Link to="/work/social-media-campaign" className={styles.workImageLearnMoreBtn}>Learn more →</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.contactContent}>
              <h2 className={styles.contactTitle}>HAVE AN IDEA?</h2>
              <p className={styles.contactSubtitle}>
                Let's bridge the gap between your business goals and user needs
              </p>
              <a href="mailto:bonniewan1998@gmail.com" className={styles.contactButton}>
                Get in touch →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
