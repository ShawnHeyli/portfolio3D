import './styles/Header.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header(props) {
	var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const current = new Date();
	const twoDigits = (time) => {
		return `${time < 10 ? '0' + time : time}`;
	};

	const date = `
  ${twoDigits(current.getHours())} : 
  ${twoDigits(current.getMinutes())} - 
  ${days[current.getDay()]}`;

	const navLinkStyle = ({ isActive }) => {
		return {
			/* textDecoration: isActive ? `line-through 4px ${props.pageColor}` : '', */
			borderLeft: `solid 4px ${props.pageColor}`,
			borderRight: `solid 4px ${props.pageColor}`
		};
	};

	return (
		<header
			style={{
				borderBottom: `solid 4px ${props.pageColor}`,
				borderTop: `solid 4px ${props.pageColor}`
			}}
		>
			<p
				className='date'
				style={{ borderRight: `solid 4px ${props.pageColor}` }}
			>
				local information :<br />
				{date}
			</p>
			<NavLink className='navLink' to='/contact'>
				Contact
			</NavLink>
			<NavLink className='navLink' to='/' style={navLinkStyle}>
				Hilan Meyran
			</NavLink>
			<NavLink className='navLink' to='/works'>
				Works
			</NavLink>
		</header>
	);
}
