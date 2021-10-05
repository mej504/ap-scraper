import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './article.module.scss';

import Headline from './sub/Headline';
import Bylines from './sub/Bylines';
import Copy from './sub/Copy';
import StoryPlaceholder from '../Placeholders/StoryPlaceholder';
import Button from '../Buttons/Button';

const Article = ({ currentStory, storyFetched, apiPath }) => {

	const { slug } = useParams();
	const [ story, setStory ] = useState(null);

	useEffect(() => {

		const url = `${apiPath}/story/${slug}`;

		const fetchStory = async () => {

			const headers = new Headers({
				'Content-Type': 'text/html',
				'Accept-Encoding':'gzip',
				'Cache-Control':'no-cache'

			});

			let article = await fetch(url, {
				method: 'GET',
				headers
			})

			let body = await article.json();
			return await Promise.all([article, body]);

		}

		if( !storyFetched.current || storyFetched.current === null ) {
			fetchStory().then(([response, data]) => {
				storyFetched.current = true;
				currentStory.current = data;
				setStory(data);
			})
		} else {
			setStory(currentStory.current);
		}

		return () => {
			storyFetched.current = false;
		}


	}, []);

	return (

		( !story ? (
			<StoryPlaceholder />
		) : (
			<section className={styles.articleContainer }>

				<Headline headline={ story.headline }/>
				<Bylines bylines={ story.bylines } timestamp={ story.timestamp }/>
				<Copy paragraphs={ story.copy }/>

				<Button text='Read full story on AP' />

			</section>
		))
	)

}

export default Article;