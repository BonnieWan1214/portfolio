import { useState, startTransition } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./ProjectWork02.module.css";
import heroImg from "../assets/Work_landingpage_UXUI02.png";
import keyfeature1 from "../assets/Work02_keyfeature1.mp4";
import keyfeature2 from "../assets/Work02_keyfeature2.mp4";
import keyfeature3 from "../assets/Work02_keyfeature3.mp4";

function ProjectWork02() {
  const navigate = useNavigate();
  const [keyFeatureTab, setKeyFeatureTab] = useState("smartFilters");

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
                  <span className={styles.metaValue}>UI/UX Designer</span>
                  <span className={styles.metaValue}>Logo Designer</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Duration</span>
                  <span className={styles.metaValue}>2025 Jan-Apr</span>
                </div>
              </div>
              <div className={styles.toolsRow}>
                <span className={styles.toolsLabel}>Tools</span>
                <div className={styles.toolPills}>
                  <span className={styles.toolPill}>Adobe Illustrator</span>
                  <span className={styles.toolPill}>Adobe Photoshop</span>
                  <span style={{ width: '100%', flexBasis: '100%' }}></span>
                  <span className={styles.toolPill}>Figma</span>
                </div>
              </div>
            </div>
          </aside>
          <div className={styles.content}>
            <h1 className={styles.projectTitle}>
              Sporkshare | A social app for inclusive foodies
            </h1>
            <div className={styles.imageWrapper}>
              <img src={heroImg} alt="Sporkshare app hero" className={styles.projectImage} />
            </div>
            <div className={styles.overviewSection}>
              <h2 className={styles.overviewHeading}><span className={styles.sectionNum}>01</span> Project Overview</h2>
              <p className={styles.overviewBody}>
                Sporkshare is a foodie social platform designed to simplify dining for individuals with specific dietary restrictions or unique preferences. Unlike generic review platforms that overlook allergies and cultural requirements, Sporkshare empowers users to discover the perfect meal through precise filtering, personalized collections, and community-driven recommendations.
              </p>
              <div className={styles.keyFeatureTabContent} style={{ display: keyFeatureTab === "smartFilters" ? "block" : "none" }}>
                <div className={styles.keyFeatureRow}>
                  <div className={styles.keyFeatureVideoWrap}>
                    <video src={keyfeature1} className={styles.keyFeatureVideo} controls loop muted playsInline />
                  </div>
                  <div className={styles.keyFeatureRightCol}>
                    <h3 className={styles.keyFeaturesHeading}>Key Features</h3>
                    <div className={styles.keyFeatureBtns}>
                      <button type="button" className={`${styles.keyFeatureBtn} ${keyFeatureTab === "smartFilters" ? styles.keyFeatureBtnActive : ""}`} onClick={() => startTransition(() => setKeyFeatureTab("smartFilters"))}><span className={styles.designBtnShine} aria-hidden />SMART FILTERS</button>
                      <button type="button" className={`${styles.keyFeatureBtn} ${keyFeatureTab === "tapToSave" ? styles.keyFeatureBtnActive : ""}`} onClick={() => startTransition(() => setKeyFeatureTab("tapToSave"))}><span className={styles.designBtnShine} aria-hidden />TAP TO SAVE</button>
                      <button type="button" className={`${styles.keyFeatureBtn} ${keyFeatureTab === "realReviews" ? styles.keyFeatureBtnActive : ""}`} onClick={() => startTransition(() => setKeyFeatureTab("realReviews"))}><span className={styles.designBtnShine} aria-hidden />REAL REVIEWS</button>
                    </div>
                    <div className={styles.keyFeatureTextWrap}>
                      <div className={styles.keyFeatureText}>
                        <ul className={styles.keyFeatureList}>
                          <li><strong>Dietary-First Search</strong>: Filters by allergies and cultural needs for a safe dining experience.</li>
                          <li><strong>Precise Matching</strong>: Combines budget and location to find your perfect meal instantly.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.keyFeatureTabContent} style={{ display: keyFeatureTab === "tapToSave" ? "block" : "none" }}>
                <div className={styles.keyFeatureRow}>
                  <div className={styles.keyFeatureVideoWrap}>
                    <video src={keyfeature2} className={styles.keyFeatureVideo} controls loop muted playsInline />
                  </div>
                  <div className={styles.keyFeatureRightCol}>
                    <h3 className={styles.keyFeaturesHeading}>Key Features</h3>
                    <div className={styles.keyFeatureBtns}>
                      <button type="button" className={`${styles.keyFeatureBtn} ${keyFeatureTab === "smartFilters" ? styles.keyFeatureBtnActive : ""}`} onClick={() => startTransition(() => setKeyFeatureTab("smartFilters"))}><span className={styles.designBtnShine} aria-hidden />SMART FILTERS</button>
                      <button type="button" className={`${styles.keyFeatureBtn} ${keyFeatureTab === "tapToSave" ? styles.keyFeatureBtnActive : ""}`} onClick={() => startTransition(() => setKeyFeatureTab("tapToSave"))}><span className={styles.designBtnShine} aria-hidden />TAP TO SAVE</button>
                      <button type="button" className={`${styles.keyFeatureBtn} ${keyFeatureTab === "realReviews" ? styles.keyFeatureBtnActive : ""}`} onClick={() => startTransition(() => setKeyFeatureTab("realReviews"))}><span className={styles.designBtnShine} aria-hidden />REAL REVIEWS</button>
                    </div>
                    <div className={styles.keyFeatureTextWrap}>
                      <div className={styles.keyFeatureText}>
                        <ul className={styles.keyFeatureList}>
                          <li><strong>Customized Collections</strong>: Beyond simple saving, users can organize their favorite posts into personalized categories</li>
                          <li><strong>Instant Retrieval</strong>: A structured library designed for quick, effortless access to your saves.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.keyFeatureTabContent} style={{ display: keyFeatureTab === "realReviews" ? "block" : "none" }}>
                <div className={styles.keyFeatureRow}>
                  <div className={styles.keyFeatureVideoWrap}>
                    <video src={keyfeature3} className={styles.keyFeatureVideo} controls loop muted playsInline />
                  </div>
                  <div className={styles.keyFeatureRightCol}>
                    <h3 className={styles.keyFeaturesHeading}>Key Features</h3>
                    <div className={styles.keyFeatureBtns}>
                      <button type="button" className={`${styles.keyFeatureBtn} ${keyFeatureTab === "smartFilters" ? styles.keyFeatureBtnActive : ""}`} onClick={() => startTransition(() => setKeyFeatureTab("smartFilters"))}><span className={styles.designBtnShine} aria-hidden />SMART FILTERS</button>
                      <button type="button" className={`${styles.keyFeatureBtn} ${keyFeatureTab === "tapToSave" ? styles.keyFeatureBtnActive : ""}`} onClick={() => startTransition(() => setKeyFeatureTab("tapToSave"))}><span className={styles.designBtnShine} aria-hidden />TAP TO SAVE</button>
                      <button type="button" className={`${styles.keyFeatureBtn} ${keyFeatureTab === "realReviews" ? styles.keyFeatureBtnActive : ""}`} onClick={() => startTransition(() => setKeyFeatureTab("realReviews"))}><span className={styles.designBtnShine} aria-hidden />REAL REVIEWS</button>
                    </div>
                    <div className={styles.keyFeatureTextWrap}>
                      <div className={styles.keyFeatureText}>
                        <ul className={styles.keyFeatureList}>
                          <li><strong>Diner Insights</strong>: Prioritizes honest, detailed feedback over simple star ratings.</li>
                          <li><strong>One-Stop Decision</strong>: Integrated maps and info for choosing without leaving the app.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.problemSection}>
              <h2 className={styles.overviewHeading}><span className={styles.sectionNum}>02</span> Problem Statement</h2>
              <p className={styles.overviewBody}>
                Canadians with dietary restrictions struggle to find suitable dining options through existing platforms.
              </p>
              <div className={styles.statVizRow}>
                <div className={styles.statVizCard}>
                  <div className={styles.statVizRing} style={{ "--pct": 45 }} aria-hidden>
                    <span className={styles.statVizNumber}>45%</span>
                  </div>
                  <p className={styles.statVizCaption}>
                    Canadians with dietary restrictions.
                  </p>
                </div>
                <div className={styles.statVizCard}>
                  <div className={styles.statVizRing} style={{ "--pct": 100 }} aria-hidden>
                    <span className={styles.statVizNumber}>3.5x</span>
                  </div>
                  <p className={styles.statVizCaption}>
                    Growth in plant-based and allergen-free searches since 2020
                  </p>
                </div>
                <div className={styles.statVizCard}>
                  <div className={styles.statVizRing} style={{ "--pct": 70 }} aria-hidden>
                    <span className={styles.statVizNumber}>70%</span>
                  </div>
                  <p className={styles.statVizCaption}>
                    Feel unsupported by current mainstream dining apps.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.researchSection}>
              <h2 className={styles.overviewHeading}><span className={styles.sectionNum}>03</span> Research & Analysis</h2>
              <p className={styles.overviewBody}>
                To explore users' needs and challenges, we conducted primary research with 12 participants and analyzed current social media trends, focusing on dietary accessibility, information fragmentation, and data credibility.
              </p>
              <div className={styles.researchBlocks}>
                <div className={styles.researchBlockFull}>
                  <h4 className={styles.researchBlockTitle}>Key Pain Points</h4>
                  <ul className={styles.painPointList}>
                    <li>
                      <span className={styles.painPointTitle}>1. Information fragmentation across multiple platforms</span>
                      <p className={styles.painPointDesc}>Users must switch between Instagram for visuals and other apps for menus or dietary info, causing frustration and decision fatigue.</p>
                    </li>
                    <li>
                      <span className={styles.painPointTitle}>2. Barriers to finding specific dietary options</span>
                      <p className={styles.painPointDesc}>Current platforms lack precise filters for allergies and cultural needs, making it difficult to find safe and relevant dining choices.</p>
                    </li>
                    <li>
                      <span className={styles.painPointTitle}>3. Distractions from non-food-related content</span>
                      <p className={styles.painPointDesc}>Generic social platforms bury food reviews under unrelated posts, creating a cluttered experience for dedicated food enthusiasts.</p>
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

export default ProjectWork02;
