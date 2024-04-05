/****************************************************************************/
/**********            components/Slideshow index.jsx                 *******/
/****************************************************************************/
import  { useState, useEffect } from 'react';
import arrowPrev  from '../../assets/Arrow_back.png';
import arrowNext from '../../assets/Arrow_forward.png';
import '../../sass/components/Slideshow.scss';

function  Slideshow ({ views })  {
    /* variable currentIndex=Index en cours, initialisée à 0<=>1ère image */
    const [currentIndex, setCurrentIndex] = useState(0);
    /* variable currentPageNumber=No page courante, initialisée à 1/nbPage */
    const [currentPageNumber, setCurrentPageNumber] = useState(`1/${views.length}`);
    /* UseEffect pour gérer le chgt No page en fonct° de CurrentIndex & le nombre d'images */
    useEffect(() => {if (views.length>0)
        {setCurrentPageNumber(`${currentIndex+1}/${views.length}`);}},
        [currentIndex,views.length]);

    /* Fonction calcul index courant pour view suivante */
    const goToNextView = () => {
        /* Incrémente de 1 l'index en cours */
        setCurrentIndex (currentIndex + 1);
        /* Si on est à la dernière page => revenir à la 1ère image */
        if (currentIndex >= views.length-1) {
            /* index première image  = 0 */
            setCurrentIndex (0);
        }
    };
  
    /* Fonction calcul index courant  pour view précédente */
    const goToPreviousView = () => {
        /* Décrémente de 1 l'index en cours */
        setCurrentIndex (currentIndex - 1);
        /* Si on est à la 1ère image=> aller à la dernière image */
        if (currentIndex <= 0) {
            /* Index dernière image = nombre total images -1 */
            setCurrentIndex (views.length - 1);
        }
    };

    return (
    <section className="carousel">
        <div className="carousel_image" >
            <div className="carousel_image_container">
                {/* Affiche chaque view avec index en cours (currentIndex) */}
                <img src={views[currentIndex]} className="carousel_image"
                alt="CarouselImage" />
            </div>
            {/* Condition : Afficher flèches & No Page si plusieurs views seulement*/}
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