import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './OrgInfo.module.css';
import CopyToClip from '../Share/CopyToClip';
import AddAdmin from '../Share/AddAdmin';
import AddAdminModal from './AddAdminModal';
import { useUser } from '@auth0/nextjs-auth0';

function OrgDescription({ org_description }) {
  const minChars = 310;
  const [charsToShow, setcharsToShow] = useState(minChars);
  const [expanded, setExpanded] = useState(false);

  const readMore = () => {
    if (charsToShow === minChars) {
      setcharsToShow(org_description?.length);
      setExpanded(true);
    } else {
      setcharsToShow(minChars);
      setExpanded(false);
    }
  };
  return (
    <div>
      <div className={styles.descriptionText}>
        <p>
          {org_description.slice(0, charsToShow)}
          {org_description.length > charsToShow ? ' ...' : ''}
        </p>
      </div>
      <div className="divide-y">
        {org_description.length > charsToShow || expanded ? (
          <div className={styles.readMoreBtn}>
            <button onClick={readMore}>
              {expanded ? (
                <span className="text-gray-500 hover:text-gray-700">
                  Collapse
                </span>
              ) : (
                <span className="text-gray-500 hover:text-gray-700">
                  Read More
                </span>
              )}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function OrgInfo({ org_id, org_name, org_avatar_url, org_description = '' }) {
  const { user, error, isLoading } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (user && user['https://ucrclubs.com/adminFor'].includes(org_id)) {
      setIsAdmin(true);
    }
  }, [user, org_id]);

  return (
    <div className={styles.orgInfoContainer}>
      <CopyToClip />
      {isAdmin && <AddAdmin openModal={openModal} />}
      <AddAdminModal isOpen={isOpen} closeModal={closeModal} />
      <div className={styles.orgImageWrapper}>
        <Image
          src={org_avatar_url}
          alt=""
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <h4 className={styles.orgName}>{org_name}</h4>
      <OrgDescription org_description={org_description} />
    </div>
  );
}

export default OrgInfo;
