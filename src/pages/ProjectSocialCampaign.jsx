import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./ProjectSocialCampaign.module.css";
import heroImage from "../assets/Work04_1.png";
import image2 from "../assets/Work04_2.png";
import image3 from "../assets/Work04_3.png";
import image4 from "../assets/Work04_4.png";
import image5 from "../assets/Work04_5.png";
import ig6 from "../assets/Work04_6.jpg";
import ig7 from "../assets/Work04_7.jpg";
import ig8 from "../assets/Work04_8.jpg";
import ig9 from "../assets/Work04_9.jpg";
import ig10 from "../assets/Work04_10.jpg";
import ig11 from "../assets/Work04_11.jpg";

function ProjectSocialCampaign() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [igStartIndex, setIgStartIndex] = useState(0);

  const campaignImages = [image2, image3, image4, image5];
  const igImages = [ig6, ig7, ig8, ig9, ig10, ig11];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + campaignImages.length) % campaignImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % campaignImages.length);
  };

  const handleIgPrev = () => {
    setIgStartIndex((prev) => (prev - 1 + igImages.length) % igImages.length);
  };

  const handleIgNext = () => {
    setIgStartIndex((prev) => (prev + 1) % igImages.length);
  };

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
                  <span className={styles.metaValue}>Freelance / 12 Months</span>
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
            <h1 className={styles.projectTitle}>Busch Beer | Socail media campaign</h1>
            <div className={styles.imageWrapper}>
              <img
                src={heroImage}
                alt="Busch Beer Social media campaign"
                className={styles.projectImage}
              />
            </div>

            <div>
              <h2 className={styles.overviewHeading}>
                <span className={styles.sectionNum}>01</span> / Project Overview
              </h2>
              <p className={styles.overviewBody}>
                This project involved a year-long social media visual strategy for Busch Beer, specifically for their
                FB and IG platforms. The objective was to cultivate a dynamic digital presence that resonates with
                the target audience by blending humorous, relatable storytelling with a playful aesthetic, ultimately
                strengthening the brand's connection with its fans.
              </p>
            </div>

            <div className={styles.sectionRow}>
              <div className={styles.sectionRowImage}>
                <button
                  type="button"
                  className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
                  onClick={handlePrev}
                  aria-label="Previous image"
                >
                  ←
                </button>
                <img
                  src={campaignImages[currentIndex]}
                  alt="Busch Beer social media campaign detail"
                />
                <button
                  type="button"
                  className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
                  onClick={handleNext}
                  aria-label="Next image"
                >
                  →
                </button>
              </div>
              <div className={styles.sectionRowText}>
                <h2 className={styles.overviewHeading}>
                  <span className={styles.sectionNum}>02</span> / Design Strategy
                </h2>
                <p className={styles.overviewBody}>
                  The creative approach combines real photography with bold, comic-inspired illustrations to maintain
                  a balance between authenticity and playfulness. Utilizing Busch Beer's signature blue tones and icy
                  visual elements, the graphics were designed to be high-impact yet easy to digest. This consistent
                  system highlights the brand's refreshing character while ensuring a cool, crisp aesthetic across all
                  social touchpoints.
                </p>
              </div>
            </div>

            <div className={styles.igCarousel}>
              <h2 className={styles.overviewHeading}>
                <span className={styles.sectionNum}>03</span> / IG post collection
              </h2>

              <div className={styles.igRow}>
                <button
                  type="button"
                  className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
                  onClick={handleIgPrev}
                  aria-label="Previous IG posts"
                >
                  ←
                </button>

                <div className={styles.igGrid}>
                  {[0, 1, 2].map((offset) => {
                    const idx = (igStartIndex + offset) % igImages.length;
                    return (
                      <div key={idx} className={styles.igCard}>
                        <img src={igImages[idx]} alt="Busch Beer IG post" />
                      </div>
                    );
                  })}
                </div>

                <button
                  type="button"
                  className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
                  onClick={handleIgNext}
                  aria-label="Next IG posts"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className={styles.contentFooterBar}>
        <button
          type="button"
          className={styles.backBtn}
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
      <Footer />
    </>
  );
}

export default ProjectSocialCampaign;
