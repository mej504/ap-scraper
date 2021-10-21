import { Link, useHistory } from 'react-router-dom';
import { useRef, useEffect } from 'react';

import Icon from '../Icon/Icon';

import styles from './categorycard.module.scss';

const CategoryCard = ({ root, previousCategory, screenType, currentlyViewing, categoryName, slug }) => {

	const container = useRef(null);
	const { isActive } = styles;
	const history = useHistory();

	const activatedClassRequired = () => {
		return screenType === 'mobile' || screenType === 'tablet' ? false : true;
	}

	const handleClick = () => {

		// Do nothing if user clicks the category that's already active
		if( slug === currentlyViewing.current ) return;
		previousCategory.current = slug;

		// Remove is-active class from previous category
		let cards = document.querySelectorAll(`.${isActive}`);
		Array.from(cards).forEach((card) => card.classList.remove(isActive));

		let { current:li } = container;
		li.classList.add(isActive);

		return;

	}

	useEffect(() => {


		if( activatedClassRequired() ) {

			let splitPath = history.location.pathname.split('/');

			// In development, the endpoint for categories is /hub/<category>
			// In production, to work with my server, the endpoint is /NewsScraper/hub/<category>
			let currentSlug = process.env.NODE_ENV === 'development' ? splitPath[2] : splitPath[splitPath.length - 1];

			let { current:li } = container;

			if( currentlyViewing.current === slug ) {
				li.classList.add(isActive);
			}

			if( currentlyViewing.current === null && currentSlug === slug ) {
				li.classList.add(isActive);
			}

		}


	})

	return (

		<li onClick={ handleClick } ref={ container }>
			<Link to={`${root}/hub/${slug}`}>
				<Icon categoryName={ categoryName } iconName={ slug } />
				<p>{categoryName}</p>
			</Link>
		</li>

	)

}

export default CategoryCard;