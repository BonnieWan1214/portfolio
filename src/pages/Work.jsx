import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./Work.module.css";
import work01Img from "../assets/Work01_hero img.jpg";
import work02CoverVideo from "../assets/Work02_coverimg.mp4";
import work03CoverGif from "../assets/Work03_coverimg.gif";
import work04Img from "../assets/Work04_1.png";
import work05Img from "../assets/Work05_heroimg.jpg";

const titleWords = ["My", "Creative", "Path"];

const workItems = [
  {
    id: "tandem",
    image: work01Img,
    title: "Tandem | A scheduling solution for parents in the skilled trades",
    tags: ["UI / UX Design", "Frontend Development", "Logo Design"],
    to: "/work/ux-ui",
  },
  {
    id: "sporkshare",
    video: work02CoverVideo,
    title: "Sporkshare | A social app for inclusive foodies",
    tags: ["UI / UX Design", "Animation", "Logo Design"],
    to: "/work/sporkshare",
  },
  {
    id: "busch",
    image: work04Img,
    title: "Busch Beer | Social Media Design",
    tags: ["Graphic Design"],
    to: "/work/social-media-campaign",
  },
  {
    id: "meowtini",
    image: work03CoverGif,
    title: "Meowtini | Cocktail packaging design",
    tags: ["Packaging Design"],
    to: "/work/cocktail-packaging",
  },
  {
    id: "shopee",
    image: work05Img,
    title: "Shopee | Mother's Day Campaign for Southeast Asia's E-commerce Leader",
    tags: ["UI Design"],
    to: "/work/shopee-mothers-day",
  },
];

function Work() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.workHeader}>
            <h1 className={styles.workTitle} aria-label="My Creative Path">
              {titleWords.map((word, i) => (
                <motion.span
                  key={word}
                  className={styles.titleWord}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.12 * i,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.p
              className={styles.workSubtitle}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Each work represents a chapter in my design journey, designed to solve problems and told through a compelling visual language. Take a look at the work I'm proud of:
            </motion.p>
          </header>
          <motion.section
            className={styles.workGrid}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {workItems.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                className={styles.workCard}
              >
                <div className={styles.workCardImageWrap}>
                  {item.video ? (
                    <video
                      src={item.video}
                      className={styles.workCardImage}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt=""
                      className={styles.workCardImage}
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </div>
                <h3 className={styles.workCardTitle}>{item.title}</h3>
                <div className={styles.workCardTags}>
                  {item.tags.map((tag) => (
                    <span key={tag} className={styles.workCardTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Work;
