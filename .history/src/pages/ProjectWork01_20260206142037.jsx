import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./ProjectWork01.module.css";
/* Add your image imports when you have content, e.g.:
import heroImage from "../assets/Work_landingpage_UXUI01.png";
*/

function ProjectWork01() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarInner}>
              <div className={styles.metaRow}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Role</span>
                  <span className={styles.metaValue}>[UI / UX Designer]</span>
                  <span className={styles.metaValue}>[Frontend Developer]</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Duration</span>
                  <span className={styles.metaValue}>[Sep – Dec 2025 ]</span>
                </div>
              </div>
              <div className={styles.toolsRow}>
                <span className={styles.toolsLabel}>Tools</span>
                <div className={styles.toolPills}>
                  <span className={styles.toolPill}>[Adobe Illustrator]</span>
                  <span className={styles.toolPill}>[Figma]</span>
                  <span className={styles.toolPill}>[React]</span>
                  <span className={styles.toolPill}>[TypeScript]</span>
                  <span className={styles.toolPill}>[HTML5]</span>
                  <span className={styles.toolPill}>[CSS3]</span>
                </div>
              </div>
            </div>
          </aside>
          <div className={styles.content}>
            <h1 className={styles.projectTitle}>
              [Project title — e.g. UX / UI case name]
            </h1>
            <div className={styles.imageWrapper}>
              {/* Replace with your hero image when ready */}
              <div className={styles.placeholderImage}>Hero image</div>
            </div>
            <div className={styles.overviewSection}>
              <h2 className={styles.overviewHeading}><span className={styles.sectionNum}>01</span> / Project Overview</h2>
              <p className={styles.overviewBody}>
                [Your project overview text.]
              </p>
            </div>
            <div className={styles.sectionRow}>
              <div className={styles.sectionRowImage}>
                <div className={styles.placeholderImage}>Section 02 image</div>
              </div>
              <div className={styles.sectionRowText}>
                <h2 className={styles.overviewHeading}><span className={styles.sectionNum}>02</span> / [Section title]</h2>
                <p className={styles.overviewBody}>
                  [Your section 02 text.]
                </p>
              </div>
            </div>
            <div className={styles.collectionSection}>
              <h2 className={styles.overviewHeading}><span className={styles.sectionNum}>03</span> / [Section title]</h2>
              <div className={styles.collectionGrid}>
                <div className={styles.collectionCard}>
                  <div className={styles.collectionCardImage}>
                    <div className={styles.placeholderImage}>Card 1</div>
                  </div>
                  <h3 className={styles.collectionCardTitle}>[Card title]</h3>
                  <p className={styles.collectionCardFlavor}>[Subtitle]</p>
                  <p className={styles.collectionCardTagline}>[Tagline if needed]</p>
                </div>
                <div className={styles.collectionCard}>
                  <div className={styles.collectionCardImage}>
                    <div className={styles.placeholderImage}>Card 2</div>
                  </div>
                  <h3 className={styles.collectionCardTitle}>[Card title]</h3>
                  <p className={styles.collectionCardFlavor}>[Subtitle]</p>
                  <p className={styles.collectionCardTagline}>[Tagline if needed]</p>
                </div>
                <div className={styles.collectionCard}>
                  <div className={styles.collectionCardImage}>
                    <div className={styles.placeholderImage}>Card 3</div>
                  </div>
                  <h3 className={styles.collectionCardTitle}>[Card title]</h3>
                  <p className={styles.collectionCardFlavor}>[Subtitle]</p>
                  <p className={styles.collectionCardTagline}>[Tagline if needed]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className={styles.contentFooterBar}>
        <button type="button" className={styles.backBtn} onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
      <Footer />
    </>
  );
}

export default ProjectWork01;
