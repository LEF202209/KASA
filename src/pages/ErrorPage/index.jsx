/***************************************************************************/
/**********            pages/ErrorPage index.jsx                     *******/
/***************************************************************************/
import {Link} from 'react-router-dom';
import '../../sass/pages/ErrorPage.scss';
import Layout from '../../layout';

function Error () {
    return (
         <div>
            <Layout>
                <main className="container error_container">
                    <h1 className="error_number"> 404 </h1>    
                    <p className="error_text"> Oups! La page que vous demandez n'existe pas. </p>
                    <li className="error_return">
                        <Link to='/'> Retourner sur la page d'accueil</Link>
                    </li>
                </main>
            </Layout>
        </div>
    )
}
export default Error
