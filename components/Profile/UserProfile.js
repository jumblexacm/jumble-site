import { useState } from 'react';
import styles from './UserProfile.module.css';

function UserProfile({ user }) {
  return (
    <h4>Hello, {user?.name}!</h4>
  );
}

export default UserProfile;
