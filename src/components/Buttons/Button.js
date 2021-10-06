import { useEffect } from 'react';

import styles from './buttons.module.scss';

const Button = ({ type, text, slug }) => {

	let btnStyle;
	let apLink = `https://apnews.com/article/${slug}`;

	switch(type) {
		case 'stretch':
			btnStyle = styles.btnStretch;
			break;
		case 'static':
			btnStyle = styles.btnStatic;
			break;
		default:
			btnStyle = styles.btnStatic;
	}

	return (
		<a role='button'
			aria-label='Read this story on Associated Press'
			className={ btnStyle }
			href={apLink}
			rel="noreferrer noopener"
			target="_blank"
		>

			{ text }

		</a>
	)

}

export default Button;