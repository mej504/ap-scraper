import styles from './article-sub-styles.module.scss';

const Copy = ({ paragraphs }) => {
	return (
		<div className={ styles.copyContainer }>
			{paragraphs.map((paragraph, i) => (
				<p key={i}>{paragraph}</p>
			))}
		</div>
	)
}

export default Copy;