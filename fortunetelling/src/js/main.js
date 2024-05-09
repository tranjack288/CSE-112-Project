// WARNING: Main script that applies to all pages

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

import { transition } from './transition.js';

window.addEventListener('DOMContentLoaded', init);
/** On load function */
async function init() {
	// Transform the code above into vanilla JavaScript
	const toggle = document.querySelector('#toggle');
	const items = document.querySelectorAll('.item');

	toggle.addEventListener('click', function () {
		items.forEach((item) => item.classList.toggle('active'));
	});

	// Dynamic transparent navbar
	const nav = document.getElementById('navbar');
	if (document.body.scrollTop >= 200) {
		nav.classList.add('nav-colored');
		nav.classList.remove('nav-transparent');
	} else {
		nav.classList.add('nav-transparent');
		nav.classList.remove('nav-colored');
	}

	// Activate page transition
	transition();
}
