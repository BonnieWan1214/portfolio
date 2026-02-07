import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./ProjectWork01.module.css";
import userPersonaImage from "../assets/Work01_Userpersona.png";
import userFlowImage from "../assets/Work01_user-flow.svg";

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
                  <span className={styles.metaValue}>Logo Desiner</span>
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
              <h2 className={styles.overviewHeading}><span className={styles.sectionNum}>03</span> Research & Analysis</h2>
              <p className={styles.overviewBody}>
                To explore users' needs and challenges, we used a mixed research approach, including one in-person interview, eight online surveys, and additional secondary research from online community discussions.
              </p>
              <h3 className={styles.researchFocusHeading}>Research Focus</h3>
              <p className={styles.overviewBody}>
                To better understand trade parents' daily challenges, our interview and survey focused on work schedules, childcare availability gaps, provider reliability, privacy concerns, and openness to digital solutions.
              </p>
              <div className={styles.researchBlocks}>
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
            <div className={styles.empathySection}>
              <h2 className={styles.overviewHeading}><span className={styles.sectionNum}>04</span> Empathy Map</h2>
              <div className={styles.empathyGrid}>
                <div className={styles.empathyRow}>
                  <div className={`${styles.empathyLabel} ${styles.empathyLabelSquare}`} aria-hidden>Says</div>
                  <div className={styles.empathyBody}>
                    <p>"Most daycares open too late for my shift."</p>
                    <p>"Childcare in BC is so hard to find, and the waitlists are too long."</p>
                    <p>"My work schedule changes every day, and I'm worried about arranging childcare."</p>
                  </div>
                </div>
                <div className={styles.empathyRow}>
                  <div className={`${styles.empathyLabel} ${styles.empathyLabelCircle}`} aria-hidden>Thinks</div>
                  <div className={styles.empathyBody}>
                    <p>"I can't get a daycare spot, and private childcare or nannies cost too much."</p>
                    <p>"Is it really safe to share a nanny with other people?"</p>
                    <p>"I wish for a reliable tool to manage my work and childcare schedules and flag missing childcare days."</p>
                  </div>
                </div>
                <div className={styles.empathyRow}>
                  <div className={`${styles.empathyLabel} ${styles.empathyLabelTriangle}`} aria-hidden><span className={styles.empathyLabelInner}>Does</span></div>
                  <div className={styles.empathyBody}>
                    <ul className={styles.empathyList}>
                      <li>Relies on family or friends for last-minute coverage.</li>
                      <li>Juggles long commutes to access available childcare.</li>
                      <li>Arrives late to work or take time off to manage childcare.</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.empathyRow}>
                  <div className={`${styles.empathyLabel} ${styles.empathyLabelDiamond}`} aria-hidden><span className={styles.empathyLabelInner}>Feels</span></div>
                  <div className={styles.empathyBody}>
                    <ul className={styles.empathyList}>
                      <li>Stressed and anxious about schedule conflicts</li>
                      <li>Frustrated by high costs and limited availability</li>
                      <li>Overwhelmed by balancing work and parenting responsibilities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.personaSection}>
              <h2 className={styles.overviewHeading}><span className={styles.sectionNum}>05</span> User Persona</h2>
              <div className={styles.personaRow}>
                <div className={styles.personaImageWrap}>
                  <img src={userPersonaImage} alt="User persona" className={styles.personaImage} />
                </div>
                <div className={styles.personaText}>
                  <h3 className={styles.personaName}>Sarah</h3>
                  <div className={styles.personaTextColumns}>
                    <div className={styles.personaTextLeft}>
                      <dl className={styles.personaMeta}>
                        <div className={styles.personaMetaRow}>
                          <dt className={styles.personaMetaLabel}>Age:</dt>
                          <dd className={styles.personaMetaValue}>34</dd>
                        </div>
                        <div className={styles.personaMetaRow}>
                          <dt className={styles.personaMetaLabel}>Occupation:</dt>
                          <dd className={styles.personaMetaValue}>Finishing Carpenter</dd>
                        </div>
                        <div className={styles.personaMetaRow}>
                          <dt className={styles.personaMetaLabel}>Location:</dt>
                          <dd className={styles.personaMetaValue}>Vancouver, BC</dd>
                        </div>
                        <div className={styles.personaMetaRow}>
                          <dt className={styles.personaMetaLabel}>Family:</dt>
                          <dd className={styles.personaMetaValue}>Single Mom with 4-year-old son</dd>
                        </div>
                        <div className={styles.personaMetaRow}>
                          <dt className={styles.personaMetaLabel}>Device Usage:</dt>
                          <dd className={styles.personaMetaValue}>Heavy iPhone user</dd>
                        </div>
                        <div className={styles.personaMetaRow}>
                          <dt className={styles.personaMetaLabel}>Personality:</dt>
                          <dd className={styles.personaMetaValue}>
                            <div className={styles.personaPillsWrap}>
                              <span className={styles.personaPill}>Pragmatic</span>
                              <span className={styles.personaPill}>Resilient</span>
                              <span className={styles.personaPill}>Detail-Oriented</span>
                            </div>
                          </dd>
                        </div>
                      </dl>
                      <div className={styles.personaBio}>
                        <h4 className={styles.personaBioHeading}>Bio & Background:</h4>
                        <p className={styles.personaBioText}>
                          Sarah is a 34-year-old finishing carpenter and single mom in Vancouver, balancing a demanding trade with raising her son. She relies on her phone to stay organized and tackle everyday challenges.
                        </p>
                      </div>
                    </div>
                    <div className={styles.personaTextRight}>
                      <h4 className={styles.personaSubheading}>Key pain points</h4>
                      <ol className={styles.personaPainList}>
                        <li>Job volatility and shifting locations cause constant frustration in securing reliable childcare.</li>
                        <li>The BC daycare waitlist nightmare and opening hours that are too late for her 6–7 AM start.</li>
                        <li>The exorbitant cost of private nannies is financially unsustainable on a single income.</li>
                      </ol>
                      <div className={styles.personaGoals}>
                        <h4 className={styles.personaGoalsHeading}>Goals</h4>
                        <div className={styles.personaGoalsTags}>
                          <span className={styles.personaPill}>Balance Work Schedule and Childcare</span>
                          <span className={styles.personaPill}>Achieve financial relief for childcare expenses</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sectionTransition}>
              <p className={styles.sectionTransitionSmall}>From understanding to designing</p>
              <h2 className={styles.sectionTransitionLarge}>The solution takes shape</h2>
              <span className={styles.sectionTransitionArrow} aria-hidden>⌄</span>
            </div>
            <div className={styles.flowSection}>
              <h2 className={styles.overviewHeading}><span className={styles.sectionNum}>06</span> User Flow</h2>
              <div className={styles.flowImageWrap}>
                <img src={userFlowImage} alt="User flow" className={styles.flowImage} />
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
