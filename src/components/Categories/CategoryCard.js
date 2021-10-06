import { Link, useParams } from 'react-router-dom';

import Icon from '../Icon/Icon';

import styles from './categorycard.module.scss';

const CategoryCard = ({ categoryName, slug }) => {

	return (

		<li>
			<Link className={ styles.linkContainer } to={`/hub/${slug}`}>
				<Icon iconName='us-news' />
				<p>{categoryName}</p>
			</Link>
		</li>

	)

}

export default CategoryCard;