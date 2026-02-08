import { useState, useEffect, startTransition } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./ProjectWork01.module.css";
import userPersonaImage from "../assets/Work01_Userpersona.png";
import userFlowImage from "../assets/Work01_user-flow.svg";
import logoDesignSvg from "../assets/Work01_logodesign.svg";
import componentsSvg from "../assets/Work01_components.svg";
import heroImg from "../assets/Work01_hero img.jpg";
import before1 from "../assets/Work01_before1.jpg";
import after1 from "../assets/Work01_after1.jpg";
import before2 from "../assets/Work01_before2.jpg";
import after2 from "../assets/Work01_after2.jpg";
import before3 from "../assets/Work01_before3.jpg";
import after3 from "../assets/Work01_after3.jpg";
import before4 from "../assets/Work01_before4.jpg";
import after4 from "../assets/Work01_after4.jpg";

function ProjectWork01() {
  const navigate = useNavigate();
  const [designTab, setDesignTab] = useState("typography");
  const [evolutionPair1Before, setEvolutionPair1Before] = useState(true);
  const [evolutionPair2Before, setEvolutionPair2Before] = useState(true);
  const [evolutionPair3Before, setEvolutionPair3Before] = useState(true);
  const [evolutionPair4Before, setEvolutionPair4Before] = useState(true);

  useEffect(() => {
    const preloadLogo = new Image();
    preloadLogo.src = logoDesignSvg;
    const preloadComponents = new Image();
    preloadComponents.src = componentsSvg;
  }, []);

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
                  <span className={styles.metaValue}>Logo Designer</span>
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
              <img src={heroImg} alt="Tandem app hero" className={styles.projectImage} />
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
            <div className={styles.designSection}>
              <h2 className={styles.overviewHeading}><span className={styles.sectionNum}>07</span> Design System</h2>
              <div className={styles.designBtns}>
                <button
                  type="button"
                  className={`${styles.designBtn} ${designTab === "typography" ? styles.designBtnActive : ""}`}
                  onClick={() => startTransition(() => setDesignTab("typography"))}
                >
                  <span className={styles.designBtnShine} aria-hidden />
                  Typography & Color
                </button>
                <button
                  type="button"
                  className={`${styles.designBtn} ${designTab === "logo" ? styles.designBtnActive : ""}`}
                  onClick={() => startTransition(() => setDesignTab("logo"))}
                >
                  <span className={styles.designBtnShine} aria-hidden />
                  Logo
                </button>
                <button
                  type="button"
                  className={`${styles.designBtn} ${designTab === "components" ? styles.designBtnActive : ""}`}
                  onClick={() => startTransition(() => setDesignTab("components"))}
                >
                  <span className={styles.designBtnShine} aria-hidden />
                  Components
                </button>
              </div>
              <div className={styles.designTabContent} style={{ display: designTab === "typography" ? "block" : "none" }}>
                <div className={styles.typographyPanel}>
                  <div className={styles.typographyColumn}>
                    <div className={styles.typographyFontGroup}>
                      <p className={styles.typographyFontName} style={{ fontFamily: "Alan Sans, sans-serif" }}>Alan Sans</p>
                      <p className={styles.typographyWeights}>Regular / Medium / Bold</p>
                    </div>
                    <p className={styles.typographyAa} style={{ fontFamily: "Alan Sans, sans-serif" }}>Aa</p>
                    <div className={styles.typographyBlock}>
                      <span className={styles.typographyLabel}>Heading</span>
                      <p className={styles.typographySample} style={{ fontFamily: "Alan Sans, sans-serif" }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />1234567890</p>
                    </div>
                    <div className={styles.typographyBlock}>
                      <span className={styles.typographyLabel}>Text</span>
                      <p className={styles.typographySample} style={{ fontFamily: "Alan Sans, sans-serif" }}>abcdefghijklmnopqrstuvwxyz<br />1234567890</p>
                    </div>
                  </div>
                  <div className={styles.typographyColumn}>
                    <div className={styles.typographyFontGroup}>
                      <p className={styles.typographyFontName} style={{ fontFamily: "Alan Sans, sans-serif" }}>Omnes</p>
                      <p className={styles.typographyWeights}>Regular / Medium / Bold</p>
                    </div>
                    <p className={styles.typographyAa} style={{ fontFamily: "Omnes, sans-serif" }}>Aa</p>
                    <div className={styles.typographyBlock}>
                      <span className={styles.typographyLabel}>Heading</span>
                      <p className={styles.typographySample} style={{ fontFamily: "Omnes, sans-serif" }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />1234567890</p>
                    </div>
                    <div className={styles.typographyBlock}>
                      <span className={styles.typographyLabel}>Text</span>
                      <p className={styles.typographySample} style={{ fontFamily: "Omnes, sans-serif" }}>abcdefghijklmnopqrstuvwxyz<br />1234567890</p>
                    </div>
                  </div>
                  <div className={styles.typographyColors}>
                    <div className={styles.colorCircleRow}>
                      <div className={styles.colorCircle} style={{ background: "#3373CC" }} aria-hidden />
                      <div className={styles.colorCircleMeta}>
                        <span className={styles.colorCircleLabel}>Primary</span>
                        <span className={styles.colorCircleCode}>RGB (51,115,204) #3373CC</span>
                      </div>
                    </div>
                    <div className={styles.colorCircleRow}>
                      <div className={styles.colorCircle} style={{ background: "#92F189" }} aria-hidden />
                      <div className={styles.colorCircleMeta}>
                        <span className={styles.colorCircleLabel}>Secondary</span>
                        <span className={styles.colorCircleCode}>RGB (146,241,137) #92F189</span>
                      </div>
                    </div>
                    <div className={styles.colorCircleRow}>
                      <div className={styles.colorCircle} style={{ background: "#68D5FF" }} aria-hidden />
                      <div className={styles.colorCircleMeta}>
                        <span className={styles.colorCircleLabel}>Analogous</span>
                        <span className={styles.colorCircleCode}>RGB (104,213,255) #68D5FF</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className={styles.designPanelDesc}>
                  We chose Alan Sans and Omnes for their clean, rounded forms that feel both <strong>professional</strong> and <strong>approachable</strong>, ensuring clarity and warmth throughout the interface.
                  Blue conveys <strong>trust</strong> and <strong>security</strong> in childcare decisions, while green represents <strong>work</strong> and <strong>growth</strong>. Together, the colors create a balanced visual language that reflects <strong>stability</strong> and <strong>support</strong> in managing both career and family life.
                </p>
              </div>
              <div className={styles.designTabContent} style={{ display: designTab === "logo" ? "block" : "none" }}>
                <div className={styles.designPanel}>
                  <div className={styles.designPanelImageWrap}>
                    <img src={logoDesignSvg} alt="Logo design" className={styles.designPanelImage} />
                  </div>
                </div>
                <p className={styles.designPanelDesc}>
                  The logo merges a hammer with the letter "T" from Tandem, symbolizing craftsmanship and resilience while strengthening brand recognition. The handle is formed by two interwoven color blocks, representing career and childcare, strength and support, <strong>reflecting the idea that no parent has to carry both roles alone.</strong>
                </p>
              </div>
              <div className={styles.designTabContent} style={{ display: designTab === "components" ? "block" : "none" }}>
                <div className={styles.designPanel}>
                  <div className={styles.designPanelImageWrap}>
                    <img src={componentsSvg} alt="Components" className={styles.designPanelImage} />
                  </div>
                </div>
              </div>
            <div className={styles.evolutionSection}>
              <h2 className={styles.overviewHeading}><span className={styles.sectionNum}>08</span> Design Evolution</h2>
              <div className={styles.evolutionList}>
                <div className={styles.evolutionItem}>
                  <div className={styles.evolutionImageBlock}>
                    <span className={styles.evolutionLabel}>{evolutionPair1Before ? "Before" : "After"}</span>
                    <div className={`${styles.evolutionImageWrap} ${styles.evolutionImageWrapPair1}`}>
                      <img
                        key={evolutionPair1Before ? "b1" : "a1"}
                        src={evolutionPair1Before ? before1 : after1}
                        alt={evolutionPair1Before ? "Before" : "After"}
                        className={styles.evolutionImage}
                      />
                    </div>
                  </div>
                  <div className={styles.evolutionTextBlock}>
                    <p className={styles.evolutionTitle}>Color Refinement</p>
                    <p className={styles.evolutionText}>The original palette utilized heavy blue and green tones that weighed down the user experience; by increasing the brightness and applying strategic gradients to specific areas, I replaced the static white background to inject energy into the interface.</p>
                    <button
                      type="button"
                      className={styles.evolutionToggle}
                      onClick={() => setEvolutionPair1Before((b) => !b)}
                      aria-label="Toggle before / after"
                    >
                      {evolutionPair1Before ? "View After →" : "← View Before"}
                    </button>
                  </div>
                </div>
                <div className={styles.evolutionItem}>
                  <div className={styles.evolutionImageBlock}>
                    <span className={styles.evolutionLabel}>{evolutionPair2Before ? "Before" : "After"}</span>
                    <div className={`${styles.evolutionImageWrap} ${styles.evolutionImageWrapPair2}`}>
                      <img
                        key={evolutionPair2Before ? "b2" : "a2"}
                        src={evolutionPair2Before ? before2 : after2}
                        alt={evolutionPair2Before ? "Before" : "After"}
                        className={styles.evolutionImage}
                      />
                    </div>
                  </div>
                  <div className={styles.evolutionTextBlock}>
                    <p className={styles.evolutionTitle}>Layout & Information Architecture</p>
                    <p className={styles.evolutionText}>The original layout was boxy and text-heavy, creating visual clutter that hindered quick scanning; I reorganized the information with clear iconography and simplified the navigation, significantly improving scannability and ease of use.</p>
                    <button
                      type="button"
                      className={styles.evolutionToggle}
                      onClick={() => setEvolutionPair2Before((b) => !b)}
                      aria-label="Toggle before / after"
                    >
                      {evolutionPair2Before ? "View After →" : "← View Before"}
                    </button>
                  </div>
                </div>
                <div className={styles.evolutionItem}>
                  <div className={styles.evolutionImageBlock}>
                    <span className={styles.evolutionLabel}>{evolutionPair3Before ? "Before" : "After"}</span>
                    <div className={`${styles.evolutionImageWrap} ${styles.evolutionImageWrapPair3}`}>
                      <img
                        key={evolutionPair3Before ? "b3" : "a3"}
                        src={evolutionPair3Before ? before3 : after3}
                        alt={evolutionPair3Before ? "Before" : "After"}
                        className={`${styles.evolutionImage} ${evolutionPair3Before ? styles.evolutionImageEnlarge : ""}`}
                      />
                    </div>
                  </div>
                  <div className={styles.evolutionTextBlock}>
                    <p className={styles.evolutionText}>[Your description for this before/after pair.]</p>
                    <button
                      type="button"
                      className={styles.evolutionToggle}
                      onClick={() => setEvolutionPair3Before((b) => !b)}
                      aria-label="Toggle before / after"
                    >
                      {evolutionPair3Before ? "View After →" : "← View Before"}
                    </button>
                  </div>
                </div>
                <div className={styles.evolutionItem}>
                  <div className={styles.evolutionImageBlock}>
                    <span className={styles.evolutionLabel}>{evolutionPair4Before ? "Before" : "After"}</span>
                    <div className={`${styles.evolutionImageWrap} ${styles.evolutionImageWrapPair4}`}>
                      <img
                        key={evolutionPair4Before ? "b4" : "a4"}
                        src={evolutionPair4Before ? before4 : after4}
                        alt={evolutionPair4Before ? "Before" : "After"}
                        className={styles.evolutionImage}
                      />
                    </div>
                  </div>
                  <div className={styles.evolutionTextBlock}>
                    <p className={styles.evolutionText}>[Your description for this before/after pair.]</p>
                    <button
                      type="button"
                      className={styles.evolutionToggle}
                      onClick={() => setEvolutionPair4Before((b) => !b)}
                      aria-label="Toggle before / after"
                    >
                      {evolutionPair4Before ? "View After →" : "← View Before"}
                    </button>
                  </div>
                </div>
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
