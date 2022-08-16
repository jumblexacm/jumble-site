import styles from './OurStory.module.css';
function OurStory() {
  return (
    <div className={styles.ourStoryWrapper}>
      <div className={styles.ourStoryTitle}>
        <h1>Our Story</h1>
      </div>
      <div className={styles.ourStoryContent}>
        <p>
          {`Jumble was created to develop a simpler process for UCR students to
          discover and stay updated with announcements from clubs at UCR.
          Designed and built by UCR students, we made sure to keep UCR students'
          needs in mind, so that they won't have to search around to find their
          next niche.`}
        </p>
      </div>
    </div>
  );
}

export default OurStory;
