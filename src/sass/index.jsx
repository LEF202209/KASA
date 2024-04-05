/**************************************************************************/
/******************   src/styles/index.jsx          **********************/
/**************************************************************************/
import React from 'react';
import  '../sass/Global.scss';

/* appliquer les css de Global.css à ts les enfants */
const GlobalStyle = ({ children }) => (
  <div>
    {children}
  </div>
);

export default GlobalStyle;