const puppeteer = require('puppeteer');
const timeout = 5000;
const iPhoneX = puppeteer.KnownDevices['iPhone X'];
// Can't directly call genHoroscope because of module difference
describe('Fortune Page', () => {
	beforeAll(async () => {
		await page.emulate(iPhoneX);
		await page.goto(
			'https://cse110-sp23-group15.github.io/cse110-sp23-group15/fortunetelling/src/pages/fortune.html'
		);
	});

	it(
		'should see different fortunes after seeing other noodles',
		async () => {
			await page.click('#dropbtn');
			await page.waitForSelector('.dropdown-content');
			await page.click('.noodleButton:nth-child(2)');
			await page.waitForTimeout(500);
			await page.waitForSelector('#fortuneText');
			const fortune = await page.$eval('#fortuneText', (el) => el.textContent);
			await page.screenshot({
				path: 'src/__test__/screenshots/fortune-Pho.png'
			});
			await page.click('.noodleButton:nth-child(5)');
			await page.waitForTimeout(500);
			await page.waitForSelector('#fortuneText');
			const newFortune = await page.$('#fortuneText', (el) => el.textContent);
			await page.screenshot({
				path: 'src/__test__/screenshots/fortune-PadThai.png'
			});
			expect(fortune).not.toBe(newFortune);
		},
		timeout
	);
});
