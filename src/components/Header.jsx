import './styles/Header.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<header>
			<NavLink
				className='navLink'
				to='/contact'
				style={({ isActive }) =>
					isActive ? { textDecoration: 'line-through 4px #fe8019' } : undefined
				}
			>
				Contact
			</NavLink>
			<NavLink
				className='navLink'
				to='/'
				style={({ isActive }) =>
					isActive ? { textDecoration: 'line-through 4px #fe8019' } : undefined
				}
			>
				Hilan Meyran
			</NavLink>
			<NavLink
				className='navLink'
				to='/works'
				style={({ isActive }) =>
					isActive ? { textDecoration: 'line-through 4px #fe8019' } : undefined
				}
			>
				Works
			</NavLink>
		</header>
	);
}

export default Header;
