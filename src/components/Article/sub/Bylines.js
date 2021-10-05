import styles from './article-sub-styles.module.scss';

const Bylines = ({ bylines, timestamp }) => {
	return (
		<div className={ styles.bylinesContainer }>
			<p className={ styles.byline }>{ bylines }</p>
			{ bylines.includes('Associated') ? null : <p>Associated Press</p>}
			<p className={ styles.timestamp }>{ timestamp }</p>
		</div>
	)
}

export default Bylines;