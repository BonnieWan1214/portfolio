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
                  <span className={styles.metaValue}>UI / UX Designer</span>
                  <span className={styles.metaValue}>Frontend Developer</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Duration</span>
                  <span className={styles.metaValue}>Sep – Dec 2025</span>
                </div>
              </div>
              <div className={styles.toolsRow}>
                <span className={styles.toolsLabel}>Tools</span>
                <div className={styles.toolPills}>
                  <span className={styles.toolPill}>Adobe Illustrator</span>
                  <span className={styles.toolPill}>Figma</span>
                  <span className={styles.toolPill}>React</span>
                  <span className={styles.toolPill}>TypeScript</span>
                  <span className={styles.toolPill}>HTML5</span>
                  <span className={styles.toolPill}>CSS3</span>
                </div>
              </div>
            </div>
          </aside>
          <div className={styles.content}>
            <h1 className={styles.projectTitle}>
              Tandem | A scheduling solution for parents in the skilled trades
            </h1>
            <div className={styles.imageWrapper}>
              {/* Replace with your hero image when ready */}
              <div className={styles.placeholderImage}>Hero image</div>
            </div>
            <div className={styles.overviewSection}>
              <h2 className={styles.overviewHeading}><span className={styles.sectionNum}>01</span> Project Overview</h2>
              <p className={styles.overviewBody}>
              Tandem is an app for parents in the trades that helps balance work and childcare. It utilizes Al to support busy
parents in managing their responsibilities, providing trustworthy recommendations and reliable chilacare options.
It allows parents to find childcare easily, reducing stress and improving work-life balance
              </p>
            </div>
            <div className={styles.problemSection}>
              <h2 className={styles.overviewHeading}><span className={styles.sectionNum}>02</span> Problem Statement</h2>
              <p className={styles.overviewBody}>
                Trade parents in British Columbia face significant challenges balancing work and childcare.
              </p>
              <div className={styles.statVizRow}>
                <div className={styles.statVizCard}>
                  <div className={styles.statVizRing} style={{ "--pct": 63 }} aria-hidden>
                    <span className={styles.statVizNumber}>63%</span>
                  </div>
                  <p className={styles.statVizCaption}>
                    63% of trade parents in British Columbia reported childcare shortages.
                  </p>
                </div>
                <div className={styles.statVizCard}>
                  <div className={styles.statVizRing} style={{ "--pct": 100 }} aria-hidden>
                    <span className={styles.statVizNumber}>100%</span>
                  </div>
                  <p className={styles.statVizCaption}>
                    100% of them found it difficult to balance work and family care.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.researchSection}>
              <h2 className={styles.overviewHeading}><span className={styles.sectionNum}>03</span> RESEARCH & ANALYSIS</h2>
              <p className={styles.overviewBody}>
                To explore users' needs and challenges, we used a mixed research approach, including one in-person interview, eight online surveys, and additional secondary research from online community discussions.
              </p>
              <h3 className={styles.researchFocusHeading}>Research Focus</h3>
              <p className={styles.overviewBody}>
                To better understand trade parents' daily challenges, our interview and survey focused on work schedules, childcare availability gaps, provider reliability, privacy concerns, and openness to digital solutions.
              </p>
              <div className={styles.researchBlocks}>
                <div className={styles.researchBlock}>
                  <h4 className={styles.researchBlockTitle}>Primary Research</h4>
                  <ol className={styles.researchList}>
                    <li>Childcare does not align with irregular trade schedules</li>
                    <li>Last-minute schedule changes create childcare stress</li>
                    <li>Reliable and trustworthy childcare is hard to find</li>
                    <li>Security concerns limit willingness to use digital tools</li>
                  </ol>
                </div>
                <div className={styles.researchBlock}>
                  <h4 className={styles.researchBlockTitle}>Secondary Research</h4>
                  <ol className={styles.researchList}>
                    <li>Long waitlists and high childcare costs in BC</li>
                    <li>Work hours do not align with childcare operating hours</li>
                    <li>Parents create informal solutions to fill system gaps</li>
                    <li>Parents rely on informal solutions to address childcare shortages, such as nanny-sharing</li>
                  </ol>
                </div>
                <div className={styles.researchBlockFull}>
                  <h4 className={styles.researchBlockTitle}>Key Pain Points</h4>
                  <ul className={styles.painPointList}>
                    <li>
                      <span className={styles.painPointTitle}>1. Schedule mismatch between work and childcare hours</span>
                      <p className={styles.painPointDesc}>Most childcare centers open at 8:00 AM, but trade jobs often start at 6:00 AM or 7:00 AM.</p>
                    </li>
                    <li>
                      <span className={styles.painPointTitle}>2. Lack of flexible or last-minute childcare options</span>
                      <p className={styles.painPointDesc}>Trade parents often have unpredictable work schedules, making it difficult to secure childcare on short notice or adjust to sudden changes.</p>
                    </li>
                    <li>
                      <span className={styles.painPointTitle}>3. High childcare costs and long waitlists</span>
                      <p className={styles.painPointDesc}>Parents face expensive daycare fees and long waitlists, forcing some to rely on family or skip work hours.</p>
                    </li>
                    <li>
                      <span className={styles.painPointTitle}>4. Difficulty finding trusted and licensed providers</span>
                      <p className={styles.painPointDesc}>Parents worry about safety when using informal or non-licensed childcare options.</p>
                    </li>
                  </ul>
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
