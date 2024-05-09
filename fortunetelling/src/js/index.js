// index.html preload script

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

window.addEventListener('DOMContentLoaded', init);

/** On load function */
async function init() {
	const fortuneLink = document.getElementById('fortuneLink');
	const fortuneButton = document.getElementById('fortuneButton');
	const toQuestions = document.getElementById('toQuestions');
	if (localStorage.getItem('myNoodleIndex') === null) {
		toQuestions.style.animation = 'pulse 2s infinite';
		fortuneLink.href = '#0';
		fortuneLink.addEventListener('click', function () {
			// activate animation for toQuestions button
			fortuneLink.textContent = 'You must do the Quiz First!';
			fortuneLink.style.textDecoration = 'none';
			fortuneLink.style.fontWeight = 'bold';
			fortuneLink.style.color = '#da0b0b';
		});
	} else {
		fortuneButton.style.animation = 'pulse 2s infinite';
	}
}
