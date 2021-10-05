import styles from './article-sub-styles.module.scss';

const Headline = ({ headline }) => {
	return (
		<h1 className={ styles.headline }>{ headline }</h1>
	)
}

export default Headline;