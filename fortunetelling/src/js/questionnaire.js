// questionnaire.html onload module script

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

// upon loading, call updatenoodle, passing in the noodleIndex from local storage
document.addEventListener('DOMContentLoaded', init);
const QUESTIONS = 10; // Questionnaire Length

/** On load function */
function init() {
	resetQuestionnare();
	questionsHandler();
	gradeQuiz();

	// Set an event listener for #reset button to make the first question reappear
	// and uncheck the all radio buttons from all questions.
	const resetButton = document.querySelector('#reset');
	resetButton.addEventListener('click', function () {
		resetQuestionnare();
	});
}

/**
 * Reset the questionnaire view
 */
function resetQuestionnare() {
	// Hide all questions except the first one.
	const questions = document.querySelectorAll('.question');

	questions[0].style.display = 'block';
	questions[0].classList.add('fade-in');
	questions[0].classList.remove('fade-out');

	// Set the first question number to 1
	questions[0].style.setProperty('--question-percent', "'0%'");

	for (let i = 1; i < questions.length; i++) {
		questions[i].style.display = 'none';

		// Remove fade-in and fade-out classes
		questions[i].classList.remove('fade-in');
		questions[i].classList.remove('fade-out');
	}

	// Uncheck all radio buttons
	const answers = document.getElementsByName('qRadio');

	for (let i = 0; i < answers.length; i++) {
		answers[i].checked = false;
	}

	// Reset progress bar
	const progressBar = document.querySelector('#progressBar');
	progressBar.style.display = 'block';

	const progress = document.querySelector('#barStatus');
	progress.style.width = '0%';

	// Hide submit button
	const submitButton = document.querySelector('#submit');
	submitButton.style.display = 'none';
}

/**
 * Fade-in Fade-out animation for the questions and update the progress bar
 */
function questionsHandler() {
	// Set an event listener for each .question to fade out and remove from display, and fade in the next adjacent question.
	const questions = document.querySelectorAll('.question');

	for (let i = 0; i < questions.length; i++) {
		const question = questions[i];
		const inputs = question.querySelectorAll('input');

		for (let j = 0; j < inputs.length; j++) {
			const input = inputs[j];

			input.addEventListener('click', function () {
				question.classList.add('fade-out');
				question.style.display = 'none';

				// Incrementally update progress bar for the questionnaire after each question is answered with animation.
				const progress = document.querySelector('#barStatus');
				const progressWidth = progress.style.width;
				let progressWidthNum = parseInt(
					progressWidth.substring(0, progressWidth.length - 1)
				);
				const newWidth = progressWidthNum + 10;

				const id = setInterval(function () {
					if (progressWidthNum >= newWidth) {
						clearInterval(id);
					} else {
						// Increase the speed of the progress bar like a car accelerating
						progressWidthNum += 0.5;
						progress.style.width = progressWidthNum + '%';
					}
				}, 10);

				if (question.nextElementSibling) {
					question.nextElementSibling.classList.add('fade-in');
					question.nextElementSibling.style.display = 'block';

					question.nextElementSibling.style.setProperty(
						'--question-percent',
						"'" + newWidth + "%'"
					);

					setTimeout(function () {
						question.nextElementSibling.classList.remove('fade-in');
					}, 1000);
				}
			});
		}
	}

	// Show submit button and hide progress bar when the last question is answered.
	const submitButton = document.querySelector('#submit');
	const progress = document.querySelector('#progressBar');
	const lastQuestion = questions[questions.length - 1];
	const lastInputs = lastQuestion.querySelectorAll('input');

	for (let i = 0; i < lastInputs.length; i++) {
		const lastInput = lastInputs[i];

		lastInput.addEventListener('click', function () {
			submitButton.style.display = 'initial';
			progress.style.display = 'none';
		});
	}
}

/**
 * Grades the quiz and returns the closest personality.
 */
function gradeQuiz() {
	const submitButton = document.querySelector('#submit');

	submitButton.addEventListener('click', function () {
		const link = document.querySelector('#next');
		const answers = document.getElementsByName('qRadio');
		let answerCnt = 0;
		let pnts = 0;

		// Go through each question and tally up the points.
		for (let i = 0; i < answers.length; i++) {
			if (answers[i].checked) {
				const response = answers[i].className;

				if (response == 'negative') {
					pnts += 1;
					answerCnt++;
				} else if (response == 'slightlyNegative') {
					pnts += 2;
					answerCnt++;
				} else if (response == 'neutral') {
					pnts += 3;
					answerCnt++;
				} else if (response == 'slightlyPositive') {
					pnts += 4;
					answerCnt++;
				} else if (response == 'positive') {
					pnts += 5;
					answerCnt++;
				}
			}
		}

		// Makes sure the user has answered all the questions.
		if (answerCnt != QUESTIONS) {
			alert('You have not answered all the questions.');
		} else {
			const hash = pnts % 12;
			localStorage.setItem('myNoodleIndex', hash);
			link.setAttribute('href', './noodlesResults.html');
		}
	});
}
