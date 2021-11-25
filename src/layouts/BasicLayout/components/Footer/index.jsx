import React from 'react';
import styles from './index.module.scss';

export default function Footer() {
  return (
    <p className={styles.footer}>
      <span className={styles.logo}>ZXJ</span>
      <br />
      <span className={styles.copyright}>© 2019-现在 ZXJ</span>
    </p>
  );
}
