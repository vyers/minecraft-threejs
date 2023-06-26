/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import useKeyboard from '../hooks/useKeyboard';
import { useStore } from '../hooks/useStore';
import * as images from '../images/images';

function TextureSelect() {
	const [visible, setVisible] = useState(true);
	const [texture, setTexture] = useStore((state) => [
		state.texture,
		state.setTexture,
	]);

	const { dirt, glass, grass, log, wood } = useKeyboard();

	useEffect(() => {
		const visibilityTimeout = setTimeout(() => {
			setVisible(false);
		}, 700);
		setVisible(true);

		return () => {
			clearTimeout(visibilityTimeout);
		};
	}, [texture]);

	useEffect(() => {
		const options = {
			dirt,
			glass,
			grass,
			log,
			wood,
		};

		const selectedTexture = Object.entries(options).find(
			([texture, isEnabled]) => isEnabled
		);

		if (selectedTexture) {
			const [textureName] = selectedTexture;
			setTexture(textureName);
		}
	}, [dirt, grass, glass, wood, log]);

	return (
		<div className="texture-selector">
			{Object.entries(images).map(([imgKey, img]) => {
				return (
					<img
						className={
							texture === imgKey.replace('Img', '')
								? 'selected'
								: ''
						}
						key={imgKey}
						src={img}
						alt={imgKey}
					/>
				);
			})}
		</div>
	);
}
export default TextureSelect;
