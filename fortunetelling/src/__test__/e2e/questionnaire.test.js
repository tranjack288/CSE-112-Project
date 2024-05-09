const timeout = 10000;
const noodleDescription = require('fortunetelling/src/js/database/noodleDescriptions.json');

const randomIntArrayInRange = (min, max, n = 1) =>
	Array.from(
		{ length: n },
		() => Math.floor(Math.random() * (max - min + 1)) + min
	);

describe('Questionnaire', () => {
	beforeAll(async () => {
		await page.goto(
			'https://cse110-sp23-group15.github.io/cse110-sp23-group15/fortunetelling/src/pages/questionnaire.html'
		);
	});

	it(
		'should select only one radio button per form in the questionnaire',
		async () => {
			const questionForms = await page.$$('.Question'); // Get all question form elements
			const i = Math.ceil(Math.random() * 10);
			const questionForm = questionForms[i];
			const radioButtons = await questionForm.$$('input[type="radio"]');
			for (const radioButton of radioButtons) {
				await radioButton.click(); // Click all radios in the second form, therefore only the last one should be selected in the end
			}
			await page.screenshot({
				path: 'src/__test__/screenshots/allradioselected-questionnaire.png'
			});
			const selectedRadios = await questionForm.$$eval(
				'input[type="radio"]:checked',
				(nodes) => nodes.length
			);
			expect(selectedRadios).toBe(1);
		},
		timeout
	);

	it(
		'should check all forms have their answers before submit',
		async () => {
			page.on('dialog', async (dialog) => {
				const dialogMsg = dialog.message();
				// Close the dialog
				await page.evaluate(function () {
					const submitButton = document.querySelector('#submit');
					submitButton.click();
				});
				expect(dialogMsg).toBe('You have not answered all the questions.');
				await dialog.dismiss();
			});
		},
		timeout
	);

	it(
		'should navigate to the right noodle profile after submit',
		async () => {
			const randomAnswer = randomIntArrayInRange(1, 5, 10);
			const questionForms = await page.$$('.Question');
			for (let i = 0; i < questionForms.length; i++) {
				const answer = randomAnswer[i];
				const questionForm = questionForms[i];
				const radioButtons = await questionForm.$$('input[type="radio"]');
				for (let j = 1; j <= 5; j++) {
					if (j === answer) {
						await radioButtons[j - 1].click();
					}
				}
			}
			await page.screenshot({
				path: 'src/__test__/screenshots/random-answer.png'
			});
			await page.evaluate(function () {
				const submitButton = document.querySelector('#submit');
				submitButton.click();
			});
			await page.waitForTimeout(500);
			const idx =
				randomAnswer.reduce(
					(accumulator, currentValue) => accumulator + currentValue,
					0
				) % 12;
			const expectedNoodle = noodleDescription[idx]['noodleName'];
			const expectedResult = `Congratulations, your personality type is ${expectedNoodle}!`;
			const actualResult = await page.evaluate(function () {
				const quizResult = document.getElementById('quizResult');
				return quizResult.textContent;
			});
			expect(expectedResult).toBe(actualResult);
		},
		timeout
	);
});
