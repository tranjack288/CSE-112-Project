// Accessibility script for text-to-speech functionalities

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

import { Speechify } from './speechify.js';

/**
 * General control of the accessibility switch
 */
async function accessibilitySwitch() {
	// Add event listener to the accessibility switch

	const accessibility = document.getElementsByName('accessibility');
	// Initialize Speechify object
	const speechify = new Speechify(null);
	const isBrowserSupported = speechify.checkBrowserSupport();
	const voices = await speechify.voices;
	speechify.voice = voices[0]; // Select the first voice (default)
	speechify.reset(); // Reset speechify. Also makes window.speechifyReady = true

	// Save accessibility state
	if (localStorage.getItem('accessibility') == null) {
		localStorage.setItem('accessibility', false);
	} else if (localStorage.getItem('accessibility') == 'true') {
		setTimeout(() => {
			accessibility[0].click();
		}, 1);
	}
}

/**
 * Inject event listeners to elements with class 'speechify' and 'speechify-onload'
 * to enable text-to-speech on mouseover and click and on page load respectively.
 * @param {Speechify} speechify The speechify object
 */
function accessElement(speechify) {
	// Enable speechify on text element with `speechify` class on mouseover and
	// click
	const readEnabled = document.getElementsByClassName('speechify');
	if (readEnabled != null) {
		for (let i = 0; i < readEnabled.length; i++) {
			readEnabled[i].addEventListener('mouseover', (_) => {
				speechify.reset();
				speechify.speechifyHighlight(readEnabled[i]);
			});

			readEnabled[i].addEventListener('click', (_) => {
				speechify.reset();
				speechify.speechifyHighlight(readEnabled[i]);
			});
		}
	}

	// Enable speechify on span elements with innerHTML
	const spans = document.querySelectorAll('span');
	if (spans != null) {
		for (let i = 0; i < spans.length; i++) {
			spans[i].addEventListener('mouseover', (_) => {
				speechify.reset();
				speechify.speechifyHighlight(spans[i]);
			});

			spans[i].addEventListener('click', (_) => {
				speechify.reset();
				speechify.speechifyHighlight(spans[i]);
			});
		}
	}

	// Enable speechify on list elements with innerHTML
	const lis = document.querySelectorAll('li');
	if (lis != null) {
		for (let i = 0; i < lis.length; i++) {
			lis[i].addEventListener('mouseover', (_) => {
				speechify.reset();
				speechify.speechifyHighlight(lis[i]);
			});

			lis[i].addEventListener('click', (_) => {
				speechify.reset();
				speechify.speechifyHighlight(lis[i]);
			});
		}
	}

	// Enable speechify on button elements
	const buttons = document.querySelectorAll('button');
	if (buttons != null) {
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('mouseover', (_) => {
				speechify.reset();
				speechify.speechifyHighlight(buttons[i]);
			});
			buttons[i].addEventListener('click', (_) => {
				speechify.reset();
				speechify.speechifyHighlight(buttons[i]);
			});
		}
	}

	// Enable speechify on links on mouseover
	const refLinks = document.querySelectorAll('a');
	if (refLinks != null) {
		for (let i = 0; i < 2; i++) {
			// Extract link innerHTML
			const linkText = refLinks[i].innerHTML;

			// Extract page name from href link if innerHTML is empty
			if (linkText == '') {
				let linkText = refLinks[i].href
					.replace(/^.*[\\\/]/, '')
					.replace(/\.[^/.]+$/, '');
				if (linkText == 'index') {
					linkText = 'main page';
				}
			}

			refLinks[i].addEventListener('mouseover', (_) => {
				speechify.reset();
				speechify.speechify(linkText);
			});
		}
	}

	// Enable speechify on images on mouseover and click
	const images = document.querySelectorAll('img');
	if (images != null) {
		for (let i = 0; i < images.length; i++) {
			images[i].addEventListener('mouseover', (_) => {
				speechify.reset();
				speechify.speechify(images[i].getAttribute('alt'));
			});

			images[i].addEventListener('click', (_) => {
				speechify.reset();
				speechify.speechify(images[i].getAttribute('alt'));
			});
		}
	}

	// Enable speechify on input elements on click
	const choices = document.querySelectorAll('input[type=radio]');
	const choicearray = Array.from(choices);
	for (let i = 0; i < choicearray.length; i++) {
		choicearray[i].addEventListener('click', (_) => {
			speechify.reset();
			speechify.speechify(choicearray[i].getAttribute('class'));
		});
	}
}

/**
 * Read the selected choice of the user on the questionaire page
 * @param {Speechify} speechify The speechify object
 */
function readOnload(speechify) {
	const elements = document.getElementsByClassName('speechify-onload');
	for (let i = 0; i < elements.length; i++) {
		speechify.reset();
		speechify.speechifyHighlight(elements[i]);
	}
}

// export
export { accessibilitySwitch };
