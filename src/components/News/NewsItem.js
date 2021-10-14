import { Link } from 'react-router-dom';

import styles from './news-item.module.scss';

const NewsItem = ({ root, currentStory, unsetStory, headline, slug, timestamp, byline }) => {

	const handleClick = () => {

		if( currentStory.current === null ) {
			return;
		}

		if( currentStory.current.slug === slug ) {
			return;
		} else {
			return unsetStory();
		}

	}

	return (

		<Link style={{textDecoration:'none'}} to={`${root}/story/${slug}`}>
			<li onClick={ handleClick } className={ styles.newsItem }>

				<h4>{headline}</h4>
				<div className={ styles.metaData }>
					<p>{byline}</p>
					<p>{timestamp}</p>
				</div>

			</li>
		</Link>


	)

}

export default NewsItem;