import './styles/FourOhFour.scss';

import Sidebar from '../components/Sidebar';
import { NavLink } from 'react-router-dom';

export default function FourOhFour({
	pageColor,
	backgroundImageUrl,
	sidebarImageUrl
}) {
	return (
		<section className='fourOhFour'>
			<Sidebar sidebarImageUrl={sidebarImageUrl} pageColor={pageColor}>
				<h3>FourOhFour</h3>
				<p>Well that was unexpected...</p>
				<p> You may just have ended up losing yourself here</p>
			</Sidebar>
			<article
				style={{ background: `url(${backgroundImageUrl}) center/cover` }}
			>
				<div className='goBack'>
					<img src='/img/Arrow.svg' alt='' />
					<NavLink to='/'>go back</NavLink>
				</div>
				<img className='img404' src='/img/404.svg' alt='' />
			</article>
		</section>
	);
}
