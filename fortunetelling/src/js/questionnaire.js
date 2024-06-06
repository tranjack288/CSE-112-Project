// questionnaire.html onload module script

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

// import the scoretracker to be able to keep a running score and calculate noodle similarity at the end

// upon loading, call updatenoodle, passing in the noodleIndex from local storage
import { currentScore,setBudget,setMeat,setDifficulty,setOrigin,setSpice,setCustomizable,setTime,
	closestNoodleMatch,noodleDIFF
 } from './scoretracker.js';


document.addEventListener('DOMContentLoaded', init);
const QUESTIONS = 7; // Questionnaire Length

/** On load function */
function init() {
	resetQuestionnare(false);
	questionsHandler();
	gradeQuiz();

	// Set an event listener for #reset button to make the first question reappear
	// and uncheck the all radio buttons from all questions.
	const resetButton = document.querySelector('#reset');
	resetButton.addEventListener('click', function () {
		resetQuestionnare(true);
	});

}

/**
 * Load user answers
 */
function loadAnwsers(){	
	let surveyAnswers = localStorage.getItem('surveyAnswers');
	surveyAnswers = JSON.parse(surveyAnswers);
	let questions = document.querySelectorAll('.question');

	for (let i=0; i < questions.length; i++) {
		let selectedValue = Number(surveyAnswers[i]);
		let selectedOption = questions[i].querySelector(`input[value="${selectedValue}"]`);
		selectedOption.checked = true;
	}	
}

/**
 * Reset the questionnaire view
 * @param {Boolean} manualReset 
 */
function resetQuestionnare(manualReset) {
	if(manualReset){
		if(!window.confirm('Do you wish to reset all your answers?')){
			return;
		}
	}

	// Hide all questions except the first one.
	const questions = document.querySelectorAll('.question');
	const progress = document.querySelector('#barStatus');
	const percent = document.querySelector('#progressPercent');

	questions[0].style.display = 'block';
	questions[0].classList.add('fade-in');
	questions[0].classList.remove('fade-out');
	percent.style.display = 'block';
	percent.textContent = "0%";
	let sourceWidth = window.getComputedStyle(questions[0]).width;
	//progressBar.style.width = sourceWidth;
	percent.style.width = sourceWidth;

	// Set the first question number to 1
	questions[0].style.setProperty('--question-percent', "'0%'");

	for (let i = 1; i < questions.length; i++) {
		questions[i].style.display = 'none';

		// Remove fade-in and fade-out classes
		questions[i].classList.remove('fade-in');
		questions[i].classList.remove('fade-out');
	}

	if (localStorage.getItem('surveyAnswers') !== null 
		&& manualReset == false) {
		loadAnwsers();
	}
	else{
		// Uncheck all radio buttons
		const answers = document.querySelectorAll('input[type="radio"]');
		for (let i = 0; i < answers.length; i++) {
			if(answers[i].checked){
				answers[i].checked = false;
			}
		}	
		localStorage.removeItem('surveyAnswers');
	}

	// Reset Submit button
	const submitButton = document.querySelector('#submit');
	submitButton.disabled = true;
	submitButton.classList.add('disabledBtn');

	// Reset progress bar
	//progressBar.style.display = 'block';
	progress.style.width = '0%';

	// Hide submit button
	// const submitButton = document.querySelector('#submit');
	// submitButton.style.display = 'none';

	for (let k = 0; k < questions.length; k++) {
		if(questions[k].style.display != 'none'){
			sourceWidth = window.getComputedStyle(questions[k]).width;
			//progressBar.style.width = sourceWidth;
			percent.style.width = sourceWidth;
		}
	}
}

/**
 * Fade-in Fade-out animation for the questions and update the progress bar
 */
