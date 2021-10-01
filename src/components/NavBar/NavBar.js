import styles from './navbar.module.scss';

// Modules
import { useState, useEffect } from 'react';

// Components
import { Slant as Hamburger } from 'hamburger-react';

export default function NavBar({ title }) {

	const [ isOpen, setOpen ] = useState(false);

	return (

		<nav className={ styles.navBar }>

			<h3>{ title }</h3>

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