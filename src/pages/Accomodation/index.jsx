/***************************************************************************/
/**********            pages/Accomodation index.jsx                  *******/
/***************************************************************************/

import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Carousel from '../../components/Slideshow';
import datas from '../../datas/datas';
import Error from '../ErrorPage';
import Layout from '../../layout';


export default function Accomodation () {
    const [imageViews, setImageViews] = useState([]);
    /* extraction de la valeur du paramètre id de l'URL actuelle */
    const {id} = useParams();
    /* filtre des élts du tableau datas et ne récupérer que la data */
    /* qui a identifiant= contenu variable id. */
    /* stocke le résultat dans la variable dataCurrent */
    const dataCurrent = datas.filter(data => data.id ===id)
    console.log(dataCurrent) ;
    console.log('id'+id)
     
    /*utilisation "useEffect"  pour mise à jour */
    /* de la variable d'état imageViews */
    /* à chq chgt de la valeur id ou dataCurrent. */
    /* Si id existe &  correspondance trouvé dans dataCurrent */
    /*nvelle valeur imagesView = ppté pictures de dataCurrent */
    useEffect(() => {if (dataCurrent.length>0)
         {setImageViews(dataCurrent[0].pictures);}},
		[id,dataCurrent]);
		/* si id n'existe pas renvoyer page d'erreur 404 ***/
        if (dataCurrent.length === 0) {  
            return <Error />
        } 
    
    return (
        <div>
            <Layout>
                <main className="container accomodation_container">
                    <Carousel views={imageViews}/>
                    <section className="accomodation">
                        <div className="accomodation_infos">
                            <div className ="accomodation_infos_title_location">
                            <span>Info titre location </span>
                            </div>
                            <div className="accomodation_hosts">
                                <div className="accomodation_hosts_details">
                                    <span>HOSTS DETAILS </span>
                                </div>
                                <div className="accomodation_hosts_container_stars">
                                <span>les étoiles  </span>
                                </div>
                            </div>
                        </div>
                        <div className="accomodation_collapse">
                            <div className="accomodation_collapse_item"> 
                                <span>COLLAPSE 1 </span>
                            </div>
                            <div className="accomodation_collapse_item"> 
                                <span>COLLAPSE 2 </span>
                            </div>
                        </div>
                    </section>
                </main>
            </Layout>
        </div>
    )
}