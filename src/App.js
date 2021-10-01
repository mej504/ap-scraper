// Data
import availableCategories from './data/categories';

// Modules
import { useState } from 'react';

// Styles
import './styles/App.css';

// Components
import NavBar from './components/NavBar/NavBar';
import Categories from './components/Categories/Categories';

function App() {

	const navTitle = 'AP Scraper';
	const [ currentView, updateCurrentView ] = useState('/');

	const renderCurrentView = () => {

		if( currentView === '/' ) {
			return <Categories updateCurrentView={ updateCurrentView } availableCategories={ availableCategories } />
		}

		if( currentView === '/stories') {
			return <p>Stories</p>;
		}

		return <p>Loading ...</p>

	}

	return (

		<main className="main-container">

			<NavBar title={ navTitle }/>

			{ renderCurrentView() }

		</main>

	);

}

export default App;