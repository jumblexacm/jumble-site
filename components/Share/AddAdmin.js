import { HiOutlineUserAdd } from 'react-icons/hi';
import styles from './AddAdmin.module.css';

function AddAdmin() {
  return (
    <div>
      <HiOutlineUserAdd className={styles.addIcon} />
    </div>
  );
}

export default AddAdmin;
