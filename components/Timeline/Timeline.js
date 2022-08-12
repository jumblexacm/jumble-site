import Post from './Post';
import styles from './Timeline.module.css';

function Timeline({ posts }) {
  return (
    <ul className={styles.timeline}>
      {posts?.map((post, index) => (
        <li key={index}>
          <Post post={post} clickable={true} />
        </li>
      ))}
    </ul>
  );
}

export default Timeline;
