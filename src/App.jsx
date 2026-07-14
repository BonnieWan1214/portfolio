import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BounceCards from "./components/BounceCards";
import ScrollFloat from "./components/ScrollFloat";
import useLandingCardsLayout from "./hooks/useLandingCardsLayout";
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
import work01Img from "./assets/Work01_hero img.jpg";
import work02CoverVideo from "./assets/Work02_coverimg.mp4";
import work03CoverGif from "./assets/Work03_coverimg.gif";
import work05Img from "./assets/Work05_heroimg.jpg";

const LANDING_IMAGES = [landing1, landing2, landing3, landing4, landing5, landing6, landing7];

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
  const location = useLocation();
  const landingCardsWrapRef = useRef(null);
  const landingImages = useMemo(() => LANDING_IMAGES, []);
  const landingCards = useLandingCardsLayout(landingCardsWrapRef, landingImages);

  useEffect(() => {
    if (!location || location.pathname !== "/" || (location.hash || "") !== "#contact") return;
    const t = setTimeout(() => {
      const contact = document.getElementById("contact");
      if (contact) contact.scrollIntoView({ behavior: "smooth" });
    }, 150);
    return () => clearTimeout(t);
  }, [location?.pathname, location?.hash]);

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
              <div className={styles.landingCardsWrap} ref={landingCardsWrapRef}>
                <div
                  className={styles.landingCardsShell}
                  style={{
                    width: `${landingCards.shellWidth}px`,
                    height: `${landingCards.shellHeight}px`,
                    '--landing-cards-scale': String(landingCards.scale),
                    '--landing-design-w': `${landingCards.designWidth}px`,
                    '--landing-design-h': `${landingCards.designHeight}px`,
                    '--landing-first-card-x': `${landingCards.firstCardX}px`
                  }}
                >
                  <div className={styles.landingCardsAndTags}>
                    <BounceCards
                      key={landingCards.count}
                      images={landingCards.images}
                      linkTo="/work"
                      animationDelay={0.85}
                      animationStagger={0.06}
                      transformStyles={landingCards.transformStyles}
                    />
                    <div className={styles.landingTag01Wrap}>
                      <motion.img
                        src={landingTag01}
                        alt=""
                        className={styles.landingTag01}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.15, type: "spring", stiffness: 260, damping: 18 }}
                      />
                    </div>
                    <motion.img
                      src={landingTag02}
                      alt=""
                      className={styles.landingTag02}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.28, type: "spring", stiffness: 260, damping: 18 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.aboutContent}>
              <div className={styles.aboutText}>
                <motion.h2
                  className={styles.aboutMainTitle}
                  style={{ fontSize: '3.25rem', fontWeight: 900 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  A hybrid designer that bridges<br />marketing strategy with compelling digital design
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.85, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
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
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <section id="work" className={styles.section} style={{ backgroundColor: '#FFFFFF' }}>
          <div className={styles.container}>
            <motion.div
              className={styles.workHeader}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className={styles.workTitle} style={{ color: '#121212' }}>Selected Works</h2>
              <p className={styles.workSubtitle} style={{ color: '#121212' }}>
                A curated collection of projects that balance aesthetic craft with strategic results.
              </p>
            </motion.div>
            <div className={styles.homeWorkGrid}>
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Link to="/work/ux-ui" className={styles.homeWorkCard}>
                <div className={styles.homeWorkCardImageWrap}>
                  <img src={work01Img} alt="" className={styles.homeWorkCardImage} />
                </div>
                <h3 className={styles.homeWorkCardTitle}>Tandem | A scheduling solution for parents in the skilled trades</h3>
                <div className={styles.homeWorkCardTags}>
                  <span className={styles.homeWorkCardTag}>UI / UX Design</span>
                  <span className={styles.homeWorkCardTag}>Frontend Development</span>
                  <span className={styles.homeWorkCardTag}>Logo Design</span>
                </div>
              </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Link to="/work/sporkshare" className={styles.homeWorkCard}>
                <div className={styles.homeWorkCardImageWrap}>
                  <video
                    src={work02CoverVideo}
                    className={styles.homeWorkCardImage}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
                <h3 className={styles.homeWorkCardTitle}>Sporkshare | A social app for inclusive foodies</h3>
                <div className={styles.homeWorkCardTags}>
                  <span className={styles.homeWorkCardTag}>UI / UX Design</span>
                  <span className={styles.homeWorkCardTag}>Animation</span>
                  <span className={styles.homeWorkCardTag}>Logo Design</span>
                </div>
              </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Link to="/work/cocktail-packaging" className={styles.homeWorkCard}>
                <div className={styles.homeWorkCardImageWrap}>
                  <img src={work03CoverGif} alt="" className={styles.homeWorkCardImage} />
                </div>
                <h3 className={styles.homeWorkCardTitle}>Meowtini | Cocktail packaging design</h3>
                <div className={styles.homeWorkCardTags}>
                  <span className={styles.homeWorkCardTag}>Packaging Design</span>
                </div>
              </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Link to="/work/shopee-mothers-day" className={styles.homeWorkCard}>
                <div className={styles.homeWorkCardImageWrap}>
                  <img src={work05Img} alt="" className={styles.homeWorkCardImage} />
                </div>
                <h3 className={styles.homeWorkCardTitle}>Shopee | Mother's Day Campaign for Southeast Asia's E-commerce Leader</h3>
                <div className={styles.homeWorkCardTags}>
                  <span className={styles.homeWorkCardTag}>UI Design</span>
                </div>
              </Link>
              </motion.div>
            </div>
            <div className={styles.homeWorkViewMoreWrap}>
              <Link to="/work" className={styles.homeWorkViewMoreBtn}>View more</Link>
            </div>
          </div>
        </section>
        <section id="contact" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.contactContent}>
              <ScrollFloat containerClassName={styles.contactScrollFloat}>
                HAVE AN IDEA?
              </ScrollFloat>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <p className={styles.contactSubtitle}>
                  Let's bridge the gap between your business goals and user needs
                </p>
                <a href="mailto:bonniewan1998@gmail.com" className={styles.contactButton}>
                  Get in touch →
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
