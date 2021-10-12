import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './article.module.scss';

import Headline from './sub/Headline';
import Bylines from './sub/Bylines';
import Copy from './sub/Copy';
import StoryPlaceholder from '../Placeholders/StoryPlaceholder';
import Button from '../Buttons/Button';

const Article = ({ screenType, currentStory, apiPath }) => {

	const { slug } = useParams();
	const [ story, setStory ] = useState(null);
	const [ error, setError ] = useState(null);

	const renderStory = () => (

		<section className={styles.articleContainer }>

			<Headline headline={ story.headline }/>
			<Bylines bylines={ story.bylines } timestamp={ story.timestamp }/>
			<Copy paragraphs={ story.copy }/>

			<Button
				type={ screenType === 'mobile' ? 'stretch' : 'static' }
				slug={ slug }
				text='Read full story on AP'
			/>

		</section>

	);

	const renderError = () => (
		<section className={ styles.articleContainer }>
			<Headline headline={ error.message } />
		</section>
	)

	useEffect(() => {

		const url = `${apiPath}/story/${slug}`;

		const fetchStory = async () => {

			const headers = new Headers({
				'Content-Type': 'text/html',
				'Accept-Encoding':'gzip',
				'Cache-Control':'no-cache'

			});

			try {

				let response = await fetch(url, {
					method: 'GET',
					headers
				})

				if(response.status > 400) {
					let err = new Error("Story not found!");
					err.status = response.status;
					throw err;
				} else {
					let body = await response.json();
					return await Promise.all([response, body]);
				}


			} catch(err) {
				return Promise.reject(err);
			}

		}

		if( currentStory.current === null ) {

			fetchStory().then(([response, data]) => {
				currentStory.current = {
					slug,
					...data
				};
				setStory(data);
			}).catch((err) => {

				setError({
					message:err.message
				})

			})

		} else {
			setStory( currentStory.current );
		}

	}, [ slug ]);

	if( error ) {

		return (
			renderError()
		)

	} else {

		return (

			!story ? (
				<StoryPlaceholder />
			) : (
				renderStory()
			)
		)
	}


}

export default Article;