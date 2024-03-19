/******************************************************************/
/**********            src/layout index.jsx                 *******/
/******************************************************************/
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../../src/styles/Layout.css';


function AppLayout({children}) {
  return (
    <div className="app-container">
      <Header />
          {children}  
      <Footer />
    </div>
  );
}

export default AppLayout;