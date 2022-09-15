import styles from './OurStory.module.css';
function OurStory() {
  return (
    <div className={styles.ourStoryWrapper}>
      <div className={styles.ourStoryTitle}>
        <h1>Our Story</h1>
      </div>
      <div className={styles.ourStoryContent}>
        <div className={styles.ourStoryParagraph}>
          {
            `UCR Clubs was created to provide a simpler process for students at the University of California, Riverside to discover clubs & organizations on campus.`
          }
        </div>
        <div className={styles.ourStoryParagraph}>
          {
            `As UCR students, we know that looking through countless pages to find your niche can be time-consuming and disheartening. So, we’ve designed and built UCR Clubs to facilitate rapid discovery by presenting the most up-to-date information on clubs at UCR.`
          }
        </div>
        <div className={styles.ourStoryParagraph}>
          {
            `You’re in good company. UCR’s diverse community is the foundation of our rich variety of organizations where you’re bound to discover clubs that match your many hobbies and passions.`
          }
        </div>
        <div className={styles.ourStoryParagraph}>
          {
            `We believe your social circle is your life's most important asset. With UCR Clubs, we aim to elevate the UCR experience by enabling each and every UCR student to explore their interests and find their niche.`
          }
        </div>
      </div>
    </div>
  );
}

export default OurStory;
