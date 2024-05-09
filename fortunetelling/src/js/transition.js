// Transition animation module when loading a page

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

/**
 * animation when loading a page
 */
function transition() {
	const page = document.querySelector('main');
	window.onload = gsap.fromTo(page, 1, { opacity: 0 }, { opacity: 1 });
}

export { transition };
