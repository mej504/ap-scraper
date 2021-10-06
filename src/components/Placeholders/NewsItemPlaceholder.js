import styles from './placeholders.module.scss';

const NewsItemPlaceholder = () => {

	return (
		<li className={ styles.newsItemPlaceholder }>
			<span className={ styles.niHeadline }></span>
			<span className={ styles.niBylines }></span>
			<span className={ styles.niTimestamp }></span>
		</li>
	)

}

export default NewsItemPlaceholder;