// Settings script for settings UI functions

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

import { accessibilitySwitch } from './accessibility.js';
import { bgMusicController } from './bgMusic.js';

window.addEventListener('DOMContentLoaded', init);

/** On load function */
async function init() {
	// Activate accessibility switch
	accessibilitySwitch();
	// Activate bg music switch
	bgMusicController();
}
