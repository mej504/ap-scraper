import styles from './placeholders.module.scss';

const StoryPlaceholder = () => {

	return (
		<div className={ styles.storyPlaceholderContainer }>
			<span className={ styles.headlinePlaceholder }></span>
			<span className={ styles.bylinesPlaceholder }></span>
			<div className={ styles.copyPlaceholderContainer }>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	)

}

export default StoryPlaceholder;