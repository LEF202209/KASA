/******************************************************************/
/**********            src/layout index.jsx                 *******/
/******************************************************************/
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


function AppLayout({children}) {
  return (
    <div>
      <Header />
          {children}  
      <Footer />
    </div>
  );
}

export default AppLayout;