// Helper functions for testing

/**
 * Test wrapper function
 *
 * @param {string} desc Test description
 * @param {Function} fn Test function
 */
export const it = (desc, fn) => {
	try {
		fn();
		console.log('\x1b[32m%s\x1b[0m', `\u2714 ${desc}`);
	} catch (error) {
		console.log('\n');
		console.log('\x1b[31m%s\x1b[0m', `\u2718 ${desc}`);
		console.error(error);
	}
};
