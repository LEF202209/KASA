/**************************************************************************/
/**********            components/Banner index.jsx                  *******/
/**************************************************************************/
import '../../sass/components/Banner.scss';
import { useEffect, useState } from 'react';

export default function Banner() {
    /* Variable routeHome qui prend les valeurs vrai ou faux ) */
	const [routeHome, setRouteHome] = useState(true);
	/* UseEffect permettant de gérer le changement de l'URL */
	useEffect(() => {
		/* RouteHome sera à true si l'URL est '/' (route page d'accueil) */
		const handleLocationChange = () =>{
        /* window.location.pathname contient l'URL de la fenêtre courante */
		/* Si URL courante = Page d'accueil => routeHome est à true */
		(window.location.pathname === '/')?setRouteHome(true):setRouteHome(false);}
		/* Appel initial pour gérer la valeur initiale */
		handleLocationChange(); 
		/* Écouteur pour gérer les changements d'URL */
    	window.addEventListener('popstate', handleLocationChange); 
    	return () => {
			/* Nettoyage de l'écouteur lors du démontage du composant */
      		window.removeEventListener('popstate', handleLocationChange); 
    		};
		}, []);
	
	return (
        /* Affiche banner_home ou banner_about selon la valeur de routeHome */
		<section className={`banner ${routeHome?'banner_home':'banner_about'}`}>
            {/* express° ternaire : affichage h1 seulement si routeHome à vrai */}
			{routeHome? <h1>Chez vous, partout et ailleurs</h1> : null}
		</section>
	)
}