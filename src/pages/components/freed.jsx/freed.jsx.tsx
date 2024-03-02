import React from 'react';

import styles from './freed.jsx.css';

export interface freed.jsxProps {
  prop?: string;
}

export function freed.jsx({prop = 'default value'}: freed.jsxProps) {
  return <div className={styles.freed.jsx}>freed.jsx {prop}</div>;
}
