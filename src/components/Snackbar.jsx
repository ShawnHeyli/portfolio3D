import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';
import './styles/Snackbar.scss';

export default function Snackbar({ icon, message, handleClose, pageColor }) {
	const snackbar = {
		hidden: { y: '100vh', opacity: 0 },
		visible: { y: '0', opacity: 1 },
		exit: { opacity: 0 }
	};

	const x = useMotionValue(0);
	useEffect(() =>
		x.onChange(() => {
			if (x.getVelocity() > 1200) handleClose();
		})
	);

	return (
		<motion.div
			className='snackbar'
			variants={snackbar}
			initial='hidden'
			animate='visible'
			exit='exit'
			drag='x'
			style={{ x, border: `solid 4px ${pageColor}` }}
			dragConstraints={{
				left: -50,
				right: 50
			}}
		>
			{icon}
			<p>{message}</p>
		</motion.div>
	);
}
