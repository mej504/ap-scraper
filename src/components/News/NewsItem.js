import { Link } from 'react-router-dom';

import styles from './news-item.module.scss';

const NewsItem = ({ headline, slug, timestamp, byline }) => {

	const apiPath = process.env.NODE_ENV === 'development' ? `http://localhost:3010/api/story/${slug}` : `https://minyard.dev/api/story/${slug}`;

	return (

		<li className={ styles.newsItem }>

			<Link to={`/article/:slug`}>
				<h4>{headline}</h4>
				<div className={ styles.metaData }>
					<p>{byline}</p>
					<p>{timestamp}</p>
				</div>
			</Link>

		</li>


	)

}

export default NewsItem;