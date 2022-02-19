import Home from './pages/Home';
import Works from './pages/Works';
import Contact from './pages/Contact';

import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import { AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

const route = [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/works', name: 'Works', component: Works },
	{ path: '/about', name: 'Contact', component: Contact },
];

function App() {
	const location = useLocation();

	return (
		<>
			<Header />
			<AnimatePresence exitBeforeEnter>
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
