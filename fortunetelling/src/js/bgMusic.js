// Accessibility script for text-to-speech functionalities

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

/** Controls background music toggler button */
function bgMusicController() {
	// Toggle audio playback on/off. Defualt is on.
	const bgMusicToggle = document.getElementById('bg-music-toggle');
	bgMusicToggle.addEventListener('click', toggleBgMusic);
	if (localStorage.getItem('bg-music-enabled') == null) {
		localStorage.setItem('bg-music-enabled', true);
	}
	if (localStorage.getItem('bg-music-enabled') == 'true') {
		playBgMusic();
	} else {
		pauseBgMusic();
	}
}

/** Toggle background music */
function toggleBgMusic() {
	const bgMusic = document.getElementById('bg-music');
	if (bgMusic.paused) {
		playBgMusic();
	} else {
		pauseBgMusic();
	}
}

/** Play background music */
function playBgMusic() {
	const bgMusic = document.getElementById('bg-music');
	const bgMusicToggle = document.getElementById('bg-music-toggle-icon');
	bgMusic.play();
	bgMusicToggle.classList.remove('fa-pause');
	bgMusicToggle.classList.add('fa-music');
	localStorage.setItem('bg-music-enabled', true);
	console.log('bg music enabled');
}

/** Pause background music */
function pauseBgMusic() {
	const bgMusic = document.getElementById('bg-music');
	const bgMusicToggle = document.getElementById('bg-music-toggle-icon');
	bgMusic.pause();
	bgMusicToggle.classList.remove('fa-music');
	bgMusicToggle.classList.add('fa-pause');
	localStorage.setItem('bg-music-enabled', false);
	console.log('bg music disabled');
}

export { bgMusicController, toggleBgMusic, playBgMusic, pauseBgMusic };
