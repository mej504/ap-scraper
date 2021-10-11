import styles from './navbar.module.scss';

// Modules
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Components
import { Slant as Hamburger } from 'hamburger-react';


export default function NavBar({ screenType, title }) {

	const [ isOpen, setOpen ] = useState(false);
	let history = useHistory();
	
	const handleClick = () => {
		if( screenType === 'mobile' || screenType === 'tablet' ) {
			return history.push('/');
		}
		return;
	}

	return (

		<nav className={ styles.navBar }>

			<h3 onClick={ handleClick } className={ screenType === 'mobile' || screenType === 'tablet' ? styles.pointer : null }>{ title }</h3>

			<Hamburger
				rounded
				color='white'
				size={ 32 }
				distance='sm'
				label="Open menu"
				toggled={isOpen}
				toggle={setOpen}
			/>

		</nav>

	)

}