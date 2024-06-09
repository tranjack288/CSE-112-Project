// about.html onload script

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

let memberIndex = 0;
const members = [
	{
		name: 'Daniel Carrascoza',
		memberImage: '../img/Daniel1.webp',
		memberNoodleImg: '../img/ramen-icon-1.png',
		memberNoodleName: 'Ramen',
		description:
			'Daniel is a 4th year Computer Engineering student from LA and was a developer on the back-end team.'
	},
	{
		name: 'Jack Tran',
		memberImage: '../img/Jack_Tran.webp',
		memberNoodleImg: '../img/ravioli-icon-1.png',
		memberNoodleName: 'Ravioli',
		description:
			'Jack is a 4th year student studying computer engineering and was one of the team leads for our team.'
	},
	{
		name: 'Abishek Siva',
		memberImage: '../img/abishek.webp',
		memberNoodleImg: '../img/beef-noodle-soup-icon-1.png',
		memberNoodleName: 'Beef Noodle Soup',
		description:
			'Abishek is a 4th year Math-CS student from the Bay Area and was a developer on the back-end team.'
	},
	{
		name: 'Ruthvivcsai Sivakumar',
		memberImage: '../img/Ruthvic.webp',
		memberNoodleImg: '../img/mac-and-cheese-icon-1.png',
		memberNoodleName: 'Mac and Cheese',
		description:
			"Ruthvic is a 4th year computer science student, and was one of the team leads for this project."
	},
	{
		name: 'Steve Yin',
		memberImage: '../img/steve-icon.jpg',
		memberNoodleImg: '../img/udon-icon-1.png',
		memberNoodleName: 'Udon',
		description:
			'Steve is a 3rd year Computer Engineering student and was a frontend developer.'
	},
	{
		name: 'Albert Chen',
		memberImage: '../img/albert.webp',
		memberNoodleImg: '../img/instant-noodles-icon-1.png',
		memberNoodleName: 'Instant Noodles',
		description:
			'Albert is a 4th year Computer Engineering student from Seattle and was a backend developer and CI/CD manager.'
	},
	{
		name: 'Jason Chen',
		memberImage: '../img/Jason.webp',
		memberNoodleImg: '../img/spaghetti-icon-1.png',
		memberNoodleName: 'Spaghetti',
		description:
			'Jason is a 4th year CS minor student from Shanghai. He was a front-end developer and designer for this project.'
	},
	{
		name: 'Tyler Le',
		memberImage: '../img/tyler.webp',
		memberNoodleImg: '../img/pho-icon-1.png',
		memberNoodleName: 'Pho',
		description:
			'Tyler is a third year Math-CS major and is a back-end developer on the team.'
	},
	{
		name: 'Gonzalo Allen-Peres',
		memberImage: '../img/gonzalo.webp',
		memberNoodleImg: '../img/pad-thai-icon-1.png',
		memberNoodleName: 'Pad Thai',
		description:
			'Gonzalo is a 2nd year CS student from San Diego and was a front-end developer on this project.'
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
