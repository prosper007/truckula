import React from 'react';
import styles from './PageHeader.module.css';

const PageHeader = (props) => (
  <h1 className={styles.PageHeader}>{props.children}</h1>
);

export default PageHeader;