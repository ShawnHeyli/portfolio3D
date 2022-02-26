import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<AnimatePresence initial={false} exitBeforeEnter>
				<App />
			</AnimatePresence>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
