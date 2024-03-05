/***************************************************************************/
/**********            components/Routes index.jsx                 *******/
/***************************************************************************/

import React from 'react'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from '../../pages/Home';
import About from '../../pages/About';
import Accomodation from '../../pages/Accomodation';
import Error from '../../pages/NotFound';
import GlobalStyle from '../../styles';

// défini les routes, cette fonction est appelé dans src/index.js //
function Routing() {
    const router = createBrowserRouter([
        { path:"/", element:<Home />, errorElement:<Error /> },
        { path: "/about", element: <About />, errorElement:<Error /> },
        { path: "/accomodation/:id", element: <Accomodation />, errorElement:<Error /> },
        { path: "*", element: <Error /> }  // toutes les routes non trouvées iront vers errorPage
    ]);
    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
                <GlobalStyle> 
                   <RouterProvider router={router} />
                </GlobalStyle>
        </React.StrictMode>
    );        
}

export default Routing


