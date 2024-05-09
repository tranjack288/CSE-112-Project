// about.html onload script

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

let memberIndex = 0;
const members = [
	{
		name: 'Mark Lucernas',
		memberImage: '../img/mark-icon.jpeg',
		memberNoodleImg: '../img/ramen-icon-1.png',
		memberNoodleName: 'Ramen',
		description:
			'Mark is a third year studying computer science and is one of the team leads for our team.'
	},
	{
		name: 'Hieu Pham',
		memberImage: '../img/hieu-icon.jpeg',
		memberNoodleImg: '../img/ravioli-icon-1.png',
		memberNoodleName: 'Ravioli',
		description:
			'Hieu is another one of our team leads and is currently a second year studying computer science.'
	},
	{
		name: 'Xinle Yu',
		memberImage: '../img/henry-icon.jpg',
		memberNoodleImg: '../img/beef-noodle-soup-icon-1.png',
		memberNoodleName: 'Beef Noodle Soup',
		description:
			'Xinle (Henry) is a sophomore majoring in computer science, and he is a developer on the team.'
	},
	{
		name: 'Aaron Kann',
		memberImage: '../img/aaron-icon.jpg',
		memberNoodleImg: '../img/mac-and-cheese-icon-1.png',
		memberNoodleName: 'Mac and Cheese',
		description:
			"Aaron's role on the team is a developer, and he is a second year studying math and computer science."
	},
	{
		name: 'Steve Yin',
		memberImage: '../img/steve-icon.jpg',
		memberNoodleImg: '../img/udon-icon-1.png',
		memberNoodleName: 'Udon',
		description:
			'Steve is a developer on our team, and he is currently a second year majoring in computer engineering.'
	},
	{
		name: 'Darren Yu',
		memberImage: '../img/darren-icon.jpg',
		memberNoodleImg: '../img/instant-noodles-icon-1.png',
		memberNoodleName: 'Instant Noodles',
		description:
			'Darren is a second year computer science major, and he is the planner as well as developer for the team.'
	},
	{
		name: 'Holly Zhu',
		memberImage: '../img/holly-icon.png',
		memberNoodleImg: '../img/spaghetti-icon-1.png',
		memberNoodleName: 'Spaghetti',
		description:
			'Holly is a computer science major with a design minor, and she is the designer and a developer on our team.'
	},
	{
		name: 'Anthony Yao',
		memberImage: '../img/anthony-icon.jpg',
		memberNoodleImg: '../img/pho-icon-1.png',
		memberNoodleName: 'Pho',
		description:
			"Anthony's role on the team is a developer, and he is currently a sophomore majoring in computer science."
	},
	{
		name: 'Hanson Wang',
		memberImage: '../img/hanson-icon.png',
		memberNoodleImg: '../img/pad-thai-icon-1.png',
		memberNoodleName: 'Pad Thai',
		description:
			'Hanson is a math and computer science in his second year, and serves as a developer on the team.'
	}
];

/** Function to update member content */
function updateMember() {
	const currentMemeberImg = document.getElementById('current-member');
	currentMemeberImg.src = members[memberIndex].memberImage;
	currentMemeberImg.alt = members[memberIndex].name + "'s profile picture";

	const currentMemberNoodle = document.getElementById('member-noodle');
	currentMemberNoodle.src = members[memberIndex].memberNoodleImg;
	currentMemberNoodle.alt = members[memberIndex].memberNoodleName + ' icon';

	document.getElementById('member-name').innerText = members[memberIndex].name;
	document.getElementById('description').innerText =
		members[memberIndex].description;
}

/** Function to select next carousel content */
function nextMember() {
	memberIndex = (memberIndex + 1) % members.length;
	updateMember();
}

/** Function to select previous carousel content */
function prevMember() {
	memberIndex = (memberIndex - 1 + members.length) % members.length;
	updateMember();
}

const memberMenu = document.querySelectorAll('.member-menu img');

memberMenu.forEach((mem, idx) => {
	mem.addEventListener('click', () => {
		const currentMemeberImg = document.getElementById('current-member-dt');
		currentMemeberImg.src = members[idx].memberImage;
		currentMemeberImg.alt = members[idx].name + "'s profile picture";

		const currentMemberNoodle = document.getElementById('member-noodle-dt');
		currentMemberNoodle.src = members[idx].memberNoodleImg;
		currentMemberNoodle.alt = members[idx].memberNoodleName + ' icon';

		document.getElementById('member-name-dt').innerText = members[idx].name;
		document.getElementById('description-dt').innerText =
			members[idx].description;
	});
});

document.querySelector('.member-menu img').click();
updateMember();
