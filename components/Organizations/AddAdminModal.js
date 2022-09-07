import ReactModal from 'react-modal';
import styles from './AddAdminModal.module.css';
import { HiOutlineX } from 'react-icons/hi';
import { useState } from 'react';

ReactModal.setAppElement('body');
function AddAdminModal({ isOpen, closeModal }) {
  const [currEmail, setCurrEmail] = useState('');
  const [emails, setEmails] = useState([]);

  const handleInputChange = (event) => {
    setCurrEmail(event.target.value);
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    if (!emails.includes(currEmail)) {
      setEmails((emails) => [...emails, currEmail]);
    }
    setCurrEmail('');
  };

  const handleRemoveEmail = (emailRef) => {
    setEmails(emails.filter((email) => email !== emailRef));
  };

  const logEmails = () => {
    console.log(emails);
  };

  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        className={styles.modal}
        overlayClassName={styles.overlay}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
      >
        <div className="grid">
          <div>
            <HiOutlineX onClick={closeModal} className={styles.closeBtn} />
          </div>
          <div className=" mx-8">
            <h1 className="text-2xl mb-8 font-medium">
              Invite admins to your org
            </h1>
            <form className="grid" onSubmit={handleEmailSubmit}>
              <label className="text-lg mb-2.5">Email</label>
              <div className="col-2">
                <input
                  className={styles.emailInput}
                  placeholder="email@example.com"
                  value={currEmail}
                  onChange={handleInputChange}
                ></input>
                <button className={styles.addBtn} onSubmit={handleEmailSubmit}>
                  Add
                </button>
              </div>
            </form>
            {emails.length ? (
              <h1 className="text-lg mb-2.5">Users to add</h1>
            ) : null}
            <ul>
              {emails?.map((email, index) => (
                <li key={index} className="flex text-lg">
                  <HiOutlineX
                    className={styles.removeEmail}
                    value={email}
                    onClick={() => handleRemoveEmail(email)}
                  />
                  {email}
                </li>
              ))}
            </ul>
            <div className="mr-8 absolute right-0 bottom-8">
              <button className={styles.cancelBtn} onClick={closeModal}>
                Cancel
              </button>
              <button className={styles.inviteBtn}>Invite</button>
            </div>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default AddAdminModal;
