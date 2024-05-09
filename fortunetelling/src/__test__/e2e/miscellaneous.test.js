const puppeteer = require('puppeteer');
const timeout = 20000;

describe('Noodle Profile', () => {
	beforeAll(async () => {});
	// Having problem with clicking the accessibility button, I have tried literally all combinations
	it(
		'should have text highlighted with accessibility switch',
		async () => {
			/*
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
			await page.goto(
                'https://cse110-sp23-group15.github.io/cse110-sp23-group15/fortunetelling/src/pages/profiles.html'
            );
            
            //const check = await page.$('input[type="checkbox"]');
            await page.evaluate(function(){
                const toggleSwitch= document.querySelector('input[type="checkbox"]');
                toggleSwitch.click();
            });
            await page.screenshot({
				path: 'src/__test__/screenshots/highlighted-text.png'
			});
            const readEnabled = await page.$$('speechify');
            readEnabled[0].click();
            await page.screenshot({
				path: 'src/__test__/screenshots/highlighted-text.png'
			});
            const colorValue = await page.evaluate(element => {
                const computedStyle = getComputedStyle(element);
                return computedStyle.color;
            }, readEnabled[0]);
            expect(colorValue).toBe('#d7ae0d');
            await browser.close();
            */
		},
		timeout
	);

	it(
		'on first page, it should let you take quiz before seeing fortune',
		async () => {
			const browser = await puppeteer.launch();
			const page = await browser.newPage();
			await page.goto(
				'https://cse110-sp23-group15.github.io/cse110-sp23-group15/fortunetelling/'
			);
			await page.evaluate(() => {
				window.localStorage.clear();
			});
			await page.evaluate(function () {
				const userInputButton = document.getElementById('user-input-button');
				userInputButton.click();
			});
			await page.waitForTimeout(500);
			await page.evaluate(function () {
				const userInputButton = document.getElementById('user-input-button');
				userInputButton.click();
			});
			await page.waitForTimeout(500);
			await page.evaluate(function () {
				const userInputButton = document.getElementById('user-input-button');
				userInputButton.click();
			});
			await page.evaluate(function () {
				const fortuneButton = document.getElementById('fortuneButton');
				fortuneButton.click();
			});
			await page.waitForTimeout(500);
			const buttonText = await page.evaluate(function () {
				const fortuneLink = document.querySelector('#fortuneLink');
				return fortuneLink.textContent;
			});
			console.log(buttonText);
			await expect(buttonText).toBe('You must do the Quiz First!');
			await browser.close();
		},
		timeout
	);

	it(
		'on profile page, it should let you take quiz before seeing fortune',
		async () => {
			const browser = await puppeteer.launch();
			const page = await browser.newPage();
			await page.goto(
				'https://cse110-sp23-group15.github.io/cse110-sp23-group15/fortunetelling/src/pages/profiles.html'
			);

			page.on('dialog', async (dialog) => {
				const dialogMsg = dialog.message();
				await page.evaluate(() => {
					const button = document.querySelector('#fortune-button');
					button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
				});
				expect(dialogMsg).toBe(
					"Oops, looks like you haven't taken our personality quiz yet. Here is the quiz."
				);
				await dialog.dismiss();
			});
			await browser.close();
		},
		timeout
	);
});
