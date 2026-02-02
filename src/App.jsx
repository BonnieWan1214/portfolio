import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ShaderBackground from "./components/ShaderBackground";
import ShinyText from "./components/ShinyText";
import styles from "./App.module.css";
import workUXUI01 from "./assets/Work_landingpage_UXUI01.png";
import workUXUI02 from "./assets/Work_landingpage_UXUI02.png";
import workDesign01 from "./assets/Work_landingpage_design01.png";
import workDesign02 from "./assets/Work_landingpage_design02.png";

function StatNumber({ value, suffix = "" }) {
  const [display, setDisplay] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    let frame;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 3000;
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
      { threshold: 0.4 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value, hasAnimated]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function App() {
  const handleScrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section id="landing" className={styles.section}>
          <div className={styles.shaderBackground}>
            <ShaderBackground />
          </div>
          <div className={styles.container}>
            <div className={styles.landingContent}>
              <h1 className={styles.landingTitle}>
                <ShinyText
                  text="Designed for Resonance"
                  speed={1.5}
                  delay={0.3}
                  color="#b5b5b5"
                  shineColor="#ffffff"
                  spread={85}
                  direction="left"
                  yoyo
                  pauseOnHover={false}
                  disabled={false}
                />
              </h1>
              <h1 className={styles.landingTitle}>
                <ShinyText
                  text="Built for "
                  speed={1.5}
                  delay={0.3}
                  color="#b5b5b5"
                  shineColor="#ffffff"
                  spread={85}
                  direction="left"
                  yoyo
                  pauseOnHover={false}
                  disabled={false}
                />
                <span className={styles.impactText}>
                  <ShinyText
                    text="Impact"
                    speed={1.5}
                    delay={0.3}
                    color="#b5b5b5"
                    shineColor="#ffffff"
                    spread={85}
                    direction="left"
                    yoyo
                    pauseOnHover={false}
                    disabled={false}
                  />
                </span>
              </h1>
              <h6 className={styles.landingSubtitle}>
                A hybrid designer that bridges marketing strategy with compelling digital design
              </h6>
              <button className={styles.scrollCircleButton} onClick={handleScrollToAbout} aria-label="Scroll to About section">
                ⌄
              </button>
            </div>
          </div>
        </section>
        <section id="about" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.aboutContent}>
              <div className={styles.aboutText}>
                <h2 className={styles.sectionTitle}>About Me</h2>
                <p className={styles.aboutBody}>
                  Hi there, I’m Bonnie. With 5+ years in digital design and B2B marketing, I specialize in the
                  intersection of user intent and business growth. I don’t just design for aesthetics, I design for
                  impact.
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
                <button className={styles.aboutCtaButton}>
                  SEE MY JOURNEY→
                </button>
              </div>
              <div className={styles.aboutImage}></div>
            </div>
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
                  <button className={styles.workLearnMoreBtn}>View More Projects →</button>
                </div>
                <div className={styles.workImages}>
                  <div className={styles.workImageContainer}>
                    <img src={workUXUI01} alt="UX/UI Work 1" className={styles.workImage} />
                    <div className={styles.workImageOverlay}>
                      <p className={styles.workImageText}>A scheduling solution for parents in the skilled trades</p>
                      <button className={styles.workImageLearnMoreBtn}>Learn more →</button>
                    </div>
                  </div>
                  <div className={styles.workImageContainer}>
                    <img src={workUXUI02} alt="UX/UI Work 2" className={styles.workImage} />
                    <div className={styles.workImageOverlay}>
                      <p className={styles.workImageText}>A social app for music lovers</p>
                      <button className={styles.workImageLearnMoreBtn}>Learn more →</button>
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
                  <Link to="/work/cocktail-packaging" className={styles.workLearnMoreBtn}>View More Projects →</Link>
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
