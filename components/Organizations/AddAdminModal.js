import ReactModal from 'react-modal';
import styles from './AddAdminModal.module.css';
import { HiOutlineX } from 'react-icons/hi';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

ReactModal.setAppElement('body');
function AddAdminModal({ isOpen, closeModal, orgId }) {
  const [currEmail, setCurrEmail] = useState('');
  const [emails, setEmails] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitAll, setSubmitAll] = useState(false);
  const [valid, setValid] = useState(false);

  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }

    if (submitAll && emails.length) {
      handleClose();
    }
  });

  const handleInputChange = (event) => {
    setCurrEmail(event.target.value);
    setSubmitted(false);
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    if (validateEmail(currEmail)) {
      if (!emails.includes(currEmail)) {
        setEmails((emails) => [...emails, currEmail]);
      }
      setValid(true);
      setCurrEmail('');
      setSubmitAll(false);
    } else {
      setValid(false);
    }
    setSubmitted(true);
  };

  const handleRemoveEmail = (emailRef) => {
    setEmails(emails.filter((email) => email !== emailRef));
  };

  const handleClose = () => {
    setCurrEmail('');
    setEmails([]);
    setSubmitted(false);
    setValid(false);
    setSubmitAll(false);
    closeModal();
  };

  const validateEmail = (email) => {
    // Regex for anystring@anystring.anystring
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmitAll = () => {
    setSubmitAll(true);
    if (emails.length) {
      Promise.allSettled(
        emails.map(async (email) => {
          const data = {
            email,
            orgId,
            property: 'adminFor',
          };
          axios
            .post('/api/users/update-metadata', data)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        })
      );
    }
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
            <HiOutlineX onClick={handleClose} className={styles.closeBtn} />
          </div>
          <div className="mx-8">
            <h1 className={styles.title}>Invite Admins To Your Org</h1>
            <form className="grid" onSubmit={handleEmailSubmit}>
              {submitted && !valid ? (
                <label className={styles.emailLabelError}>Email *</label>
              ) : (
                <label className={styles.emailLabel}>Email</label>
              )}

              <div className="col-2">
                <input
                  className={styles.emailInput}
                  placeholder="email@example.com"
                  value={currEmail}
                  onChange={handleInputChange}
                ></input>
                {submitted && !valid && (
                  <span className={styles.emailError}>
                    Please enter a valid email.
                  </span>
                )}
                <button className={styles.addBtn} onSubmit={handleEmailSubmit}>
                  Add
                </button>
              </div>
            </form>
            {emails.length ? (
              <h1 className={styles.emailListTitle}>Users to add</h1>
            ) : null}
            <ul>
              {emails?.map((email, index) => (
                <li key={index} className={styles.emailListItem}>
                  <HiOutlineX
                    className={styles.removeEmail}
                    value={email}
                    onClick={() => handleRemoveEmail(email)}
                  />
                  {email}
                </li>
              ))}
            </ul>
            {submitAll && !emails.length ? (
              <span className="text-red-600">
                Please add at least one email *
              </span>
            ) : null}
            <div className={styles.bottomBtnGroup}>
              <button className={styles.cancelBtn} onClick={handleClose}>
                Cancel
              </button>
              <button className={styles.inviteBtn} onClick={handleSubmitAll}>
                Invite
              </button>
            </div>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default AddAdminModal;
