import About from 'Components/pages/About/About';
import Contacts from 'Components/pages/Contacts';
import Footer from 'Components/pages/Footer';
import GraphicPortfolio from 'Components/pages/GraphicPortfolio';
import Home from 'Components/pages/Home';
import Resume from 'Components/pages/Resume';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route
					path='*'
					element={
						<>
							<Home />
							<About />
							<Contacts />
							<Footer />
						</>
					}
				/>
				<Route path='/resume' element={<Resume />} />
				<Route
					path='/graphic-design-portfolio'
					element={<GraphicPortfolio />}
				/>
			</Routes>
		</HashRouter>
	);
}

export default App;
