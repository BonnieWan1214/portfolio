import { useState, startTransition, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./ProjectWork02.module.css";
import heroImg from "../assets/Work_landingpage_UXUI02.png";
import keyfeature1 from "../assets/Work02_keyfeature1.mp4";
import keyfeature2 from "../assets/Work02_keyfeature2.mp4";
import keyfeature3 from "../assets/Work02_keyfeature3.mp4";
import workflowImg from "../assets/Work02_workflow.png";
import logoDesignPng from "../assets/Work02_logo.png";
import componentsSvg from "../assets/Work02_component.svg";
import work02Ui from "../assets/Work02_UI.png";
import work02Video from "../assets/Work02_Video.mp4";
import userTestingImg from "../assets/Work02_User-testing.png";

function ProjectWork02() {
  const navigate = useNavigate();
  const [keyFeatureTab, setKeyFeatureTab] = useState("smartFilters");
  const [designTab, setDesignTab] = useState("logo");
  const refDesignSection = useRef(null);
  const refPromotionVideo = useRef(null);
  const refKeyFeatures = useRef(null);

  const scrollToTapToSave = useCallback(() => {
    startTransition(() => setKeyFeatureTab("tapToSave"));
    refKeyFeatures.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const scrollToLogo = useCallback(() => {
    startTransition(() => setDesignTab("logo"));
    refDesignSection.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const scrollToPromotionVideo = useCallback(() => {
    refPromotionVideo.current?.scrollIntoView({ behavior: "smooth", block: "start" });
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
                  <span className={styles.metaLabel}>My Role</span>
                  <span className={styles.metaValue}>UI/UX Designer</span>
                  <span className={styles.metaValue}>Logo Designer</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Duration</span>
                  <span className={styles.metaValue}>2025 Jan-Apr</span>
                </div>
              </div>
              <div className={styles.contributionsRow}>
                <span className={styles.contributionsLabel}>Team & Personal Contributions</span>
                <p className={styles.contributionsBody}>
                  As part of a 5-person team, I was involved in the end-to-end process, specifically leading the{" "}
                  <button type="button" className={styles.sidebarHighlightLink} onClick={scrollToTapToSave}>
                    UI Design
                  </button>{" "}
                  for the Tap to save feature,{" "}
                  <button type="button" className={styles.sidebarHighlightLink} onClick={scrollToLogo}>
                    Logo Design
                  </button>
                  , and{" "}
                  <button type="button" className={styles.sidebarHighlightLink} onClick={scrollToPromotionVideo}>
                    Promotion Video
                  </button>
                  .
                </p>
              </div>
              <div className={styles.toolsRow}>
                <span className={styles.toolsLabel}>Tools</span>
                <div className={styles.toolPills}>
                  <span className={styles.toolPill}>Adobe Illustrator</span>
                  <span className={styles.toolPill}>Adobe Photoshop</span>
                  <span style={{ width: '100%', flexBasis: '100%' }}></span>
                  <span className={styles.toolPill}>Adobe After Effects</span>
                  <span style={{ width: '100%', flexBasis: '100%' }}></span>
                  <span className={styles.toolPill}>Figma</span>
                </div>
              </div>
              <div className={styles.finalProductRow}>
                <span className={styles.finalProductLabel}>Final product</span>
                <div className={styles.finalProductBtns}>
                  <a
                    href="https://www.figma.com/proto/VlOOWKp5J3vXBW1oGMoJ3B/Sporkshare?node-id=5416-10169&p=f&t=d7cKTajgvpGPHcA8-1&scaling=scale-down&content-scaling=fixed&page-id=5416%3A9386&starting-point-node-id=5416%3A10204&show-proto-sidebar=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.finalProductBtn}
                  >
                    View prototype
                  </a>
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
            <div className={styles.overviewSection} ref={refKeyFeatures}>
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
              <div className={styles.researchReportBtnWrap}>
                <a
                  href="https://docs.google.com/document/d/1MJVXaiHopzCgb-bizc2L69RP0uPMDQDIHK2_T9UlFK4/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.researchReportBtn}
                >
                  View Research Report
                </a>
              </div>
            </div>
            <div className={styles.insightsSection}>
              <h2 className={styles.overviewHeading}><span className={styles.sectionNum}>04</span> From Data to Insights</h2>
              <div className={styles.insightsTable}>
                <div className={styles.insightsTableHeader}>
                  <div className={styles.insightsTableHeaderCell}>Phase</div>
                  <div className={styles.insightsTableHeaderCell}>Inspiration</div>
                  <div className={styles.insightsTableHeaderCell}>Investigation</div>
                  <div className={styles.insightsTableHeaderCell}>Validation</div>
                  <div className={styles.insightsTableHeaderCell}>Decision</div>
                </div>
                <div className={styles.insightsTableRow}>
                  <div className={styles.insightsTableRowLabel}>Action</div>
                  <div className={styles.insightsTableCell}>Discovers trending food content via short-form videos.</div>
                  <div className={styles.insightsTableCell}>Switches to maps or review apps to find specific details.</div>
                  <div className={styles.insightsTableCell}>Deep-dives into forums or sites to verify allergen/dietary safety.</div>
                  <div className={styles.insightsTableCell}>Saves screenshots or calls the restaurant for final confirmation.</div>
                </div>
                <div className={styles.insightsTableRow}>
                  <div className={styles.insightsTableRowLabel}>Touchpoints</div>
                  <div className={styles.insightsTableCell}>Instagram, TikTok, Facebook</div>
                  <div className={styles.insightsTableCell}>Google Maps, Yelp, OpenRice</div>
                  <div className={styles.insightsTableCell}>Reddit, Restaurant Website, Community Forums</div>
                  <div className={styles.insightsTableCell}>Notes App, Phone, Camera Roll</div>
                </div>
                <div className={styles.insightsTableRow}>
                  <div className={styles.insightsTableRowLabel}>User Thoughts</div>
                  <div className={styles.insightsTableCell}>"This looks amazing! But do they have any gluten-free options?"</div>
                  <div className={styles.insightsTableCell}>"The map doesn't show the full menu... I need to check their website."</div>
                  <div className={styles.insightsTableCell}>"The AI summary says yes, but a reviewer said no. Who can I trust?"</div>
                  <div className={styles.insightsTableCell}>"This is exhausting. I've opened 4 different apps just to plan one meal."</div>
                </div>
                <div className={styles.insightsTableRow}>
                  <div className={styles.insightsTableRowLabel}>Emotion</div>
                  <div className={styles.insightsTableCell}>
                    <div className={styles.insightsEmotionCell}>
                      <span className={styles.insightsEmoji}>😍</span>
                      <span className={styles.insightsEmotionLabel}>(Excited)</span>
                    </div>
                  </div>
                  <div className={styles.insightsTableCell}>
                    <div className={styles.insightsEmotionCell}>
                      <span className={styles.insightsEmoji}>😫</span>
                      <span className={styles.insightsEmotionLabel}>(Frustrated)</span>
                    </div>
                  </div>
                  <div className={styles.insightsTableCell}>
                    <div className={styles.insightsEmotionCell}>
                      <span className={styles.insightsEmoji}>🧐</span>
                      <span className={styles.insightsEmotionLabel}>(Skeptical)</span>
                    </div>
                  </div>
                  <div className={styles.insightsTableCell}>
                    <div className={styles.insightsEmotionCell}>
                      <span className={styles.insightsEmoji}>😤</span>
                      <span className={styles.insightsEmotionLabel}>(Exhausted)</span>
                    </div>
                  </div>
                </div>
                <div className={styles.insightsTableRow}>
                  <div className={styles.insightsTableRowLabel}>Insight</div>
                  <div className={styles.insightsTableCell}><strong>Visual vs. Context Gap:</strong> Social content is visually stimulating but lacks critical dietary context.</div>
                  <div className={styles.insightsTableCell}><strong>Information Fragmentation:</strong> Constant "platform shuffling" leads to drop-offs and decision fatigue.</div>
                  <div className={styles.insightsTableCell}><strong>The Trust Deficit:</strong> Users distrust automated/AI info and crave verified, human-displayed data.</div>
                  <div className={styles.insightsTableCell}><strong>High Interaction Cost:</strong> The current manual process is outdated and lacks a dedicated, unified home.</div>
                </div>
              </div>
            </div>
            <div className={styles.sectionTransition}>
              <p className={styles.sectionTransitionSmall}>FROM INSIGHT TO INTEGRATION</p>
              <h2 className={styles.sectionTransitionLarge}>Bridging the gap into a single journey</h2>
              <span className={styles.sectionTransitionArrow} aria-hidden>⌄</span>
            </div>
            <div className={styles.flowSection}>
              <h2 className={styles.overviewHeading}><span className={styles.sectionNum}>05</span> Workflow</h2>
              <div className={styles.flowImageWrap}>
                <img src={workflowImg} alt="Sporkshare workflow" className={styles.flowImage} />
              </div>
            </div>
            <div className={styles.designSection} ref={refDesignSection}>
              <h2 className={styles.overviewHeading}><span className={styles.sectionNum}>06</span> Design System</h2>
              <div className={styles.designBtns}>
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
                  className={`${styles.designBtn} ${designTab === "typography" ? styles.designBtnActive : ""}`}
                  onClick={() => startTransition(() => setDesignTab("typography"))}
                >
                  <span className={styles.designBtnShine} aria-hidden />
                  Typography & Color
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
              <div className={styles.designTabContent} style={{ display: designTab === "logo" ? "block" : "none" }}>
                <div className={styles.designPanel}>
                  <div className={styles.designPanelImageWrap}>
                    <img src={logoDesignPng} alt="Sporkshare logo" className={styles.designPanelImage} />
                  </div>
                  <p className={styles.designPanelDescLogo}>
                    The Sporkshare logo combines a location pin, our signature utensil, and a bowl filled with diverse options. This visual language embodies the product's core mission: placing the user's dietary needs at the forefront of navigation, allowing users to effortlessly explore and find their ideal restaurants from integrated dietary information.
                  </p>
                </div>
              </div>
              <div className={styles.designTabContent} style={{ display: designTab === "typography" ? "block" : "none" }}>
                <div className={styles.typographyPanelWork02}>
                  <div className={styles.typographyPanelWork02Inner}>
                  <div className={styles.typographyColumn}>
                    <div className={styles.typographyFontGroup}>
                      <p className={styles.typographyFontName} style={{ fontFamily: "Roboto, sans-serif" }}>Roboto</p>
                      <p className={styles.typographyWeights}>Regular / Medium / Bold</p>
                    </div>
                    <p className={styles.typographyAa} style={{ fontFamily: "Roboto, sans-serif" }}>Aa</p>
                    <div className={styles.typographyBlock}>
                      <span className={styles.typographyLabel}>Heading</span>
                      <p className={styles.typographySample} style={{ fontFamily: "Roboto, sans-serif" }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />1234567890</p>
                    </div>
                    <div className={styles.typographyBlock}>
                      <span className={styles.typographyLabel}>Text</span>
                      <p className={styles.typographySample} style={{ fontFamily: "Roboto, sans-serif" }}>abcdefghijklmnopqrstuvwxyz<br />1234567890</p>
                    </div>
                  </div>
                  <div className={styles.typographyColors}>
                    <div className={styles.colorCircleRow}>
                      <div className={styles.colorCircle} style={{ background: "#18372F" }} aria-hidden />
                      <div className={styles.colorCircleMeta}>
                        <span className={styles.colorCircleLabel}>Primary</span>
                        <span className={styles.colorCircleCode}>#18372F</span>
                      </div>
                    </div>
                    <div className={styles.colorCircleRow}>
                      <div className={styles.colorCircle} style={{ background: "#88BF47" }} aria-hidden />
                      <div className={styles.colorCircleMeta}>
                        <span className={styles.colorCircleLabel}>Secondary</span>
                        <span className={styles.colorCircleCode}>#88BF47</span>
                      </div>
                    </div>
                    <div className={styles.colorCircleRow}>
                      <div className={styles.colorCircle} style={{ background: "#F36C2C" }} aria-hidden />
                      <div className={styles.colorCircleMeta}>
                        <span className={styles.colorCircleLabel}>Warning</span>
                        <span className={styles.colorCircleCode}>#F36C2C</span>
                      </div>
                    </div>
                    <div className={styles.colorCircleRow}>
                      <div className={styles.colorCircle} style={{ background: "#EEECDF", borderColor: "rgba(255,255,255,0.3)" }} aria-hidden />
                      <div className={styles.colorCircleMeta}>
                        <span className={styles.colorCircleLabel}>Neutral</span>
                        <span className={styles.colorCircleCode}>#EEECDF</span>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className={styles.designTabContent} style={{ display: designTab === "components" ? "block" : "none" }}>
                <div className={styles.designPanel}>
                  <div className={styles.designPanelImageWrap}>
                    <img src={componentsSvg} alt="Sporkshare components" className={styles.designPanelImage} />
                  </div>
                </div>
              </div>
              <div className={styles.userTestingSection}>
                <h2 className={styles.overviewHeading}><span className={styles.sectionNum}>07</span> User testing</h2>
                <p className={styles.overviewBody}>
                  We conducted two rounds of user testing during both the mid-fidelity and high-fidelity stages to validate our design decisions and iterate effectively. Across these sessions, we designed six task-based scenarios that reflected key user journeys, allowing participants to interact with core features in realistic contexts.
                </p>
                <div className={styles.work02UiWrap}>
                  <div className={styles.userTestingContent}>
                    <div className={styles.userTestingImageCol}>
                      <img src={userTestingImg} alt="Sporkshare user testing" className={styles.userTestingImage} />
                    </div>
                    <div className={styles.userTestingIssues}>
                      <p className={styles.userTestingIssuesTitle}>
                        <strong>MAIN ISSUES IDENTIFIED:</strong>
                      </p>
                      <ul className={styles.userTestingIssuesList}>
                        <li>Interface felt visually flat and lacked strong branding.</li>
                        <li>Low contrast reduced readability and accessibility.</li>
                        <li>Missing confirmation feedback caused user hesitation.</li>
                        <li>Visual hierarchy was unclear, making key actions less obvious.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={styles.researchReportBtnWrap}>
                  <a
                    href="https://www.figma.com/design/VlOOWKp5J3vXBW1oGMoJ3B/Sporkshare?node-id=9163-385&t=GiPJ866uaxiTJya0-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.researchReportBtn}
                  >
                    View User testing detail
                  </a>
                </div>
                <h2 className={`${styles.overviewHeading} ${styles.userTestingNextHeading}`}><span className={styles.sectionNum}>08</span> Final UI Design</h2>
                <div className={styles.work02UiWrap}>
                  <img src={work02Ui} alt="Sporkshare UI" className={styles.work02UiImage} />
                </div>
              </div>
            </div>
            <div className={styles.overviewSection} ref={refPromotionVideo}>
              <h2 className={styles.overviewHeading}><span className={styles.sectionNum}>09</span> Promotion Video</h2>
              <div className={styles.promotionVideoWrap}>
                <video src={work02Video} className={styles.promotionVideo} controls loop muted playsInline autoPlay />
              </div>
              <div className={styles.promotionTextWrap}>
                <p className={styles.overviewBody}>
                  To alleviate the stress users with dietary restrictions face when searching for restaurants, I chose an upbeat tempo and lively animations to present Sporkshare. The video focuses on our three core features, demonstrating how users can intuitively find their ideal dining destinations with both ease and precision while meeting their specific dietary needs
                </p>
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
