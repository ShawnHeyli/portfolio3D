import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './styles/Header.scss';
import Menu from './Menu';

export default function Header() {
	//State of the menu
	const [menu, setMenu] = useState({
		opened: false,
		name: 'Menu',
	});

	/* const [disabled, setDisabled] = useState(false); */

	// Changes menu state to the opposite
	const toggleMenu = () => {
		/* disabledMenu(); */
		setMenu({
			opened: !menu.opened,
			name: menu.opened ? 'Menu' : 'Close',
		});
	};

	// Closes the menu, used mainly when changeing urls
	const closeMenu = () => {
		setMenu({
			opened: false,
			name: 'Menu',
		});
	};

	// Closes the menu on url change
	const location = useLocation();
	useEffect(() => {
		closeMenu();
	}, [location]);

	/* 	const disabledMenu = () => {
		setDisabled(true);
		setTimeout(() => {
			setDisabled(false);
		}, 1200);
	}; */

	return (
		<>
			<header>
				<h2>Hilan Meyran</h2>
				<h2 /* disabled={disabled} */ onClick={toggleMenu}>{menu.name}</h2>
			</header>
			<Menu menu={menu} />
		</>
	);
}
