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
import '../../sass/pages/Accomodation.scss';


export default function Accomodation () {
    const [imageViews, setImageViews] = useState([]);
    /* extraction de la valeur du paramètre id de l'URL actuelle */
    const {idAccomodation} = useParams();
    /* récupére le record qui a le même id dans le fichier json */
    /* et stocke le résultat dans la variable recordCurrent */
    const recordCurrent = datas.find(data => data.id === idAccomodation)   
    /* utilisation "useEffect"  maj variable d'état imageViews */
    /* à chq chgt de la valeur idAccomodation ou de la recordCurrent. */
    /* Si record trouvé dans recordCurrent */
    /* nvelle valeur imagesView = ppté pictures de recordCurrent */
    useEffect(() => {if (recordCurrent !== undefined) 
         {setImageViews(recordCurrent.pictures);}},
		[idAccomodation,recordCurrent]);
		/* si Record non trouvé, renvoyer la page d'erreur 404 ***/
        if (recordCurrent === undefined) {
            return <Error />
        } 
        /* Nombre d'étoiles du logement sélectionné */
        const rating = recordCurrent.rating
        /* Liste des équipements du logement pour le collapse */
        const equipment_list = recordCurrent.equipments.map(
            (equipment, index) => ( <p key={"equip-"+index} >{equipment}</p>)
        )
        return (
            <div>
                <Layout>
                    <main className="container accomodation_container">
						{/* Carrousel d'images */}
                        <Carousel views={imageViews}/>
                        <section className="accomodation">
                            <div className="accomodation_infos">
								{/* Affiche le titre , l'emplacement et tags */}
                                <div className ="accomodation_infos_title_location">
                                    <div className ="accomodation_infos_title">{recordCurrent.title}</div>
                                    <h1 className ="accomodation_infos_location">{recordCurrent.location}</h1>
                                    <div className ="accomodation_infos_tag">
                                        {recordCurrent.tags.map((tag, index) => (
                                        <div key={"tag-"+index} className="accomodation_infos_tag_button_container">
                                                <span className = "accomodation_infos_tag_button">{tag}</span>
                                        </div>
                                        ))
                                        }
                                    </div>
                                </div>
                                <div className="accomodation_hosts">
									{/* Affiche photo, nom, prénom de l'hôte */}
                                    <div className="accomodation_hosts_details">
                                        <img src={recordCurrent.host.picture} alt={recordCurrent.host.name}
                                        className="accomodation_hosts_profile_picture" />
                                        <div>
                                            <p className="accomodation_hosts_profile_name">{recordCurrent.host.name} </p>    
                                        </div>
                                    </div>
                                    {/* Affiche les étoiles avec les couleurs */}
                                    <div className="accomodation_hosts_container_stars">
                                        {(() => {
                                            const starElements = [];
                                            const starIndex = [0,1,2,3,4];
                                            starIndex.forEach((index) => {
                                            const starRank = index + 1;
                                            starElements.push(
                                                <img
                                                key={"star-" + index}
                                                src={starRank <= rating ? starFull : starEmpty}
                                                alt="star"
                                                className="accomodation_host_stars"
                                                />
                                            );
                                            });
                                            return starElements;
                                        })()}
                                    </div>
                                </div>
                            </div>
                            <div className="accomodation_collapse">
							    {/* Affiche le collapse description */}
                                <div className="accomodation_collapse_item"> 
                                    <Collapse 
                                        title ={'Description'} 
                                        content={recordCurrent.description } 
                                        collapseDirection={"row"}
                                    />
                                </div>
						        {/* Affiche le collapse équipements */}
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