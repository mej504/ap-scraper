// Data
import availableCategories from './data/categories';

// Modules
import { useState, useEffect, useRef } from 'react';
import { Route, Switch, useParams } from 'react-router-dom';

// Styles
import './styles/App.css';

// Components
import NavBar from './components/NavBar/NavBar';
import NewsListing from './components/News/NewsListing';
import Categories from './components/Categories/Categories';
import RenderView from './components/RenderView/render-view';

function App() {

	const navTitle = 'AP Scraper';
	const apiPath = process.env.NODE_ENV === 'development' ? 'http://localhost:3010/api' : 'https://minyard.dev/scraper/api';
	const [ screenType, setScreenType ] = useState(null);

	useEffect(() => {

		let { innerWidth } = window;

		// Updates windowWidth on resize
		const updateScreen = () => {

			let { innerWidth } = window;

			if( innerWidth <= 425 ) return setScreenType('mobile');
			if( innerWidth > 425 && innerWidth <= 768 ) return setScreenType('tablet');
			if( innerWidth > 768 && innerWidth <= 1024 ) return setScreenType('laptop');

			return setScreenType('desktop');

		}

		updateScreen();

		window.addEventListener('resize', updateScreen);


		return () => {
			// Cleanup
			window.removeEventListener('resize', updateScreen);
		}

	}, [ screenType ])

	return (

		<main className="main-container">

			<NavBar title={ navTitle }/>

			{ screenType === 'mobile' || screenType === 'tablet' ? (

				<RenderView>

					<Switch>
						<Route exact path='/'>
							<Categories availableCategories={ availableCategories } />
						</Route>

						<Route path='/:category' children={ <NewsListing apiPath={ apiPath }/>} />

					</Switch>

				</RenderView>

			) : (
				<div className='main-content-container'>
					<Categories availableCategories={ availableCategories } />
					<RenderView>
						<Switch>

							{/* Root path starts on US News */}
							<Route exact path='/'>
								<NewsListing apiPath={ apiPath } />
							</Route>

							{/* Handler for paths containing a category slug*/}
							<Route path='/:category' children={<NewsListing />} />

						</Switch>
					</RenderView>
				</div>
			)}



		</main>

	);

}

export default App;