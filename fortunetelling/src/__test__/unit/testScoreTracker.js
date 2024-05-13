// These are the unit tests for the scoretracker.js file
// Test imports
import { strictEqual, ok } from 'node:assert';
import { it } from './helper.js';

// Import functions to test
import { setBudget,
	setDifficulty,
	setMeat,
	setSpice,
	setTime,
	setCustomizable,
	setOrigin,
	closestNoodleMatch,
    noodleDIFF,
    currentScore} from '../../js/scoretracker.js';

//Test noodleDIFF

it('NoodleDiff should return the absolute value of the difference between two integer lists of n length', ()=>{
    const sample1 = [4,5,1,8,3,2,10]
    const sample2 = [7,7,1,1,10,10,2]
    const result = noodleDIFF(sample1,sample2);
    strictEqual(result,35) 
})

//Test closetNoodleMatch
it('Closest Noodle match should return the 4 closest matching noddle objects based ', ()=>{
    let currentScore = [6,7,1,1,2,9,5];
    let expected = ['Spaghetti and Meatballs','Ravioli','Taiwanese Beef Noodle Soup','Chicken Noodle Soup'];
    const cnm = closestNoodleMatch();

    for (let i = 0; i < currentScore.length; i++){
        strictEqual(cnm[0].noodleName,expected[0]);
    }

})