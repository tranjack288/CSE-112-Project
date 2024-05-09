// Personality class for evaluating noodle personality

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

import { getJSON } from './utils.js';

/**
 * Class that represents a noodle personality. It evaluates the noodle personality
 * based on the questionnaire answer pairs. The questionnaire questions are stored
 * in the database/questionnaire.json file.
 */
class Personality {
	/**
	 * @param {array} answers Answers to the questionnaire
	 */
	constructor(answers) {
		this.answers = answers;
	}

	/**
	 * Evaluates the noodle personality based on the questionnaire answer pairs
	 */
	async evaluatePersonality() {
		this.personalitiesJSON = await getJSON(
			'./database/noodleDescriptions.json'
		);
		this.questionnaire = await getJSON('./database/questionnaire.json');

		// TODO: implement this

		const result = '';
		this._personality = result;
		this._personalityID = 0; // implement as well
		this.pDescipt =
			this.personalitiesJSON[this._personalityID]['personalityDescription']; // if this.personality is not int, readjust
	}

	/**
	 * @return {string} the noodle personality
	 */
	get personality() {
		if (this._personality === undefined) {
			evaluatePersonality();
		}
		return this._personality;
	}
}

export { Personality };
