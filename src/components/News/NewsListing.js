import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './news-listing.module.scss';

import NewsItem from './NewsItem';

const NewsListing = ({ apiPath }) => {

	let { category } = useParams();
	const [ stories, setStories ] = useState(null);

	useEffect(() => {

		if( !category ) category = 'us-news';
		const url = `${apiPath}/${category}`;

		const fetchListing = async () => {

			const headers = new Headers({
				'Content-Type': 'application/json',
				'Accept-Encoding':'gzip',
				'Cache-Control':'no-cache'

			});

			let listings = await fetch(url, {
				method: 'GET',
				headers
			})

			let body = await listings.json();
			return await Promise.all([listings, body]);

		}

		fetchListing().then(([response, newsStories]) => {
			setStories(newsStories);
		})

	}, [ apiPath, category ])

	return (

		<div className={ styles.newsListingContainer }>

			{ stories === null ? (

				<p>Loading...</p>

			) : (

				<ul className={ styles.newsListing }>

					{ stories.map(({headline, byline, timestamp, slug}, i) => (
						<NewsItem
							headline={headline}
							byline={byline}
							timestamp={timestamp}
							slug={slug}
							key={i}
						/>
					))}

				</ul>

			)}

		</div>
	)

}

export default NewsListing;