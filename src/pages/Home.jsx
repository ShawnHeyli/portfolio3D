import './styles/Home.scss';

import Sidebar from '../components/Sidebar';

import { motion } from 'framer-motion';
import React from 'react';

function Home({ pageColor, backgroundImageUrl, floatSidebarUrl }) {
	console.log(backgroundImageUrl);
	return (
		<motion.section
			className='home'
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
		>
			<Sidebar pageColor={pageColor} floatSidebarUrl={floatSidebarUrl}>
				<h3>Hilan Meyran, Portfolio</h3>
				<p>
					Hello, I’m Kazuki Noda, visual designer and art director specializing
					in graphic design
				</p>
			</Sidebar>
			<article
				style={{ background: `url(${backgroundImageUrl}) right/cover` }}
			></article>
		</motion.section>
	);
}

export default Home;
