import { useEffect, useState } from 'react';

const ACTIONS_KEYBOARD_MAP = {
	KeyW: 'moveForward',
	KeyS: 'moveBackward',
	KeyA: 'moveLeft',
	KeyD: 'moveRight',
	Space: 'jump',
	Digit1: 'dirt',
	Digit2: 'glass',
	Digit3: 'grass',
	Digit4: 'log',
	Digit5: 'wood',
};
function useKeyboard() {
	const [actions, setActions] = useState({
		moveForward: false,
		moveBackward: false,
		moveLeft: false,
		moveRight: false,
		jump: false,
		dirt: false,
		grass: false,
		wood: false,
		glass: false,
		log: false,
	});

	useEffect(() => {
		const handleKeydown = (event) => {
			const { code } = event;
			const action = ACTIONS_KEYBOARD_MAP[code];
			if (action) {
				setActions((prevActions) => ({
					...prevActions,
					[action]: true,
				}));
			}
    };

    const handleKeyUp = (event) => {
			const { code } = event;
			const action = ACTIONS_KEYBOARD_MAP[code];
			if (action) {
				setActions((prevActions) => ({
					...prevActions,
					[action]: false,
				}));
			}
		};

		document.addEventListener('keydown', handleKeydown);
		document.addEventListener('keyup', handleKeyUp);

		return () => {
			document.removeEventListener('keydown', handleKeydown);
			document.removeEventListener('keydup', handleKeyUp);
		};
	}, []);

	return actions;
}

export default useKeyboard;
