import { Link, useParams } from 'react-router-dom';

import styles from './categorycard.module.scss';

const CategoryCard = ({ categoryName, slug }) => {

	return (

		<li>
			<Link className={ styles.linkContainer } to={`/hub/${slug}`}>
				<img src='/img/placeholder.png' alt='' />
				<p>{categoryName}</p>
			</Link>
		</li>

	)

}

export default CategoryCard;