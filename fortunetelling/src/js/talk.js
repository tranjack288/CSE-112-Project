/**
 * This script provides an interactive story-telling or conversation experience
 * on a website with a noodle shop theme. It triggers upon DOM content load and
 * handles user interaction through button clicks, displaying messages,
 * animating elements, and changing event listeners dynamically.
 */

document.addEventListener('DOMContentLoaded', function () {
	const noodlesContainer = document.querySelector('.noodles-container');
	const userInputButton = document.getElementById('user-input-button');
	const messageOutput = document.getElementById('message-output');
	// const toQuestions = document.getElementById('toQuestions');
	// const fortuneButton = document.getElementById('fortuneButton');
	// const flavorProfile = document.getElementById('flavorProf');
	let isFirstClick = true;

	noodlesContainer.addEventListener('click', ()=>{
		noodlesContainer.classList.add('bouncing');
		noodlesContainer.addEventListener("animationend", () => {
            noodlesContainer.classList.remove("bouncing");
        }, { once: true }); // Use { once: true } to ensure the event listener is removed after it runs once
	});
	
	userInputButton.addEventListener('click', startConversation);

	/**
	 * Handles the first user interaction.
	 * Animates the noodle on first click and displays a message.
	 */
	function startConversation() {
		if (isFirstClick) {
			// animateNoodle();
			isFirstClick = false;
		}

		updateMessageWithAnimation(
			'Don\'t know what noodle to cook today? I got you covered!'
		);
		showButton('Huh?');
		userInputButton.removeEventListener('click', startConversation);
		userInputButton.addEventListener('click', nextStep1);
	}

	/**
	 * Adds a CSS class to animate the noodle.
	 */
	// function animateNoodle() {
	// 	noodlesContainer.classList.add('fly-to-center');
	// }

	/**
	 * Handles the second stage of the interaction.
	 * Displays a message and prepares for the next user interaction.
	 */
	function nextStep1() {
		updateMessageWithAnimation(
			'After anwsering some questions, I will recommand you a couple of recipes. '
		);
		showButton('What if I don\'t have all the ingredients?');
		userInputButton.removeEventListener('click', nextStep1);
		userInputButton.addEventListener('click', nextStep2);
	}

	/**
	 * Handles the third stage of the interaction.
	 * Displays a message and prepares for the next user interaction.
	 */
	function nextStep2() {
		updateMessageWithAnimation(
			'No worries, you can fully customize the ingredients base on your likings ;)'
		);
		showButton('That\'s Great!');
		userInputButton.removeEventListener('click', nextStep2);
		userInputButton.addEventListener('click', nextStep3);
	}

	/**
	 * Handles the fourth stage of the interaction.
	 * Displays a message, animates noodles, and prepares for the next user interaction.
	 */
	function nextStep3() {
		updateMessageWithAnimation('Click the "Generate My Recipe" Button, and find your best matching noodle recipe!');

		showButton('Chat again');
		// Remove existing event listener
		userInputButton.removeEventListener('click', nextStep3);
		//userInputButton.style.display = 'none';
		userInputButton.addEventListener('click', startConversation);


		// Animate the noodles
		const noodles = [
			{
				name: 'Beef Noodle Soup',
				image: './src/img/beef-noodle-soup-icon-1.png',
				description: 'Description for Beef Noodle Soup'
			},
			{
				name: 'Bread',
				image: './src/img/bread-icon-1.png',
				description: 'Description for Noodle 2'
			},
			{
				name: 'Chicken Noodle Soup',
				image: './src/img/chicken-noodle-soup-icon-1.png',
				description: 'Description for Noodle 3'
			},
			{
				name: 'Instant Noodles',
				image: './src/img/instant-noodles-icon-1.png',
				description: 'Description for Noodle 4'
			},
			{
				name: 'Lasagna',
				image: './src/img/lasagna-icon-1.png',
				description: 'Description for Noodle 5'
			},
			{
				name: 'Mac and Cheese',
				image: './src/img/mac-and-cheese-icon-1.png',
				description: 'Description for Noodle 6'
			},
			{
				name: 'Pho',
				image: './src/img/pho-icon-1.png',
				description: 'Description for Noodle 7'
			},
			{
				name: 'Ramen',
				image: './src/img/ramen-icon-1.png',
				description: 'Description for Noodle 8'
			},
			{
				name: 'Ravioli',
				image: './src/img/ravioli-icon-1.png',
				description: 'Description for Noodle 9'
			},
			{
				name: 'Spaghetti',
				image: './src/img/spaghetti-icon-1.png',
				description: 'Description for Noodle 10'
			},
			{
				name: 'Udon',
				image: './src/img/udon-icon-1.png',
				description: 'Description for Noodle 11'
			}
		];

		
		const noodlesContainer = document.querySelector('.side.front');

		noodles.forEach((noodle, index) => {
			const image = document.createElement('img');
			image.src = noodle.image;
			image.alt = noodle.name;
			image.classList.add('flying-noodle');
			noodlesContainer.appendChild(image);

			setTimeout(() => {
				image.style.animation = `fly-out 1s forwards`;
				image.addEventListener('animationend', () => {
					noodlesContainer.removeChild(image);
				});
			}, (11 - index) * 250);
		});

		/*
		// Show questionnaire and fortune button
		toQuestions.style.display = 'initial';
		fortuneButton.style.display = 'initial';
		flavorProfile.style.display = 'initial';
		*/
	}

	/**
	 * Updates the displayed message.
	 * @param {string} message - The message to display.
	 */
	function updateMessageWithAnimation(message) {
		const characters = message.split('');
		let currentIndex = 0;

		userInputButton.addEventListener('click', () => {
			clearInterval(animationInterval);
		});

		// Clear previous message
		messageOutput.textContent = '> ';
		const animationInterval = setInterval(() => {
			if (currentIndex >= characters.length) {
				clearInterval(animationInterval);
			} else {
				messageOutput.textContent += characters[currentIndex];
				currentIndex++;
			}
		}, 20);
	}

	/**
	 * Updates the displayed text on the button.
	 * @param {string} text - The text to display on the button.
	 */
	function showButton(text) {
		userInputButton.textContent = text;
	}

	// Other functions and event listeners
	// ...

	// Get the container element for the eyes
	const eyesContainer = document.querySelector('.eyes-container');
	
	/**
	 * Shift the position of the eyes
	 * @param {object} image - html object that will be shift.
	 * @param {Number} maxTranslation - the multiplier to the distances shifted
	 * @param {Number} rangeX - horizontal shift distance 
	 * @param {Number} rangeY - vertical shift distance 
	 */
	function shift(image, maxTranslation, rangeX, rangeY) {		
		const currentTranslation = `${maxTranslation * rangeX}% ${maxTranslation * rangeY}%`;
		
		image.animate({ 
			translate: currentTranslation, 
		}, { 
			duration: 750, fill: 'forwards', easing: 'ease' 
		});
	}

	// Track mouse movement
	document.addEventListener('mousemove', function (event) {
		const containerRect = eyesContainer.getBoundingClientRect();
		const radius = 1000;

		// Get the position of the mouse cursor
		const mouseX = event.clientX;
		const mouseY = event.clientY;

		// Calculate the position relative to the eyes container
		
		const containerX = containerRect.left + (containerRect.width / 2);
		const containerY = containerRect.top  + (containerRect.height / 2);

		// Calculate the position of the eyes inside the container
		const offsetX = (mouseX - containerX)/radius;
		const offsetY = (mouseY - containerY)/radius;

		if(offsetX<1.1 && offsetY<1.1){
			shift(eyesContainer, 20, offsetX, offsetY);
			//shift(eyeOut, 5, rangeX, rangeY);
			//console.log(offsetX);
			//console.log(offsetX);
		}
	});
});
