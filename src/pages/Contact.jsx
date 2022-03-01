import './styles/Contact.scss';
import { AnimatePresence, motion } from 'framer-motion';
import {
	IconBrandLinkedin,
	IconCheck,
	IconDeviceMobileMessage,
	IconMailForward
} from '@tabler/icons';
import { useState } from 'react';
import Snackbar from '../components/Snackbar';

export default function Contact({ pageColor }) {
	const isPhone = window.matchMedia('(max-width: 500px)').matches;
	console.log(isPhone);

	const card = {
		beginning: { opacity: 0, x: 120 },
		final: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: 120 }
	};
	const title = {
		beginning: { opacity: 0, x: -120 },
		final: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: -120 }
	};

	const fillerStyle = {
		backgroundImage: `linear-gradient(45deg, ${pageColor} 25%, transparent 25%, 
      transparent 50%, ${pageColor} 50%, ${pageColor} 75%, 
      transparent 75%, transparent 100%)`,
		backgroundSize: `25px 25px`,
		borderBottom: `solid 4px ${pageColor}`
	};

	const titleStyle = {
		borderBottom: `solid 4px ${pageColor}`,
		borderLeft: isPhone ? '' : `solid 4px ${pageColor}`,
		borderRight: isPhone ? '' : `solid 4px ${pageColor}`
	};

	const contactStyle = isPhone
		? {
				borderTop: `solid 4px ${pageColor}`,
				borderBottom: `solid 4px ${pageColor}`
		  }
		: {
				borderLeft: `solid 4px ${pageColor}`,
				borderRight: `solid 4px ${pageColor}`
		  };

	console.log(contactStyle);
	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const openSnackbar = () => setSnackbarOpen(true);
	const closeSnackbar = () => setSnackbarOpen(false);

	const handleClick = (textToCopy) => {
		/* navigator.clipboard.writeText(textToCopy); */
		openSnackbar();
		console.log('clicked');
		setTimeout(() => {
			closeSnackbar();
			console.log('disappeared');
		}, 4000);
	};

	return (
		<>
			<AnimatePresence initial={false} exitBeforeEnter={true}>
				{snackbarOpen && (
					<Snackbar
						icon={<IconCheck className='symbol' color='green' size={32} />}
						message={'Copié dans le presse-papiers'}
						pageColor={pageColor}
						handleClose={closeSnackbar}
					/>
				)}
			</AnimatePresence>
			<AnimatePresence initial={false} exitBeforeEnter={true}>
				<motion.main
					key='contact'
					variants={{
						beginning: {},
						final: { transition: { staggerChildren: 0.25 } }
					}}
					initial='beginning'
					animate='final'
					className='contact'
				>
					<div>
						<div className='filler' style={fillerStyle} />
						<motion.h1 className='title' variants={title} style={titleStyle}>
							CONTACT ME
						</motion.h1>
						<div className='filler' style={fillerStyle} />
					</div>
					<section className='contactSection'>
						<motion.div
							href='https://fr.linkedin.com/in/hilan-meyran-448868220'
							variants={card}
							onClick={() => {
								handleClick(
									'https://fr.linkedin.com/in/hilan-meyran-448868220'
								);
							}}
						>
							<IconBrandLinkedin size={48} color='#282828' />
							<h3>Find me on LinkedIn</h3>
							<p>Hilan Meyran</p>
						</motion.div>

						<motion.div
							href='/'
							variants={card}
							style={contactStyle}
							onClick={() => {
								handleClick('06.78.55.61.82');
							}}
						>
							<IconDeviceMobileMessage size={48} color='#282828' />
							<h3>Call me</h3>
							<p>06.78.55.61.82</p>
						</motion.div>

						<motion.div
							href='mailto:hilanmeyran@protonmail.com'
							variants={card}
							onClick={() => {
								handleClick('hilanmeyran@protonmail.com');
							}}
						>
							<IconMailForward size={48} color='#282828' />
							<h3>Send me an email</h3>
							<p>hilanmeyran@protonmail.com</p>
						</motion.div>
					</section>
				</motion.main>
			</AnimatePresence>
		</>
	);
}
