import { Link } from 'react-router-dom';

import categories from '../../data/categories';
import './menu.css';

export default function Menu ({ currentlyViewing, previousCategory, setMenuOpen }) {

	const handleClick = (slug) => {
		previousCategory.current = slug;
		currentlyViewing.current = null;
		return setMenuOpen(false);
	}

	return (

		<div className='menu'>
			<ul>
				{categories.map((cat,i) => (

					<Link to={`/hub/${cat.slug}`} onClick={() => handleClick(cat.slug)}>

						<li className='menu-item' key={i}>
							{cat.name}
						</li>

					</Link>

				))}
			</ul>
		</div>

	)

}