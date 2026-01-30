import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ShaderBackground from "./components/ShaderBackground";
import ShinyText from "./components/ShinyText";
import styles from "./App.module.css";

function App() {
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
                    <div className={styles.statNumber}>5</div>
                    <div className={styles.statLabel}>Years of Experience</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>20</div>
                    <div className={styles.statLabel}>Completed Projects</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>5+</div>
                    <div className={styles.statLabel}>Industries Explored</div>
                  </div>
                </div>
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
