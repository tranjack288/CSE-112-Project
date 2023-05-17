// use this to generate a random day on the database to start at
const randomKey = 98370474095984;
const numHoroscopeDays = 660;
const startingPoint = randomKey % numHoroscopeDays;

// 1. Get the days from start
const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth();
const currentDay = date.getDate();
const currentDate = new Date(currentYear, currentMonth, currentDay);
const startingDate = new Date(2023, 4, 8);
const daysFromStart = Math.floor(
	(currentDate - startingDate) / (1000 * 60 * 60 * 24)
);

// access the json file in the database folder
const fs = require('fs');
const { get } = require('http');

/* Function that gets the day's horoscope for a specific sign
/ @param horoscope_sign_as_number: the number of the sign (1-12)
/ @return: the horoscope for the day as a string
*/
const getHoroscope = function (horoscopeSignAsNumber) {
	const horoscopeJson = require('./database/horoscope_db.json');
	const horoscopeIndex = (startingPoint + daysFromStart) % numHoroscopeDays;
	return horoscopeJson[
		horoscopeIndex + (horoscopeSignAsNumber - 1) * numHoroscopeDays
	]['description'];
};

// test the function for all numbers 1-12
for (let i = 1; i <= 12; i++) {
	console.log('Sign: ' + i + '\n');
	console.log(getHoroscope(i));
	console.log('\n');
}