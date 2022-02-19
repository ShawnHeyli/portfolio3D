import { animate, motion } from 'framer-motion';
import React from 'react';

function Home() {
	return (
		<motion.div
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
		>
			Home
		</motion.div>
	);
}

export default Home;
