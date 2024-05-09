// noodlesResults.html onload module script

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

window.addEventListener('DOMContentLoaded', init);

import { getHoroscope, getNoodleData } from './genHoroscope.js';

const smokeAnimationTime = 1840;
const imageAnimationTime = 2900;
const timeBeforeSmoke = 2000;
const smokePeakCoverTime = 700;
const totalImageCycles = 2;
const imageExponentialPlier = 1.1;

/**
 * On load function,
 * use localStorage to get the quiz result and display the corresponding noodle
 */
async function init() {
	const noodleDescription = document.getElementById('noodleDescription');
	const quizResult = document.getElementById('quizResult');
	const smoke = document.getElementById('smokeImage');
	noodleDescription.style.opacity = 0;
	quizResult.textContent = 'Your personality type is being calculated...';
	smoke.style.display = 'none';

	spinNoodleWheel();

	setTimeout(() => {
		doSmokeEffect();
	}, timeBeforeSmoke);

	setTimeout(() => {
		noodleDescription.style.opacity = 1;
		quizResult.style.opacity = 1;
		setDescriptionAndResult();
	}, timeBeforeSmoke + smokePeakCoverTime);

	setTimeout(() => {
		setImageCorrectly();
	}, imageAnimationTime + 500);

	bindButtons();
}

/**
 * Set the noodle image to the corresponding image of the user's quiz result
 */
async function setImageCorrectly() {
	const image = document.getElementById('noodleImg');
	const noodleData = await getNoodleData();
	const noodleIndex = localStorage.getItem('myNoodleIndex');
	image.setAttribute('src', noodleData[noodleIndex]['path']);
	image.setAttribute('alt', noodleData[noodleIndex]['noodleName']);
}

/**
 * Set the noodle description and quiz result to the corresponding text of the user's quiz result
 */
async function setDescriptionAndResult() {
	const noodleDescription = document.getElementById('noodleDescription');
	const quizResult = document.getElementById('quizResult');
	let noodleId = localStorage.getItem('myNoodleIndex');

	// convert noodleId to int
	noodleId = parseInt(noodleId);
	const noodleData = await getNoodleData();
	noodleDescription.textContent =
		noodleData[noodleId]['personalityDescription'];
	quizResult.textContent = `Congratulations, your personality type is ${noodleData[noodleId]['noodleName']}!`;
}

/**
 * Animates the image to shuffle through all noodle images
 */
async function spinNoodleWheel() {
	const noodleData = await getNoodleData();
	const spinsAround = totalImageCycles;

	// exponential function
	const b = imageExponentialPlier;
	const a = imageAnimationTime / Math.pow(b, spinsAround * 12);

	const image = document.getElementById('noodleImg');
	for (let i = 0; i < spinsAround * 12; i++) {
		setTimeout(() => {
			image.setAttribute('src', noodleData[i % 12]['path']);
		}, a * Math.pow(b, i));
	}
}

/**
 * Animates the smoke image exactly once
 */
function doSmokeEffect() {
	const smoke = document.getElementById('smokeImage');
	setTimeout(() => {
		smoke.style.display = 'none';
	}, smokeAnimationTime);
	// img.src = img.src + "?";
	smoke.style.display = 'block';
}
