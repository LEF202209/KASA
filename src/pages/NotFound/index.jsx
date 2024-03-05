/***************************************************************************/
/**********            pages/NotFound          index.jsx             *******/
/***************************************************************************/
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function ErrorPage(){
    return (
        <div>
            <Header/>
            <h1 className="container"> Page Erreur </h1>
            <Footer/>
        </div>
    )
}

export default ErrorPage