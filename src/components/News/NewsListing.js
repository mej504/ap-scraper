import { useParams } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';

import styles from './news-listing.module.scss';

import NewsItem from './NewsItem';
import NewsItemPlaceholder from '../Placeholders/NewsItemPlaceholder';

const NewsListing = ({ currentStories, currentlyViewing, apiPath }) => {

	let { category } = useParams();
	const [ stories, setStories ] = useState(null);

	if( !category ) category = 'us-news';

	useEffect(() => {

		let isMounted = true;

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

		// If currentlyViewing is null, we're on our initial load, and no stories have been fetched
		if( currentlyViewing.current === null ) {
			fetchListing().then(([response, newsStories]) => {
				if( isMounted ) {
					currentlyViewing.current = category;
					currentStories.current = newsStories;
					setStories(newsStories);
				}
			})
		} 

		if( currentlyViewing.current === category ) {
			setStories(currentStories.current);
		}

		if( currentlyViewing.current !== null && currentlyViewing.current !== category ) {
			fetchListing().then(([response, newsStories]) => {
				if( isMounted ) {
					currentlyViewing.current = category;
					currentStories.current = newsStories;
					setStories(newsStories);
				}
			})
		}

		return () => {
			isMounted = false;
			setStories(null);
		}

	}, [ apiPath, category ])

	return (

		<div className={ styles.newsListingContainer }>

			{ stories === null ? (

				<ul className={ styles.newsListing }>
					{ new Array(20).fill(null).map((arr, i) => ( <NewsItemPlaceholder key={i} />)) }
				</ul>

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

/*
			*/