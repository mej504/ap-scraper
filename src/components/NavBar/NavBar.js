import styles from './navbar.module.scss';
import '../Menu/menu.css';

// Modules
import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { useHistory } from 'react-router-dom';

// Components
import { Slant as Hamburger } from 'hamburger-react';
import Menu from '../Menu/Menu';


export default function NavBar({ root, previousCategory, currentlyViewing, menuOpen, setMenuOpen, screenType, title }) {

	// const [ isOpen, setOpen ] = useState(false);
	const history = useHistory();
	const nodeRef = useRef(null);

	const handleClick = () => {
		if( screenType === 'mobile' || screenType === 'tablet' ) {
			return history.push('/');
		}
		return;
	}

	return (

		<nav className={ styles.navBar }>

			<h3 onClick={ handleClick } className={ screenType === 'mobile' || screenType === 'tablet' ? styles.pointer : null }>{ title }</h3>

			{  screenType === 'mobile' || screenType === 'tablet' ? (

				<>
					<div className={styles.hamburgerWrap}>
						<Hamburger
							rounded
							color='white'
							size={ 32 }
							distance='sm'
							label="Open menu"
							toggled={menuOpen}
							toggle={setMenuOpen}
						/>
					</div>

					<CSSTransition nodeRef={ nodeRef } in={ menuOpen } timeout={ 1000 } classNames='menu-container'>

						<div className='menu-container' ref={ nodeRef }>
							<Menu
								root={ root }
								previousCategory={ previousCategory }
								currentlyViewing={ currentlyViewing }
								setMenuOpen={ setMenuOpen }
							/>
						</div>

					</CSSTransition>

				</>

			) : null }

		</nav>

	)

}