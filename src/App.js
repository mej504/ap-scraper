// Data
import availableCategories from './data/categories';

// Modules
import { useState, useEffect, useRef } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

// Styles
import './styles/App.css';

// Components
import NavBar from './components/NavBar/NavBar';
import NewsListing from './components/News/NewsListing';
import Categories from './components/Categories/Categories';
import RenderView from './components/RenderView/render-view';
import Article from './components/Article/Article';

function App() {

	// CONSTANTS
	const NAV_TITLE = 'AP Scraper';
	const API_PATH = 'http://localhost:3010/api'

	// STATE
	const [ screenType, setScreenType ] = useState(null);
	const [ menuOpen, setMenuOpen ] = useState(false);

	// REFS
	const currentlyViewing = useRef(null);
	const currentStories = useRef(null);
	const currentStory = useRef(null);
	const previousCategory = useRef(null);
	const fetchInProgress = useRef(false);

	// HISTORY
	const history = useHistory();
	const currentPath = history.location.pathname;

	const unsetStory = () => {
		return currentStory.current = null;
	}

	const clickIsInModal = ( element ) => {

		if( element.className === 'menu-item' ) {
			return true;
		}

		if( element.className === 'menu' || element.className === 'hamburger-react' ) {
			return true;
		} else {
			if( element.className === undefined || element.id === undefined ) {
				clickIsInModal(element.parentElement);
			}
			if( element.id === 'root' ) {
				return false;
			}
		}
		clickIsInModal( element.parentElement );
		return false;
	}

	const handleClick = ( e ) => {
		let result = clickIsInModal( e.target );
		if( !result ) return setMenuOpen(false);
		return;
	}

	const setInitialCategory = ( category ) => {

		// Short-circuit if we're at the main dash on mobile or tablet
		if( currentPath === '/' && ( screenType === 'mobile' || screenType === 'tablet') ) {
			return;
		}

		// If we're at /hub/:category, set currentlyViewing to the :category param
		if( category === undefined && currentPath.includes('/hub/') ) {
			return currentlyViewing.current = currentPath.split('/')[2];
		}

		return currentlyViewing.current = category;

	}

	// Sets initial category based on 
	if( currentPath === '/hub' || currentPath === '/hub/' ) {
		setInitialCategory('us-news');
	} 


	useEffect(() => {

		// Redirects to home page if /story is requested with no parameter
		if( currentPath === '/story' || currentPath === '/story/' ) {
			history.push('/')
		}

		/**
		 * Updates screen size
		 * @returns void
		 * 
		 */
		const updateScreen = () => {

			let { innerWidth } = window;

			if( innerWidth <= 425 ) return setScreenType('mobile');
			if( innerWidth > 425 && innerWidth <= 800 ) return setScreenType('tablet');
			if( innerWidth > 800 && innerWidth <= 1024 ) return setScreenType('laptop');

			return setScreenType('desktop');

		}

		updateScreen();

		if( menuOpen ) {
			if( screenType === 'laptop' || screenType === 'desktop' ) {
				setMenuOpen(false);
			}
		}

		window.addEventListener('resize', updateScreen);

		return () => {
			window.removeEventListener('resize', updateScreen);
		}

	}, [ screenType ])

	return (

		<main onClick={ handleClick } style={menuOpen ? { overflow:'hidden' } : null } className="main-container">

			<NavBar
				currentlyViewing={ currentlyViewing }
				previousCategory={ previousCategory }
				menuOpen={ menuOpen }
				setMenuOpen={ setMenuOpen }
				path={ currentPath }
				screenType={ screenType }
				title={ NAV_TITLE }/>

			{ screenType === null ? (
				""
			) : screenType === 'mobile' || screenType === 'tablet' ? (

					<RenderView>

						<Switch>

							<Route exact path='/'>
								<Categories
									previousCategory={ previousCategory }
									currentlyViewing={ currentlyViewing }
									screenType={ screenType }
									availableCategories={ availableCategories }
								/>
							</Route>

							<Route exact path='/hub'>
								<Redirect to="/" />
							</Route>

							<Route path='/hub/:category'>
								<NewsListing
									previousCategory={ previousCategory }
									fetchInProgress={ fetchInProgress }
									screenType={ screenType }
									unsetStory={ unsetStory }
									currentStory={ currentStory }
									currentStories={ currentStories }
									currentlyViewing={ currentlyViewing }
									apiPath={ API_PATH }
								/>
							</Route>

							<Route path='/story/:slug'>
								<Article
									screenType={ screenType }
									currentStory={ currentStory }
									apiPath={ API_PATH }
								/>
							</Route>

						</Switch>

					</RenderView>

				) : (
					<div className='main-content-container'>
						<Categories
							previousCategory={ previousCategory }
							currentlyViewing={ currentlyViewing }
							screenType={ screenType }
							availableCategories={ availableCategories }
						/>
						<RenderView>
							<Switch>

								{/* Root path starts on US News */}
								<Route exact path='/'>
									<Redirect to="/hub/us-news" />
								</Route>

								<Route exact path='/hub'>
									<Redirect to="/hub/us-news" />
								</Route>

								{/* Handler for paths containing a category slug*/}
								<Route exact path='/hub/:category' children={
									<NewsListing
										previousCategory={ previousCategory }
										screenType={ screenType }
										fetchInProgress={ fetchInProgress }
										unsetStory={ unsetStory }
										currentStory={ currentStory }
										currentStories={ currentStories }
										currentlyViewing={ currentlyViewing }
										apiPath={ API_PATH }
									/>
								} />

								{/* Handler for paths containing a story slug*/}
								<Route path='/story/:slug' children={
									<Article
										screenType={ screenType }
										currentStory={ currentStory }
										apiPath={ API_PATH }/>
								}/>

							</Switch>
						</RenderView>
					</div>
				)}


		</main>

	);

}

export default App;