import noodles from "./database/noodleDescriptions.json" assert {type: "json"}

const QUESTIONS = 7;

const currentScore = [0, 0, 0, 0, 0, 0, 0];

//  function set budget,time,meat,spicy,difficulty,customizable,origin
/**
 *
 * @param {Int} number to set the corresping scores item to
 */
function setBudget(number) {
	currentScore[0] = number;
}
/**
 *
 * @param {Int} number to set the corresping scores item to
 */
function setTime(number) {
	currentScore[1] = number;
}
/**
 *
 * @param {Int} number to set the corresping scores item to
 */
function setMeat(number) {
	currentScore[2] = number;
}
/**
 *
 * @param {Int} number to set the corresping scores item to
 */
function setSpice(number) {
	currentScore[3] = number;
}
/**
 *
 * @param {Int} number to set the corresping scores item to
 */
function setDifficulty(number) {
	currentScore[4] = number;
}
/**
 *
 * @param {Int} number to set the corresping scores item to
 */
function setCustomizable(number) {
	currentScore[5] = number;
}
/**
 *
 * @param {Int} number to set the corresping scores item to
 */
function setOrigin(number) {
	currentScore[6] = number;
}

/**
 * this just calculates the overall difference between 2 lists of categories
 * @return {Int} aggregated number of differences
 * @param {Array} cat1 list of categories
 * @param {Array} cat2 list of categories
 */
function noodleDIFF(cat1, cat2) {
	let diff = 0;
	for (let i = 0; i < QUESTIONS; i++) {
		diff += Math.abs(cat1[i] - cat2[i]);
	}
	return diff;
}
/**
 * returns the 4 best matching noodles based on the user's current score.
 * @return {Array} array of four Noodle JSON objects
 */
function closestNoodleMatch() {
	const itemsToMatch = 4;
	const allNoodles = [];
	

	noodles.forEach((element) => {
		const diff = noodleDIFF(currentScore, element.categories);
		allNoodles.push([element.noodleID, diff]);
	});

	allNoodles.sort((a, b) => a[1] - b[1]);

	const smallestItems = allNoodles.slice(0, itemsToMatch);
	const smallestItemsJSON = [];

	smallestItems.forEach((pair) => {
		noodles.forEach((noodleOBJ) => {
			if (noodleOBJ.noodleID === pair[0]) {
				smallestItemsJSON.push(noodleOBJ);
			}
		});
	});

	return smallestItemsJSON;
};

export { currentScore,
	setBudget,
	setDifficulty,
	setMeat,
	setSpice,
	setTime,
	setCustomizable,
	setOrigin,
	noodleDIFF,
	closestNoodleMatch
};
