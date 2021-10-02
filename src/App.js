// Data
import availableCategories from './data/categories';

// Modules
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// Styles
import './styles/App.css';

// Components
import NavBar from './components/NavBar/NavBar';
import Categories from './components/Categories/Categories';
import RenderView from './components/RenderView/render-view';

function App() {

	const navTitle = 'AP Scraper';

	return (

		<main className="main-container">

			<NavBar title={ navTitle }/>

			<RenderView>

				<Switch>

					<Route exact path='/'>
						<Categories availableCategories={ availableCategories } />
					</Route>

				</Switch>

			</RenderView>


		</main>

	);

}

export default App;