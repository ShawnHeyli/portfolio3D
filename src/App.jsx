import Home from './pages/Home';
import Works from './pages/Works';
import Contact from './pages/Contact';
import FourOhFour from './pages/FourOhFour';

import './App.scss';

import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function App() {
	const pagesData = [
		{
			pagePath: '*',
			pageName: FourOhFour,
			props: {
				pageColor: '#9D0006',
				backgroundImageUrl: '/img/fourOhFourbackground.png',
				sidebarImageUrl: '/img/fourOhFourSidebar.png'
			}
		},
		{
			pagePath: '/',
			pageName: Home,
			props: {
				pageColor: '#B16286',
				backgroundImageUrl: '/img/homeBackground.png',
				floatSidebarUrl: '/img/homeSidebar.png'
			}
		},
		{
			pagePath: '/works',
			pageName: Works,
			props: {
				pageColor: 'orange'
			}
		},
		{
			pagePath: '/contact',
			pageName: Contact,
			props: {
				pageColor: '#8ec07c'
			}
		}
	];

	const location = useLocation();
	const pageMatch = pagesData.filter(
		(page) => page.pagePath === location.pathname
	);
	const defaultPageColor =
		pageMatch.length !== 0
			? pageMatch[0].props.pageColor
			: pagesData[0].props.pageColor;

	return (
		<main style={{ border: `solid 2em ${defaultPageColor}` }}>
			<AnimatePresence initial={false} exitBeforeEnter={true}>
				<Header pageColor={defaultPageColor} />
			</AnimatePresence>
			<Routes location={location} key={location.pathname}>
				{pagesData.map((page) => {
					const component = React.createElement(page.pageName, page.props);
					return <Route path={page.pagePath} element={component} />;
				})}
			</Routes>
		</main>
	);
}
