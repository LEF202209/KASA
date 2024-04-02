/**************************************************************************/
/**********            components/card index.js                     *******/
/**************************************************************************/

import { Link } from 'react-router-dom'
import '../../styles/Card.css';

/* Affichage d'une card qui reçoit props (id, title, cover) */
export default function Item({id, title, cover}) {
	return (
            /* Link to pour aller dans la page Logement, l'id dans l'URL */
			<Link to={`/accomodation/${id}`} className="item_container">
				<figure>
					<img src={cover} alt={title} />
					<figcaption className="item_name_container">
						<h2> {title} </h2>
					</figcaption>
				</figure>	
			</Link>
	)
}