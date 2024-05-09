/* Commented  because it hasn't been implemented fully yet
  Deprecated because Darren implemented this differently

import { ok } from 'node:assert';
import { it } from './helper.js';

// Import functions to test
import { Personality } from '../../js/personality.js';
import { getJSON } from '../../js/utils.js';

import * as jStat from 'jstat';

const personalityJSON = await getJSON('./database/noodleDescriptions.json');

//Test Personality

const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

it('getPersonality() returns a valid personality from the noodle database', async () => {
	// Get all personality descriptions
	const personalityDescriptions = personalityJSON.map(
		(noodle) => noodle.personalityDescription
	);

	for (let i = 1; i <= 10; i++) {
    const randomAnswer = randomIntArrayInRange(1,5,7);
		const noodle = await Personality(randomAnswer);
		// Make sure its a valid personality by making sure its in the noodle descriptions array
		ok(personalityDescriptions.includes(noodle.personality()));
	}
});

it('generated personalities should follow uniform distribution', async () => {
	// Create a map from description to id(perferred personality class 
    // could store the whole personality than only descriptions)
	const data = Object.values(personalityJSON);
    const map = new Map();
    data.forEach((item) => {
        const description = item.personalityDescription;
        const id = item.noodleID;
        map.set(description, id);
      });
      
    const observed = Array(12).fill(0);
    const expected = Array(12).fill(10);
    
	for (let i = 0; i < 120; i++) {
        const randomAnswer = randomIntArrayInRange(1,5,7);
		const noodle = await Personality(randomAnswer);
        observed[map.get(noodle.personality()) - 1] += 1;
	}

    // Conduct a goodness-of-fit test with 0.95 confidence

    const chiSquare = jStat.chisquare.goodnessOfFit(observed, expected);

    const pValue = 1 - jStat.chisquare.cdf(chiSquare, observed.length - 1);

    ok(pValue > 0.05);
});
*/
