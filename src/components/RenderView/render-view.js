import styles from './render-view.module.scss';

export default function RenderView ({ children }) {

	return (
		<div className={ styles.renderViewContainer }>
			{ children }
		</div>
	)

}