function questionsHandler() {
	
	// Set an event listener for each .question to fade out and remove from display, and fade in the next adjacent question.
	const questions = document.querySelectorAll('.question');
	const progressBar = document.querySelector('#progressBar');
	const percent = document.querySelector('#progressPercent');

	// Progress percentage of each question
	const progressPercentArr = [0,14,28,42,56,70,84,100];
	let currentQuestion = questions[0];

	for (let i = 0; i < questions.length; i++) {
		const question = questions[i];
		const inputs = question.querySelectorAll('input');
		question.setAttribute('data-width', progressPercentArr[i]);

		for (let j = 0; j < inputs.length; j++) {
			const input = inputs[j];


			// Option Click event listener
			input.addEventListener('click', function () {			
				//all formNames end with the question number so we just grab that as a parameter for trackscore
				let formName =  input.parentElement.parentElement.parentElement.parentElement.id; 
				let formNumber = parseInt(formName[formName.length - 1]) - 1; 
				//which radio button the user selected for that question
				let buttonIndex = input.value;
				// trigger the function to increment scorecount in the other file (trackscore)
				trackScore(formNumber,buttonIndex);



				// Incrementally update progress bar for the questionnaire after each question is answered with animation.
				const progress = document.querySelector('#barStatus');
				// The current width of the progress bar
				let progressWidthNum = progressPercentArr[i];
				// The width of the progress bar that will be grow into
				const newWidth = progressPercentArr[i+1];

				// Animate the growth animation of the progress bar status
				const grow = setInterval(function () {
					if (progressWidthNum >= newWidth) {
						clearInterval(grow);
					} else {
						// Increase the speed of the progress bar like a car accelerating
						progressWidthNum += 0.5;
						// Increase the progress
						progress.style.width = progressWidthNum + '%';
					}
				}, 10);
				percent.textContent = newWidth + "%";

				// Update progress bar width when view port size changes
				for (let k = 0; k < questions.length; k++) {
					if(questions[k].style.display != 'none'){
						let sourceWidth = window.getComputedStyle(questions[k]).width;
						progressBar.style.width = sourceWidth;
						percent.style.width = sourceWidth;
					}
				}

				if(i === 6){
					return;
				}
				// Question switch, Fade-in / Fade-out
				question.classList.remove('fade-in');
				question.classList.add('fade-out');
				question.style.display = 'none';

				if (question.nextElementSibling) {
					question.nextElementSibling.classList.remove('fade-out');
					question.nextElementSibling.classList.add('fade-in');
					question.nextElementSibling.style.display = 'block';

					// update current question to be the currently visible question
					currentQuestion = question.nextElementSibling;					
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
			submitButton.disabled = false;
			submitButton.classList.remove('disabledBtn');
			// progress.style.display = 'none';
			// percent.style.display = 'none';
		});
	}


	// Back button
	const backButton = document.querySelector('#back-button');
	backButton.addEventListener('click', () => {
		// The current width of the progress bar
		let progressWidthNum = currentQuestion.getAttribute('data-width');		
		// The width of the progress bar that will be grow into
		let newWidth = currentQuestion.previousElementSibling.getAttribute('data-width');

		progress.style.display = 'block';
		percent.style.display = 'block';

		if (currentQuestion.previousElementSibling.classList.contains('question')) {
			if(currentQuestion.classList.contains('question')){
				currentQuestion.classList.remove('fade-in');
				currentQuestion.classList.add('fade-out');
				currentQuestion.style.display = 'none';	
			}
			
			currentQuestion.previousElementSibling.classList.remove('fade-out');
			currentQuestion.previousElementSibling.classList.add('fade-in');
			currentQuestion.previousElementSibling.style.display = 'block';


			// adjust progress bar and percentage display width
			let sourceWidth = window.getComputedStyle(currentQuestion.previousElementSibling).width;			
			progressBar.style.width = sourceWidth;
			percent.style.width = sourceWidth;

			console.log(progressWidthNum);
			console.log(newWidth);

			// Update progress bar status
			//document.getElementById('barStatus').style.width = newWidth + '%';
			percent.textContent = newWidth + '%';
			const shrink = setInterval(() => {
				if (progressWidthNum <= newWidth) {
					clearInterval(shrink);
				} else {
					progressWidthNum -= 0.5;
					document.getElementById('barStatus').style.width = progressWidthNum + '%';
				}
			}, 10);
		}
		currentQuestion = currentQuestion.previousElementSibling;
	});
}
/**
 * Keeps a running tally of a user's preferences to match them to a noodle at the end. activates after a radio button is clicked.
 * @param {Int} questionID
 * @param {Number} valuePicked
 * @return {null}
 */
function trackScore(questionID, valuePicked) {
	switch (questionID) {
		case 0:
			setBudget(valuePicked);
			break;
		case 1:
			setTime(valuePicked);
			break;
		case 2:
			setMeat(valuePicked);
			break;
		case 3:
			setSpice(valuePicked);
			break;
		case 4:
			setDifficulty(valuePicked);
			break;
		case 5:
			setCustomizable(valuePicked);
			break;
		case 6:
			setOrigin(valuePicked);
			break;
		default:
			return 'Invalid choice';
			break;
	}
}
/**
 * Grades the quiz and returns the closest personality.
 */
function gradeQuiz() {
	const submitButton = document.querySelector('#submit');

	submitButton.addEventListener('click', function () {
		const link = document.querySelector('#next');
		let answered = true;

		// Makes sure the user has answered all the questions.
		for (let i = 0; i < currentScore.length; i++){
			if (currentScore[i] === 0) {
				console.log(currentScore[i]);
				answered = false;
			}
		}
		if (answered === false) {
			alert('You have not answered all the questions.');
		} else {
			localStorage.setItem('surveyAnswers', JSON.stringify(currentScore));
			const surveyResults = closestNoodleMatch();
		
			localStorage.setItem('surveyResults',  JSON.stringify(surveyResults)); //we may use localstorage for currentscore later depending on architecture
			
			link.setAttribute('href', './noodleOptions.html'); 
		}
	});
}
