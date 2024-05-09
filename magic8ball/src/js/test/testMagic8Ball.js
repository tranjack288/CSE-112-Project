// Test for the magic8Ball.js file

// Test imports
import { strictEqual, ok } from 'node:assert';
import { it } from './helper.js';

// Import functions to test
import { responses, getRandomResponse } from '../magic8Ball.js';

// Test getRandomResponse
it('getRandomResponse() returns a random response from the responses array', () => {
  // Make response is a string
  strictEqual(typeof getRandomResponse(), 'string');

  // Make sure its a valid response by generating 1000 responses and making sure
  // they are all in the responses array
  for (let i = 0; i < 1000; i++) {
    ok(responses.includes(getRandomResponse()));
  }
});

