import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ShaderBackground from "./components/ShaderBackground";
import ShinyText from "./components/ShinyText";
import styles from "./App.module.css";

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
                ↓
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
            <h2 className={styles.sectionTitle}>Work</h2>
            <div className={styles.placeholder}>
              <p>Work section placeholder</p>
            </div>
          </div>
        </section>
        <section id="contact" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <div className={styles.placeholder}>
              <p>Contact section placeholder</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
