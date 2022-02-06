import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Works from './pages/Works';
import FourOhFour from './pages/FourOhFour';

export default function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/works' element={<Works />} />
				<Route path='*' element={<FourOhFour />} />
			</Routes>
		</>
	);
}
