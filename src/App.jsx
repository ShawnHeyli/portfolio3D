import './App.css';
import Sidebar from './components/Sidebar';
import Contact from './pages/Contact';
import Home from './pages/Home';

export default function App() {
	return (
		<main>
			<Sidebar />
			<Contact />
		</main>
	);
}
