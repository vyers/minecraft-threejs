/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useBox } from '@react-three/cannon';
import { useState } from 'react';
import { useStore } from '../hooks/useStore';
import * as textures from '../images/textures';

function Cube({ id, position, texture }) {
	const [isHovered, setIsHovered] = useState();
	const [ref] = useBox(() => ({
		type: 'Static',
		position,
	}));

	const [removeCube] = useStore((state) => [state.removeCube]);

	const activeTexture = textures[texture + 'Texture'];

	return (
		<mesh
			onPointerMove={(e) => {
				e.stopPropagation();
				setIsHovered(true);
			}}
			onPointerOut={(e) => {
				e.stopPropagation();
				setIsHovered(false);
			}}
			ref={ref}
			onClick={(e) => {
				e.stopPropagation();
				if (e.altKey) {
					removeCube(id);
				}
			}}>
			<boxBufferGeometry attach="geometry" />
			<meshStandardMaterial
				color={isHovered ? 'grey' : 'white'}
				transparent
				map={activeTexture}
				attach="material"
			/>
		</mesh>
	);
}
export default Cube;
