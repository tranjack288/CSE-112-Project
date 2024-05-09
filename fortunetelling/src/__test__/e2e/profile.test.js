const timeout = 20000;
const puppeteer = require('puppeteer');
// It says cannot import outside a module even if we have type:"module" in package.json, probably needs to fix this later
// const GalaxyS8 = puppeteer.KnownDevices['Galaxy S8'];

describe('Noodle Profile', () => {
	beforeAll(async () => {
		// await page.emulate(GalaxyS8);
		await page.goto(
			'https://cse110-sp23-group15.github.io/cse110-sp23-group15/fortunetelling/src/pages/profiles.html'
		);
	});

	it(
		'should get to the expected noodle profile',
		async () => {
			let noodleName = await page.$eval('#name h2', (el) => el.innerText);
			expect(noodleName).toBe('Beef Noodle Soup');
			await page.waitForSelector('img[alt="Chicken Noodle Soup"]');
			await page.evaluate(() => {
				const chicken = document.querySelector(
					'img[alt="Chicken Noodle Soup"]'
				);
				chicken.click();
			});
			await page.screenshot({
				path: 'src/__test__/screenshots/Galaxy-Chicken-Soup.png'
			});
			noodleName = await page.$eval('#name', (el) => el.innerText);
			expect(noodleName).toBe('Chicken Noodle Soup');
		},
		timeout
	);

	it(
		'should see a fortune',
		async () => {
			await page.evaluate(() => {
				const button = document.querySelector('#fortune-button');
				button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
			});
			await page.waitForTimeout(500);
			const fortune = await page.$eval('#fortuneText', (el) => el.innerText);
			expect(fortune).not.toBe('');
		},
		timeout
	);
});
