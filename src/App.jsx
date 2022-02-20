import Home from './pages/Home';
import Works from './pages/Works';
import Contact from './pages/Contact';

import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import { AnimatePresence } from 'framer-motion';

function App() {
	const location = useLocation();

	return (
		<>
			<Header />
			<AnimatePresence initial={false} exitBeforeEnter>
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={<Home />} />
					<Route path='/works' element={<Works />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</AnimatePresence>
		</>
	);
}

export default App;
