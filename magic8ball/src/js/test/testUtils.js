// Test for the main.js file

// Test imports
import { strictEqual, ok } from 'node:assert';
import { it } from './helper.js';

// Import functions to test
import { getRandomInt } from '../utils.js';

// Test getRandomInt
it('getRandomInt Should return random integer between min (inclusive) and max (exclusive)', () => {
  // Test min inclusivity and max exclusivity
  strictEqual(getRandomInt(0, 0), 0);
  strictEqual(getRandomInt(0, 1), 0);

  // Test that getRandomInt returns an int between 0 (inclusive) and 10 (exclusive)
  for (let i = 0; i < 1000; i++) {
    const randomInt = getRandomInt(0, 10);
    ok(randomInt >= 0 && randomInt < 10)
  }
});

