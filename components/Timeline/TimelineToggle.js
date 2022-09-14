import styles from './TimelineToggle.module.css';

export default function TimelineToggle({ toggleUserPosts, userPostToggle }) {
  return (
    <div className={styles.toggleWrapper}>
      <label className={styles.toggleLabel}>
        <input
          id="Toggle3"
          type="checkbox"
          className="hidden peer"
          onClick={toggleUserPosts}
        />
        {userPostToggle ? (
          <>
            <div className={styles.toggleLeftOn}>Following</div>
            <div className={styles.toggleRightOff}>All Posts</div>
          </>
        ) : (
          <>
            <div className={styles.toggleLeftOff}>Following</div>
            <div className={styles.toggleRightOn}>All Posts</div>
          </>
        )}
      </label>
    </div>
  );
}
