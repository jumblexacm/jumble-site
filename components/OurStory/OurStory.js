import styles from './OurStory.module.css';
import Image from 'next/image';
import dancing from '../../public/cooper-dancing.png';
import statistics from '../../public/cooper-statistics.png';
import gaming from '../../public/cooper-gaming.png';
import community from '../../public/cooper-community-idea.png';

function OurStory() {
  return (
    <div className={styles.ourStoryWrapper}>
      <div className={styles.ourStoryTitle}>
        <h1>Our Story</h1>
      </div>
      <div className={styles.ourStoryContent}>
        <div className={styles.ourStoryParagraphRight}>
          {`UCR Clubs was created to provide a simpler process for students at the University of California, Riverside to discover clubs & organizations on campus.`}
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={dancing}
            alt="Two cartoon characters dancing with musical notes around them"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={statistics}
            alt="Two carton characters pointing at a board with a pie chart and bar chart"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className={styles.ourStoryParagraphLeft}>
          {`As UCR students, we know that looking through countless pages to find your niche can be time-consuming and disheartening. So, we’ve designed and built UCR Clubs to facilitate rapid discovery by presenting the most up-to-date information on clubs at UCR.`}
        </div>
        <div className={styles.ourStoryParagraphRight}>
          {`You’re in good company. UCR’s diverse community is the foundation of our rich variety of organizations where you’re bound to discover clubs that match your many hobbies and passions.`}
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={gaming}
            alt="Two cartoon characters sitting on couches playing a video game on a TV"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={community}
            alt="Two cartoon characters sitting on couches playing a video game on a TV"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className={styles.ourStoryParagraphLeft}>
          {`We believe your social circle is your life's most important asset. With UCR Clubs, we aim to elevate the UCR experience by enabling each and every UCR student to explore their interests and find their niche.`}
        </div>
      </div>
    </div>
  );
}

export default OurStory;
