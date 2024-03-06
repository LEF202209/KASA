/**************************************************************************/
/**********            components/Banner index.jsx                   *******/
/**************************************************************************/
import '../../styles/Banner.css'
import { useEffect, useState } from 'react';// 

export default function Banner() {
    /* variable routeHome( yes/No ) */
	const [routeHome, setRouteHome] = useState(true);
	/* UseEffect permettant de gérer le changement de l'URL */
	useEffect(() => {
		/* RouteHome sera à true si l'URL est '/' */
		const handleLocationChange = () =>{
        /* window.location.pathname contient l'URL de la fenêtre courante */
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
        /* affichage banner_home ou banner_about selon la valeur de routeHome */
		<section className={`banner ${routeHome?'banner_home':'banner_about'}`}>
            {/* express° ternaire : affichage h1 seulement si routeHome à oui */}
			{routeHome? <h1>Chez vous, partout et ailleurs</h1> : null}
		</section>
	)
}