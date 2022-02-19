import './styles/Contact.scss';
import { AnimatePresence, motion } from 'framer-motion';
import {
	IconBrandLinkedin,
	IconDeviceMobileMessage,
	IconBrandTwitter,
	IconMailForward,
} from '@tabler/icons';

export default function Contact() {
	const card = {
		beginning: { opacity: 0, x: 120 },
		final: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: 120 },
	};
	const title = {
		beginning: { opacity: 0, x: -120 },
		final: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: -120 },
	};

	return (
		<motion.main
			key='contact'
			variants={{
				beginning: {},
				final: { transition: { staggerChildren: 0.25 } },
			}}
			initial='beginning'
			animate='final'
			exit='exit'
			className='contact'
		>
			<motion.section className='title' variants={title}>
				<h1>CONTACT ME</h1>
			</motion.section>
			<section className='contactSection'>
				<motion.a
					href='https://fr.linkedin.com/in/hilan-meyran-448868220'
					variants={card}
				>
					<IconBrandLinkedin size={48} color='#282828' />
					<p>Find me on LinkedIn</p>
				</motion.a>

				<motion.a href='/' variants={card}>
					<IconDeviceMobileMessage size={48} color='#282828' />
					<p>Call me</p>
				</motion.a>

				<motion.a href='https://twitter.com/HilanMeyran' variants={card}>
					<IconBrandTwitter size={48} color='#282828' />
					<p>Follow me on Twitter</p>
				</motion.a>

				<motion.a href='mailto:hilanmeyran@protonmail.com' variants={card}>
					<IconMailForward size={48} color='#282828' />
					<p>Send me an email</p>
				</motion.a>
			</section>
		</motion.main>
	);
}
