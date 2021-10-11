import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './news-listing.module.scss';

import NewsItem from './NewsItem';
import NewsItemPlaceholder from '../Placeholders/NewsItemPlaceholder';

const NewsListing = ({ screenType, fetchInProgress, currentStory, unsetStory, currentStories, currentlyViewing, apiPath }) => {

	const [ stories, setStories ] = useState(null);
	let controller = new AbortController();
	let signal = controller.signal;

	// Category provided in /hub/:category
	let { category } = useParams();
	category = category || 'us-news';

	useEffect(() => {

		const url = `${apiPath}/${category}`;

		/**
		 * Checks to see if a request to the API is necessary
		 * @returns Boolean | True if story must be fetched, otherwise false
		 */

		const storiesNeedToBeFetched = () => { 
			if( stories === null ) {
				return (
					currentStories.current === null ? true
					: currentlyViewing.current === category ? false
					: true
				)
			}
			return currentlyViewing.current === category ? false : true;
		}

		/**
		 * Fetches news stories from API based on :category param
		 * 
		 * @param String | url | Target endpoint
		 * @returns Promise | An array of stories pulled from AP
		 * 
		 */
		const fetchListing = async ( url, signal ) => {

			fetchInProgress.current = true;

			signal.addEventListener('abort', () => {
				Promise.reject('Fetch request cancelled.').catch((err) => {
					return;
				});
			})

			const headers = new Headers({
				'Content-Type': 'application/json',
				'Accept-Encoding':'gzip',
				'Cache-Control':'no-cache'

			});

			let listings = await fetch(url, {
				method: 'GET',
				headers,
				signal
			})

			let body = await listings.json();
			return await Promise.all([listings, body]);

		}

		// Ensures no fetch re
		if( !fetchInProgress.current && storiesNeedToBeFetched() ) {

			fetchListing(url, signal).then(([response, stories]) => {
				fetchInProgress.current = false;
				currentStories.current = stories;
				currentlyViewing.current = category;
				setStories(stories);
			}).catch((err) => {
				return;
			})

		} else {
			// If we make it here, we can use stories cached in currentStories.current
			// to prevent unnecessary network request
			setStories(currentStories.current);
		}

		return () => {
			controller.abort();
			fetchInProgress.current = false;
			setStories(null);
		}

	}, [category, screenType ])

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
							currentStory={ currentStory }
							unsetStory={ unsetStory }
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