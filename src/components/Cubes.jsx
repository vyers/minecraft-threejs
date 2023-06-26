import { useStore } from '../hooks/useStore';
import Cube from './Cube';

function Cubes() {
	const [cubes] = useStore((state) => [state.cubes]);
	console.log(cubes);
	return cubes.map(({ id, pos, texture }) => {
		return (
			<Cube
				key={id}
				id={id}
				position={pos}
				texture={texture}
			/>
		);
	});
}
export default Cubes;
