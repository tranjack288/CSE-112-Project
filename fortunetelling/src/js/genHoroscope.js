// Functions for generating horoscopes and getting data from noodle databases

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

import { getJSON } from './utils.js';

// Use this to generate a random day on the database to start at
const randomKey = 98370474095984;
const numHoroscopeDays = 660;
const startingPoint = randomKey % numHoroscopeDays;

/**
 * Function that gets the day's horoscope for a specific sign
 * @param {int} horoscopeSignAsNumber the number of the sign (1-12)
 * @return {string} the horoscope for the day as a string
 */
const getHoroscope = async function (horoscopeSignAsNumber) {
	const daysFromStart = _getDaysFromStart();
	const horoscopeJson = await getJSON('./database/horoscopeDb.json');
	const horoscopeIndex = (startingPoint + daysFromStart) % numHoroscopeDays;
	return horoscopeJson[
		horoscopeIndex + (horoscopeSignAsNumber - 1) * numHoroscopeDays
	]['description'];
};

/**
 * Function that get noodle description for a specific sign
 * @param {int} horoscopeSignAsNumber the number of the sign (1-12)
 * @return {string} the noodle description for the sign
 */
const getDescription = async function (horoscopeSignAsNumber) {
	const noodleDescription = await getJSON('./database/noodleDescriptions.json');
	return noodleDescription[horoscopeSignAsNumber - 1]['personalityDescription'];
};

/**
 * Function that gets all noodle descriptions
 * @return {obj} the noodle descriptions for all signs as an object
 */
const getNoodleData = async function () {
	return await getJSON('./database/noodleDescriptions.json');
};

// -------- Helper Functions ------

// Get the days from start
const _getDaysFromStart = function () {
	// alert("getDaysFromStart")
	const date = new Date();
	const currentYear = date.getFullYear();
	const currentMonth = date.getMonth();
	const currentDay = date.getDate();
	const currentDate = new Date(currentYear, currentMonth, currentDay);
	const startingDate = new Date(2023, 4, 8);
	const daysFromStart = Math.floor(
		(currentDate - startingDate) / (1000 * 60 * 60 * 24)
	);
	return daysFromStart;
};

export { getHoroscope, getDescription, getNoodleData };
