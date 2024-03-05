/**************************************************************************/
/******************   src/styles/index.jsx          **********************/
/**************************************************************************/
import React from 'react';
import styles from './Global.css';

/* appliquer le css de l'attribut container ds Global.css à ts les enfants */
const GlobalStyle = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);

export default GlobalStyle;