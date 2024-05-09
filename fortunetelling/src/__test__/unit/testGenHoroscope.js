import { strictEqual, ok } from 'node:assert';
import { it } from './helper.js';

// Import functions to test
import { getHoroscope } from '../../js/genHoroscope.js';
import { getJSON } from '../../js/utils.js';

const horoscopeJSON = await getJSON('./database/horoscopeDb.json');

// Test getHoroscope
it('getHoroscope() returns a random horoscope from the horoscopes database', async () => {
	// Get all horoscope descriptions
	const horoscopeDescriptions = horoscopeJSON.map(
		(horoscope) => horoscope.description
	);

	for (let i = 1; i <= 12; i++) {
		const horoscope = await getHoroscope(i);
		// Make sure its a valid horoscope by making sure its in the horoscope descriptions array
		ok(horoscopeDescriptions.includes(horoscope));
	}
});

it('getHoroscope() returns a string', async () => {
	for (let i = 1; i <= 12; i++) {
		const horoscope = await getHoroscope(i);
		strictEqual(typeof horoscope, 'string');
	}
});
