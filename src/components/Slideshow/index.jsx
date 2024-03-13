/***************************************************************************/
/**********            components/Slideshow index.jsx                 *******/
/***************************************************************************/
import  { useState, useEffect } from 'react';
import arrowPrev  from '../../assets/Arrow_back.png';
import arrowNext from '../../assets/Arrow_forward.png';
// import '../../styles/Slideshow.css';

function  Slideshow ({ views })  {
  /* pour maj index Image courante */
  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  /* pour maj No Page */
  const [currentPageNumber, setCurrentPageNumber] = useState(`1/${views.length}`);
 /* UseEffect pour gérer le chgt No page en fonction de CurrentViewIndex et le nombre d'images */
    useEffect(() => {if (views.length>0)
         {setCurrentPageNumber(`${currentViewIndex+1}/${views.length}`);}},
     [currentViewIndex,views.length]);

  /* Fonction calcul index pour view suivante */
  const goToNextView = () => {
    /* incrémenter de 1 l'index de la page courante */
    setCurrentViewIndex (currentViewIndex + 1);
    if (currentViewIndex >= views.length-1) {
        /* index première page = 0 */
        setCurrentViewIndex (0);
    }
  };
  
   /* Fonction calcul index pour view précédente */
  const goToPreviousView = () => {
    /* décrémenter de 1 l'index de la page courante */
    setCurrentViewIndex (currentViewIndex - 1);
    if (currentViewIndex <= 0) {
        /* index dernière page = nombre total images -1 */
        setCurrentViewIndex (views.length - 1);
    }
  };

  return (
    <section className="carousel">
        <div className="carousel_image" >
            <div className="carousel_image_container">
                {/* Affiche chaque view de l'index en cours */}
                <img src={views[currentViewIndex]} className="carousel_image"
                alt="CarouselImage" />
            </div>
            {/* Condition : Afficher les flèches si plusieurs views seulement*/}
            {/* Balises <> : (fragments) pour regrouper les 2 éléments button et le No de page*/}
            {views.length > 1 && 
                <>
                    {/* Affiche la flèche de navigation précédente */}
                    <button onClick={goToPreviousView} className="carousel_arrow carousel_arrow_left">
                        <img src={arrowPrev} alt="Previous" />
                    </button>
                    {/* Affiche la flèche de navigation suivante */}
                    <button onClick={goToNextView} className='carousel_arrow carousel_arrow_right'>
                        <img src={arrowNext} alt="Next" />    
                    </button>
                    {views.length> 0  && (
                    /* Compteur d'images(ex:1/5) ne s'affiche que s'il y a plusieurs images */
                    <span className="carousel_page_number">{currentPageNumber}</span> )}
                </>
            }
        </div>
    </section>
  );
};

export default Slideshow;