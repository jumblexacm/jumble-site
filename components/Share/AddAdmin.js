import { HiOutlineUserAdd } from 'react-icons/hi';
import styles from './AddAdmin.module.css';
import { useState } from 'react';

function AddAdmin({openModal}) {

  return (
    <div>
      <HiOutlineUserAdd className={styles.addIcon} onClick={openModal}/>
    </div>
  );
}

export default AddAdmin;
