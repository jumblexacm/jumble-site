import styles from './EmbedForm.module.css';

function EmbedForm({ src }) {
  return (
    <div className={styles.iframeWrapper}>
      <iframe src={src} className={styles.iframe}>
        Loading…
      </iframe>
    </div>
  );
}

export default EmbedForm;
