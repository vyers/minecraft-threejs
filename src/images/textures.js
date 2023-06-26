import { NearestFilter, RepeatWrapping, TextureLoader } from 'three';
import { dirtImg, glassImg, grassImg, logImg, woodImg } from './images';

const groundTexture = new TextureLoader().load(grassImg);
const grassTexture = new TextureLoader().load(grassImg);
const dirtTexture = new TextureLoader().load(dirtImg);
const logTexture = new TextureLoader().load(logImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);

const textures = [
	grassTexture,
	groundTexture,
	dirtTexture,
	logTexture,
	glassTexture,
	woodTexture,
];

textures.forEach((texture) => {
	texture.wrapS = RepeatWrapping;
	texture.wrapT = RepeatWrapping;
	texture.magFilter = NearestFilter;
});

export { dirtTexture, glassTexture, groundTexture, logTexture, woodTexture, grassTexture };
