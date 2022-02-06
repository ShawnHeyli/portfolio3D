import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './styles/Menu.scss';

export default function Menu({ menu }) {
	useEffect(() => {
		if (menu.opened === false) {
			menuDisplay.style.display = 'none';
		} else if (menu.opened === true) {
			menuDisplay.style.display = 'flex';
		}
	});

	let menuDisplay = useRef(null);

	return (
		<section ref={(el) => (menuDisplay = el)} className='menu'>
			<nav className='sidebar'>
				<Link to='/home'>Home</Link>
				<Link to='/works'>Works</Link>
				<Link to='/contact'>Contact</Link>
			</nav>
			<section className='contact'>
				<a href='https://fr.linkedin.com/in/hilan-meyran-448868220'>
					<img src='/img/linkedin.png' alt='LinkedIn' />
					<p>Find me on LinkedIn</p>
				</a>
				<a href='/'>
					<img src='/img/phone.png' alt='Phone' />
					<p>Call me</p>
				</a>
				<a href='https://twitter.com/HilanMeyran'>
					<img src='/img/twitter.png' alt='Twitter' />
					<p>Follow me on Twitter</p>
				</a>
				<a href='mailto:hilanmeyran@protonmail.com'>
					<img src='/img/email.png' alt='Email' />
					<p>Send me an email</p>
				</a>
			</section>
		</section>
	);
}
