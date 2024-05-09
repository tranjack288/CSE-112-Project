const puppeteer = require('puppeteer');
// It says cannot import outside a module even if we have type:"module" in package.json, probably needs to fix this later
const iPhoneX = puppeteer.KnownDevices['iPhone X'];

describe('Basic exploration of jest testing', () => {
	beforeAll(async () => {
		await page.emulate(iPhoneX);
		await page.goto(
			'https://cse110-sp23-group15.github.io/cse110-sp23-group15/fortunetelling/index.html'
		);
	});

	it('Initial Home Page - Navigation', async () => {
		console.log('Navigate to Questionnaire...');
		await page.click('a[href="src/pages/questionnaire.html"]');
		await page.screenshot({
			path: 'src/__test__/screenshots/iPhoneX-questionnaire.png'
		});
		expect(page.url()).toBe(
			'https://cse110-sp23-group15.github.io/cse110-sp23-group15/fortunetelling/src/pages/questionnaire.html'
		);
	});
});
