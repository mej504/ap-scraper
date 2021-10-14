import { Link } from 'react-router-dom';

import categories from '../../data/categories';
import './menu.css';

export default function Menu ({ root, currentlyViewing, previousCategory, setMenuOpen }) {

	const handleClick = (slug) => {
		previousCategory.current = slug;
		currentlyViewing.current = null;
		return setMenuOpen(false);
	}

	return (

		<div className='menu'>
			<ul>
				{categories.map((cat,i) => (

					<Link to={`${root}/hub/${cat.slug}`} key={i+1} onClick={() => handleClick(cat.slug)}>

						<li className='menu-item' key={i}>
							{cat.name}
						</li>

					</Link>

				))}
			</ul>
		</div>

	)

}