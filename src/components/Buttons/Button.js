import styles from './buttons.module.scss';

const Button = ({ text }) => {

	return (
		<a className={ styles.btn } href="#">{ text }</a>
	)

}

export default Button;