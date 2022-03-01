import './styles/WorkContent.scss';

import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Plane } from '@react-three/drei';
import { TextureLoader } from 'three';

export default function WorkContent(props) {
	/* 	const workAnimation = {
		hidden: { x: -400, opacity: 0 },
		visible: { x: 0, opacity: 1 },
		exit: { scaleY: 0, opacity: 0 }
	};

	const [openPopup, cyclePopup] = useCycle(
		{ opacity: 0, scale: 0 },
		{ opacity: 1, scale: 1 }
	);
	const [openShow, cycleShow] = useCycle(
		{ y: 0, opacity: 1 },
		{ opacity: 0, y: -200 }
	); */

	function Scene() {
		return (
			<Canvas>
				<Suspense fallback={null}>
					<OrbitControls
						enablePan={true}
						enableZoom={false}
						enableRotate={true}
					/>
					<ambientLight color='white' intensity={0.2} />
					<Image path={'/img/planeTexture.jpg'} />
				</Suspense>
			</Canvas>
		);
	}

	function Image({ path }) {
		const colorMap = useLoader(TextureLoader, `${path}`);
		return (
			<Plane scale={4}>
				<meshStandardMaterial map={colorMap} />
			</Plane>
		);
	}

	function Links({ links }) {
		return (
			<ul>
				{links.map((link) => (
					<a href={link.path}>
						<div className='station' key={123}>
							{link.icon}
						</div>
						<p>{link.name}</p>
					</a>
				))}
			</ul>
		);
	}

	function Languages({ tools }) {
		return (
			<ul>
				{tools.map((tool) => (
					<div>
						{tool.icon}
						<p>{tool.name}</p>
					</div>
				))}
			</ul>
		);
	}

	return (
		<div className='workContent'>
			<div
				className='canvas'
				style={{ borderBottom: `4px solid ${props.pageColor}` }}
			>
				<Scene />
			</div>
			<div
				className='description'
				style={{ borderRight: `4px solid ${props.pageColor}` }}
			>
				<h2>Description</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corporis
					dolore aliquam, repellendus, perferendis facere optio architecto
					asperiores rerum enim, animi reiciendis accusamus hic obcaecati!
					Quaerat iste id eligendi sequi?
				</p>
			</div>
			<div
				className='links'
				style={{ borderBottom: `4px solid ${props.pageColor}` }}
			>
				<h2>Links</h2>
				<Links links={props.links} />
			</div>
			<div className='languages'>
				<h2>Tools used</h2>
				<Languages tools={props.tools} />
			</div>
		</div>
	);
}
