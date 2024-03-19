/***************************************************************************/
/**********            pages/Accomodation index.jsx                  *******/
/***************************************************************************/

import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Carousel from '../../components/Slideshow';
import datas from '../../datas/datas';
import Error from '../ErrorPage';
import Layout from '../../layout';
import starEmpty from '../../assets/star_empty.png';
import starFull from '../../assets/star_full.png';
import Collapse from '../../components/Collapse';
import '../../styles/Accomodation.css';



export default function Accomodation () {
    const [imageViews, setImageViews] = useState([]);
    /* extraction de la valeur du paramètre id de l'URL actuelle */
    const {idAccomodation} = useParams();
    /* récupérer que la data qui a identifiant= contenu variable idAccomodation grace à find */
    /* stocke le résultat dans la variable dataCurrent */
    const dataCurrent = datas.find(data => data.id === idAccomodation)   
    /*utilisation "useEffect"  pour mise à jour */
    /* de la variable d'état imageViews */
    /* à chq chgt de la valeur idAccomodation ou de la dataCurrent. */
    /* Si record trouvé dans dataCurrent */
    /*nvelle valeur imagesView = ppté pictures de dataCurrent */
    useEffect(() => {if (dataCurrent !== undefined) 
         {setImageViews(dataCurrent.pictures);}},
		[idAccomodation,dataCurrent]);
		/* si id n'existe pas renvoyer à la page d'erreur 404 ***/
        if (dataCurrent === undefined) {
            return <Error />
        } 
        /* rating_user */
        const rating = dataCurrent.rating
        /* liste des équipements pour les collapses */
        const equipment_list = dataCurrent.equipments.map(
            (equipment, index) => ( <p key={"equip-"+index} >{equipment}</p>)
        )
        return (
            <div>
                <Layout>
                    <main className="container accomodation_container">
                        <Carousel views={imageViews}/>
                        <section className="accomodation">
                            <div className="accomodation_infos">
                                <div className ="accomodation_infos_title_location">
                                    <div className ="accomodation_infos_title">{dataCurrent.title}</div>
                                    <h1 className ="accomodation_infos_location">{dataCurrent.location}</h1>
                                    <div className ="accomodation_infos_tag">
                                        {dataCurrent.tags.map((tag, index) => (
                                        <div key={"tag-"+index} className="accomodation_infos_tag_button_container">
                                                <span className = "accomodation_infos_tag_button">{tag}</span>
                                        </div>
                                        ))
                                        }
                                    </div>
                                </div>
                                <div className="accomodation_hosts">
                                    <div className="accomodation_hosts_details">
                                        <img src={dataCurrent.host.picture} alt={dataCurrent.host.name}
                                        className="accomodation_hosts_profile_picture" />
                                        <div>
                                            <p className="accomodation_hosts_profile_name">{dataCurrent.host.name} </p>    
                                        </div>
                                    </div>
                                    <div className="accomodation_hosts_container_stars">
                                        {(() => {
                                            const starElements = [];
                                            for (let index = 0; index < 5; index++) {
                                                const starRank = index + 1;
                                                starElements.push(
                                                <img key={"star-"+index} src={starRank <= rating ? starFull : starEmpty} alt="star" className="accomodation_host_stars" />
                                            );
                                            }
                                            console.log(starElements);
                                            return starElements;
                                        })()}
                                    </div>
                                </div>
                            </div>
                            <div className="accomodation_collapse">
                        <div className="accomodation_collapse_item"> 
                            <Collapse 
                                title ={'Description'} 
                                content={dataCurrent.description } 
                                collapseDirection={"row"}
                            />
                        </div>
                        <div className="accomodation_collapse_item"> 
                            <Collapse 
                                title="Equipements" 
                                content={equipment_list}
                                collapseDirection={"row"} 
                            />
                        </div>
                    </div>
                        </section>
                    </main>
                </Layout>
            </div>
        )
    }