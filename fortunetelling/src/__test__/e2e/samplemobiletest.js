import { remote } from 'webdriverio';
import { expect } from 'expect-webdriverio';
/* We are simply writing tests based on webdriverio*/

const capabilities = {
	platformName: 'Android',
	'appium:automationName': 'UiAutomator2',
	'appium:deviceName': 'Android',
	browserName: 'Chrome' // You need to have Chrome in simulator or your connected phone
};

const wdOpts = {
	host: process.env.APPIUM_HOST || 'localhost',
	port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
	logLevel: 'info',
	capabilities
};

/**
 * @param {void}: the capabilities and remote opts for webdriverIO to run tests on mobile end
 * @return {void}
 */
async function runTest() {
	const driver = await remote(wdOpts);
	// When starting chrome it takes me as a new user, I need to manually click "accept & continue" and choose whether to sync, something to address
	try {
		await driver.url('https://www.google.com');
		await expect(driver).toHaveUrl('https://www.google.com/');
	} finally {
		await driver.pause(1000);
		await driver.deleteSession();
	}
}

runTest().catch(console.error);

/*
I tried using jest but it came out with lots of problems
describe('Mobile Browser Test', () => {
  beforeAll(async () => {
    const driver = await remote(wdOpts);
  });

  afterAll(async () => {
    await driver.deleteSession();
  });

  it('should have right url', async () => {
    await driver.url('https://www.google.com');
    expect(driver).toHaveUrl('https://www.google.com')
  });
});
*/
