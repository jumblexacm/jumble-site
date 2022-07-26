import styles from './EmbedForm.module.css';

function EmbedForm({ src }) {
  return (
    <iframe src={src} className={styles.iframe}>
      Loading…
    </iframe>
  );
}

export default EmbedForm;
