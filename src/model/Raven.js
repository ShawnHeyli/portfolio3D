/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Brew (https://sketchfab.com/Espressoul)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/day-5-raven-inktober-2021-f44a1dd456de41cdbdbc73efddb84cad
title: Day 5 Raven - INKTOBER 2021
*/

import React, { useEffect, useRef } from 'react';
import { Html, SpotLight, Text, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Color } from 'three';

export default function Raven({ ...props }) {
	const group = useRef();
	const { nodes, materials } = useGLTF('/models/raven.glb');

	useFrame((state) => {
		const t = state.clock.getElapsedTime();
		group.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
	});

	return (
		<group ref={group} {...props} dispose={null}>
			<group rotation={[0.4, 0, 0]} scale={0.06} position={(0, 0, -0.07)}>
				<group rotation={[0, 0, 0]} scale={0.05}>
					<directionalLight intensity={1} position={[0, 0, 100]} />
					<Html
						scale={100}
						rotation={[-0.4, 0, 0]}
						position={[-520, 420, 400]}
						transform
						occlude
					>
						<div className='annotation'>
							<span>PORTFOLIO</span>
						</div>
					</Html>
					<mesh
						geometry={nodes.carrion_carrion_mat_0.geometry}
						material={materials.carrion_mat}
					/>
					<mesh
						geometry={nodes.snow_floor_snow_floor_mat_0.geometry}
						material={materials.snow_floor_mat}
					/>
					<mesh
						geometry={nodes.snow_pile_snow_pile_mat_0.geometry}
						material={materials.snow_pile_mat}
					/>
					<mesh
						geometry={nodes.twig_Material003_0.geometry}
						material={materials['Material.003']}
					/>
					<mesh
						geometry={nodes.grass_grass_2_mat_0.geometry}
						material={materials.grass_2_mat}
					/>
					<mesh
						geometry={nodes.grass001_grass_1_mat_0.geometry}
						material={materials.grass_1_mat}
					/>
					<mesh
						geometry={nodes.grass002_grass_mat_0.geometry}
						material={materials.grass_mat}
					/>
					<group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
						<primitive object={nodes._rootJoint} />
						<group rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
							<mesh
								geometry={nodes.raven001_raven_mat_0.geometry}
								material={nodes.raven001_raven_mat_0.material}
							/>
						</group>
						<skinnedMesh
							geometry={nodes.Object_21.geometry}
							material={nodes.Object_21.material}
							skeleton={nodes.Object_21.skeleton}
						/>
					</group>
					<mesh
						geometry={nodes.twig001_twig_hull_mat_0.geometry}
						material={materials.twig_hull_mat}
					/>
					<mesh
						geometry={nodes.snow_drop014_snowdrop_mat_0.geometry}
						material={nodes.snow_drop014_snowdrop_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop_hull014_snow_drop_hull_mat_0.geometry}
						material={nodes.snow_drop_hull014_snow_drop_hull_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop001_snowdrop_mat_0.geometry}
						material={nodes.snow_drop001_snowdrop_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop_hull001_snow_drop_hull_mat_0.geometry}
						material={nodes.snow_drop_hull001_snow_drop_hull_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop002_snowdrop_mat_0.geometry}
						material={nodes.snow_drop002_snowdrop_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop_hull002_snow_drop_hull_mat_0.geometry}
						material={nodes.snow_drop_hull002_snow_drop_hull_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop003_snowdrop_mat_0.geometry}
						material={nodes.snow_drop003_snowdrop_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop_hull003_snow_drop_hull_mat_0.geometry}
						material={nodes.snow_drop_hull003_snow_drop_hull_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop004_snowdrop_mat_0.geometry}
						material={nodes.snow_drop004_snowdrop_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop_hull004_snow_drop_hull_mat_0.geometry}
						material={nodes.snow_drop_hull004_snow_drop_hull_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop005_snowdrop_mat_0.geometry}
						material={nodes.snow_drop005_snowdrop_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop_hull005_snow_drop_hull_mat_0.geometry}
						material={nodes.snow_drop_hull005_snow_drop_hull_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop006_snowdrop_mat_0.geometry}
						material={nodes.snow_drop006_snowdrop_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop_hull006_snow_drop_hull_mat_0.geometry}
						material={nodes.snow_drop_hull006_snow_drop_hull_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop007_snowdrop_mat_0.geometry}
						material={nodes.snow_drop007_snowdrop_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop008_snowdrop_mat_0.geometry}
						material={nodes.snow_drop008_snowdrop_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop_hull008_snow_drop_hull_mat_0.geometry}
						material={nodes.snow_drop_hull008_snow_drop_hull_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop009_snowdrop_mat_0.geometry}
						material={nodes.snow_drop009_snowdrop_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop_hull009_snow_drop_hull_mat_0.geometry}
						material={nodes.snow_drop_hull009_snow_drop_hull_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop011_snowdrop_mat_0.geometry}
						material={nodes.snow_drop011_snowdrop_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop_hull011_snow_drop_hull_mat_0.geometry}
						material={nodes.snow_drop_hull011_snow_drop_hull_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop012_snowdrop_mat_0.geometry}
						material={nodes.snow_drop012_snowdrop_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop_hull012_snow_drop_hull_mat_0.geometry}
						material={nodes.snow_drop_hull012_snow_drop_hull_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop013_snowdrop_mat_0.geometry}
						material={nodes.snow_drop013_snowdrop_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop_hull013_snow_drop_hull_mat_0.geometry}
						material={nodes.snow_drop_hull013_snow_drop_hull_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop015_snowdrop_mat_0.geometry}
						material={nodes.snow_drop015_snowdrop_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop_hull015_snow_drop_hull_mat_0.geometry}
						material={nodes.snow_drop_hull015_snow_drop_hull_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop016_snowdrop_mat_0.geometry}
						material={nodes.snow_drop016_snowdrop_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop_hull016_snow_drop_hull_mat_0.geometry}
						material={nodes.snow_drop_hull016_snow_drop_hull_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop017_snowdrop_mat_0.geometry}
						material={nodes.snow_drop017_snowdrop_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop_hull010_snow_drop_hull_mat_0.geometry}
						material={nodes.snow_drop_hull010_snow_drop_hull_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_drop_hull007_snow_drop_hull_mat_0.geometry}
						material={nodes.snow_drop_hull007_snow_drop_hull_mat_0.material}
					/>
					<mesh
						geometry={nodes.snow_floor001_snow_floor_hull_mat_0.geometry}
						material={materials.snow_floor_hull_mat}
					/>
					<mesh
						geometry={nodes.snow_pile001_snow_pile_hull_mat_0.geometry}
						material={materials.snow_pile_hull_mat}
					/>
					<mesh
						geometry={nodes.carrion001_carrion_hull_mat_0.geometry}
						material={materials.carrion_hull_mat}
					/>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload('/models/raven.glb');