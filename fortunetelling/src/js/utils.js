// Utility functions module

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

// import { readFile } from 'fs/promises';

/**
 * Returns a random int value between min and max
 * @param {int} min Minimum int value (inclusive)
 * @param {int} max Maximum int value (exclusive)
 * @return {int} Random int value between min and max
 */
export function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Returns JSON object from url. Used for testing.
 * @param {string} url path to JSON file
 * @return {json} JSON object in url
 */
export async function getJSON(url) {
	const { default: json } = await import(url, { assert: { type: 'json' } });

	// ALTERNATIVE: Do not use this function under main.js. Use import instead
	// const json = JSON.parse(await readFile(new URL(url, import.meta.url)));
	return json;
}

/**
 * Returns if localStorage is available
 * @return {boolean} true if localStorage is available, false otherwise
 */
export function islocalStorageAvailable() {
	try {
		const x = '__storage_test__';
		window.localStorage.setItem(x, x);
		window.localStorage.removeItem(x);
		return true;
	} catch (e) {
		return false;
	}
}

/**
 * @param {string} key The name to use to get the value under in localStorage
 * @return {string} The value of the key in localStorage
 */
export function getLocalStorage(key) {
	if (islocalStorageAvailable()) {
		return window.localStorage.getItem(key);
	}
}

/**
 * @param {string} key The name to use to store the value under in localStorage
 * @param {any} value The value to set in localStorage
 */
export function setLocalStorage(key, value) {
	if (islocalStorageAvailable()) {
		window.localStorage.setItem(key, value);
	}
}

/**
 * @param {string} key The key to use to remove the value under in localStorage
 */
export function removeLocalStorage(key) {
	if (islocalStorageAvailable()) {
		window.localStorage.removeItem(key);
	}
}
