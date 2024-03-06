/**************************************************************************/
/**********            components/card index.js                     *******/
/**************************************************************************/

import { Link } from 'react-router-dom'
import '../../styles/Card.css';

/* affichage d'une card : props  (id, title, cover) */
export default function Item({id, title, cover}) {
	return (
            /* naviguer avec Link dans le Card, l'id dans l'URL */
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