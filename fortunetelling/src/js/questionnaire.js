// questionnaire.html onload module script

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

// upon loading, call updatenoodle, passing in the noodleIndex from local storage
document.addEventListener('DOMContentLoaded', init);
const QUESTIONS = 10; // Questionnaire Length
const noodleData = [
	{
		noodleName: 'Ravioli',
		noodleID: 0,
		personalityDescription:
			'You are a Ravioli! This group is known for its fiery and energetic nature. Like the pasta dish, Raviolis are courageous, determined, and fiercely independent. They possess a natural leadership quality and thrive in challenging situations, always seeking new adventures and opportunities for growth.',
		path: '../img/ravioli-icon-1.png'
	},
	{
		noodleName: 'Pho',
		noodleID: 1,
		personalityDescription:
			"You are a Pho! This is a group known for being grounded and practical. Like the noodle dish, the Pho's values stability, security, and material comforts, and has a strong sense of loyalty.  Typically known as very reliable friends, they are also known for being patient, hardworking, and having a strong sense of duty.",
		path: '../img/pho-icon-1.png'
	},
	{
		noodleName: 'Mac and Cheese',
		noodleID: 2,
		personalityDescription:
			'You are a Mac and Cheese! Versatile and curious, Mac and Cheeses are known for their quick wit, adaptability, and love for communication and socializing. Not unlike the pasta dish, the vibrant personality of a Mac and Cheese makes them the life of any gathering.',
		path: '../img/mac-and-cheese-icon-1.png'
	},
	{
		noodleName: 'Instant Noodles',
		noodleID: 3,
		personalityDescription:
			'You are an Instant Noodle! Not unlike the nurturing nature of the Instant Noodle, the Instant Noodles are a nurturing and sensitive bunch. Deeply intuitive and values emotional connections, creating a safe and loving environment for their loved ones while also being fiercely protective.',
		path: '../img/instant-noodles-icon-1.png'
	},
	{
		noodleName: 'Pad Thai',
		noodleID: 4,
		personalityDescription:
			'You are a Pad Thai! Just like the confident and charismatic nature of the Pad Thai noodle, Pad Thais love to be in the spotlight and seeks recognition. However, the Pad Thais also are incredibly generous and loyal to those they care about, making them natural-born leaders.',
		path: '../img/pad-thai-icon-1.png'
	},
	{
		noodleName: 'Chicken Noodle Soup',
		noodleID: 5,
		personalityDescription:
			'You are a Chicken Noodle Soup! Just like the detail-oriented and analytical approach required to cook this noodle, the Chicken Noodle Soups have a strong work ethic, love organization, and strive for perfection in all aspects of life. They are often found utilizing their keen attention to detail to excel in their endeavors.',
		path: '../img/chicken-noodle-soup-icon-1.png'
	},
	{
		noodleName: 'Udon',
		noodleID: 6,
		personalityDescription:
			"You are an Udon! Diplomatic and harmonious, Udon's seek balance and fairness in relationships. Much like the beautiful Udon noodle, Udon's have a natural talent for creating beauty and harmony. Udon's are also often found utilizing their strengths to take on the role of peacemaker in conflicts.",
		path: '../img/udon-icon-1.png'
	},
	{
		noodleName: 'Ramen',
		noodleID: 7,
		personalityDescription:
			"You are a Ramen! Just like the intense and mysterious Ramen noodle, Ramen's are known for their passion and determination, and have a profound depth of emotions and desire for transformation. Their particular personalities make them highly intuitive and secretive.",
		path: '../img/ramen-icon-1.png'
	},
	{
		noodleName: 'Spaghetti and Meatballs',
		noodleID: 8,
		personalityDescription:
			'You are a Spaghetti and Meatballs! Adventurous and optimistic, Spaghetti and Meatballs have a hunger for knowledge that matches their hunger for good pasta noodles. These lovers of freedom can be found seeking new experiences and philosophical pursuits, constantly seeking wisdom and broadening their horizons.',
		path: '../img/spaghetti-icon-1.png'
	},
	{
		noodleName: 'Lasagna',
		noodleID: 9,
		personalityDescription:
			'You are a Lasagna! Just like anyone who attempts to cook the dish, Lasagnas are ambitious and disciplined, and focused on achieving success and stability. Armed with a strong sense of responsibility and determination, Lasagnas are known for being reliable and hardworking individuals.',
		path: '../img/lasagna-icon-1.png'
	},
	{
		noodleName: 'Taiwanese Beef Noodle Soup',
		noodleID: 10,
		personalityDescription:
			'You are a Taiwanese Beef Noodle Soup! Intellectual and independent, Taiwanese Beef Noodle Soups are forward thinkers, valuing individuality and innovation, as seen in the noodle dish as well. Equipped with a passion for social justice and humanitarian causes, they are often seen as the visionary of the group.',
		path: '../img/beef-noodle-soup-icon-1.png'
	},
	{
		noodleName: 'Bread',
		noodleID: 11,
		personalityDescription:
			'You are Bread! Much like Bread in a noodle-themed horoscope, Breads are not afraid to stand out from the crowd. Imaginative and empathetic, Breads are highly intuitive and deeply compassionate, often seeking solace in artistic pursuits and a connection to the spiritual realm. Their uniqueness makes them natural healers and dreamers.',
		path: '../img/bread-icon-1.png'
	}
];

/** On load function */
function init() {
	gradeQuiz();
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
			localStorage.setItem('myNoodle', noodleData[hash]['path']);
			localStorage.setItem('myNoodleIndex', hash);
			link.setAttribute('href', './noodlesResults.html');
		}
	});
}
