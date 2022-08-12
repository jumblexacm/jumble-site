import { useState } from 'react';
import styles from './CopyToClip.module.css';
import {
  HiDocumentDuplicate,
  HiOutlineDocumentDuplicate,
} from 'react-icons/hi';

function CopyToClip() {
  const [copiedToClip, setCopiedToClip] = useState(false);

  const copyToClip = () => {
    navigator.clipboard.writeText(location.href);
    setCopiedToClip(true);

    setTimeout(() => setCopiedToClip(false), 1500);
  };

  return (
    <div>
      {copiedToClip ? (
        <div className={styles.copied}>
          <p className={styles.copiedText}>COPIED TO CLIPBOARD!</p>
          <HiDocumentDuplicate className={styles.copiedIcon} />
        </div>
      ) : (
        <HiOutlineDocumentDuplicate
          className={styles.copyIcon}
          onClick={copyToClip}
        />
      )}
    </div>
  );
}

export default CopyToClip;
