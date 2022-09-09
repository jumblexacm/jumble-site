import ReactModal from 'react-modal';
import styles from './AddAdminModal.module.css';
import { HiOutlineX } from 'react-icons/hi';
import { useState } from 'react';
import axios from 'axios';

ReactModal.setAppElement('body');
function AddAdminModal({ isOpen, closeModal }) {
  const [currEmail, setCurrEmail] = useState('');
  const [emails, setEmails] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

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
    } else {
      setValid(false);
    }
    setSubmitted(true);
  };

  const handleRemoveEmail = (emailRef) => {
    setEmails(emails.filter((email) => email !== emailRef));
  };

  const validateEmail = (email) => {
    // Regex for anystring@anystring.anystring
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmitAll = () => {
    console.log(emails);
    const responses = Promise.allSettled(
      emails.map(async (email) => {
        const data = {
          email,
          orgId: '1002328503913554051',
          property: 'adminFor',
        };
        axios
          .post('/api/users/update-metadata', data)
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      })
    );
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
              {submitted && !valid ? (
                <label className="text-lg mb-2.5 text-red-600">Email *</label>
              ) : (
                <label className="text-lg mb-2.5">Email</label>
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
