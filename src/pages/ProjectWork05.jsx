import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./ProjectWork05.module.css";
import heroImage from "../assets/Work05_heroimg.jpg";
import work05_4 from "../assets/Work05_4.jpg";

function ProjectWork05() {
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
                  <span className={styles.metaLabel}>My Role</span>
                  <span className={styles.metaValue}>UI Designer</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Duration</span>
                  <span className={styles.metaValue}>1 week</span>
                </div>
              </div>
              <div className={styles.toolsRow}>
                <span className={styles.toolsLabel}>Tools</span>
                <div className={styles.toolPills}>
                  <span className={styles.toolPill}>Adobe Photoshop</span>
                </div>
              </div>
            </div>
          </aside>

          <div className={styles.content}>
            <h1 className={styles.projectTitle}>
              Shopee | Mother's Day Campaign for Southeast Asia's E-commerce Leader
            </h1>
            <div className={styles.imageWrapper}>
              <img
                src={heroImage}
                alt="Shopee Mother's Day Campaign"
                className={styles.projectImage}
              />
            </div>

            <div className={styles.brandContext}>
              <h2 className={styles.brandContextHeading}>Brand Context</h2>
              <p className={styles.overviewBody}>
                Shopee is the leading e-commerce platform in Southeast Asia and Taiwan, serving millions of active users daily. While North American e-commerce often leans toward minimalism, the market in Southeast Asia thrives on high-energy visuals. Shopee's identity is built on bold colors and gamified elements to drive maximum engagement in a fast-paced digital landscape.
              </p>
            </div>

            <div className={styles.overviewSection}>
              <h2 className={styles.overviewHeading}>
                <span className={styles.sectionNum}>01</span> Project Overview
              </h2>
              <p className={styles.overviewBody}>
                As part of Shopee's Mother's Day campaign, I led the visual design for a strategic partnership with Zojirushi, the premier Japanese kitchenware brand. My focus was to create a seamless user journey starting from the entry banner to the dedicated campaign page. The goal was to bridge the gap between emotional storytelling and performance-driven e-commerce.
              </p>
            </div>

            <div className={styles.objectivesSection}>
              <div className={styles.objectivesImageWrap}>
                <img src={work05_4} alt="Shopee campaign design" className={styles.objectivesImage} />
              </div>
              <div className={styles.objectivesText}>
                <h2 className={styles.overviewHeading}>
                  <span className={styles.sectionNum}>02</span> Key Design Objectives
                </h2>
                <ul className={styles.objectiveList}>
                  <li className={styles.objectiveItem}>
                    <h3 className={styles.objectiveTitle}>Festive Branding</h3>
                    <p className={styles.overviewBody}>
                      Create a heartwarming Mother's Day identity that blends Shopee's vibrant energy with Zojirushi's trusted brand image.
                    </p>
                  </li>
                  <li className={styles.objectiveItem}>
                    <h3 className={styles.objectiveTitle}>Product Spotlight</h3>
                    <p className={styles.overviewBody}>
                      Design a strategic layout to highlight key kitchenware products and offers while keeping the visual experience clean.
                    </p>
                  </li>
                  <li className={styles.objectiveItem}>
                    <h3 className={styles.objectiveTitle}>Conversion Optimization</h3>
                    <p className={styles.overviewBody}>
                      Optimize the visual flow from banner to landing page, focusing on a clear CTA design to drive clicks.
                    </p>
                  </li>
                </ul>
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

export default ProjectWork05;
