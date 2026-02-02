import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./ProjectCocktail.module.css";
import workImage from "../assets/Work03_1.png";
import workImage2 from "../assets/Work03_2.png";
import workImage3 from "../assets/Work03_3.png";
import workImage4 from "../assets/Work03_4.png";
import workImage5 from "../assets/Work03_5.png";

function ProjectCocktail() {
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
                  <span className={styles.metaValue}>Graphic Designer</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Duration</span>
                  <span className={styles.metaValue}>1 week</span>
                </div>
              </div>
              <div className={styles.toolsRow}>
                <span className={styles.toolsLabel}>Tools</span>
                <div className={styles.toolPills}>
                  <span className={styles.toolPill}>Adobe Illustrator</span>
                  <span className={styles.toolPill}>Adobe Photoshop</span>
                </div>
              </div>
            </div>
          </aside>
          <div className={styles.content}>
            <h1 className={styles.projectTitle}>
              Meowtini | Cocktail packaging design
            </h1>
            <div className={styles.imageWrapper}>
              <img
                src={workImage}
                alt="Meowtini Cocktail packaging design"
                className={styles.projectImage}
              />
            </div>
            <div className={styles.overviewSection}>
              <h2 className={styles.overviewHeading}><span className={styles.sectionNum}>01</span> / Project Overview</h2>
              <p className={styles.overviewBody}>
                Meowtini is a series of sparkling cocktails, each flavor embodying a unique form of luck, personified by the brand's "Maneki-neko" (Lucky Cat) mascot. By reimagining this traditional symbol through a modern pop-art lens, the project aims to establish a high-impact visual identity that commands attention on crowded retail shelves.
              </p>
            </div>
            <div className={styles.sectionRow}>
              <div className={styles.sectionRowImage}>
                <img src={workImage2} alt="Meowtini design strategy" className={styles.projectImage} />
              </div>
              <div className={styles.sectionRowText}>
                <h2 className={styles.overviewHeading}><span className={styles.sectionNum}>02</span> / Design Strategy</h2>
                <p className={styles.overviewBody}>
                  The design integrates pop art, utilizing bold black lines and halftone textures, with high-saturation spot colors on a clean white background to highlight the theme of each drink. This systematic approach maintains brand consistency while giving the Apple, Lemon, and Strawberry flavors distinct vitality and personality.
                </p>
              </div>
            </div>
            <div className={styles.collectionSection}>
              <h2 className={styles.overviewHeading}><span className={styles.sectionNum}>03</span> / The Collection</h2>
              <div className={styles.collectionGrid}>
                <div className={styles.collectionCard}>
                  <div className={styles.collectionCardImage}>
                    <img src={workImage3} alt="Love - Apple & Lychee" className={styles.projectImage} />
                  </div>
                  <h3 className={styles.collectionCardTitle}>Love (Red/Blue)</h3>
                  <p className={styles.collectionCardFlavor}>Apple & Lychee</p>
                  <p className={styles.collectionCardTagline}>"Take a sip, fall in love."</p>
                </div>
                <div className={styles.collectionCard}>
                  <div className={styles.collectionCardImage}>
                    <img src={workImage4} alt="Life - Lemon & Honey" className={styles.projectImage} />
                  </div>
                  <h3 className={styles.collectionCardTitle}>Life (Teal/Yellow)</h3>
                  <p className={styles.collectionCardFlavor}>Lemon & Honey</p>
                  <p className={styles.collectionCardTagline}>"Catch the good vibes."</p>
                </div>
                <div className={styles.collectionCard}>
                  <div className={styles.collectionCardImage}>
                    <img src={workImage5} alt="Luck - Strawberry & Kiwi" className={styles.projectImage} />
                  </div>
                  <h3 className={styles.collectionCardTitle}>Luck (Green/Pink)</h3>
                  <p className={styles.collectionCardFlavor}>Strawberry & Kiwi</p>
                  <p className={styles.collectionCardTagline}>"Luck in every sip."</p>
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

export default ProjectCocktail;
