// noodlesResults.html onload module script

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

window.addEventListener('DOMContentLoaded', init);


/**
 * On load function,
 * use localStorage to get the quiz result and display the corresponding noodle
 */
async function init(){
	//console.log("INIT")
	const noodleChosen = JSON.parse(localStorage.getItem("noodleChosen"));
	
    const noodleChosenImg = noodleChosen.path;
    const noodleChosenName = noodleChosen.noodleName;

	// Change the noodle Image and noodle name
	const noodleImgs = document.querySelectorAll('.noodleImg');
	const noodleNames = document.querySelectorAll('.noodleName');

	noodleImgs[0].src = noodleChosenImg;
    noodleImgs[1].src = noodleChosenImg;
    noodleNames[0].innerText = noodleChosenName;
    noodleNames[1].innerText = noodleChosenName;


	let backendRecipe = await getBackendRecipe(noodleChosen);	
	let recipeTextBackend =  backendRecipe["response"];
	console.log(recipeTextBackend);
	recipeTextBackend = turnRecipeIntoHTML(recipeTextBackend);
	const recipeText = document.getElementById("recipeText");
	recipeText.innerHTML = recipeTextBackend;
}

/**
 * Turn backend text into HTML element
 * @param {String} backendText 
 * @returns 
 */
function turnRecipeIntoHTML(backendText){

	const asteriskIndex = backendText.indexOf('*');
    if (asteriskIndex !== -1) {
        backendText = backendText.substring(asteriskIndex);
    }

	const matchFirst = backendText.match(/\S+/); // Find the first block of non-whitespace characters
    if (matchFirst) {
        const block = matchFirst[0];
         backendText = backendText.replace(block, `<h2>${block.slice(2,-3)}</h2>`);
    }
    

	backendText = backendText.replace(/\*\*Ingredients:\*\*/g, '<h2>Ingredients</h2>')
	.replace(/\*\*Instructions:\*\*/g, '<h2>Instructions</h2>')
	.replace(/\*\*Description:\*\*/g, '<h2>Description</h2>')
	.replace(/\*\*Preparation:\*\*/g, '<h2>Preparation</h2>')
	.replace(/\*\*Recipe:\*\*/g, '<h2>Recipe</h2>');

	// Replace list items with HTML list items
    backendText = backendText.replace(/\* ([^\*]+)\n/g, '<li>$1</li>')
               .replace(/\* ([^\*]+)$/g, '<li>$1</li>'); // For the last list item

	// Wrap Ingredients and Instructions items in <ul> tags
    backendText = backendText.replace(/<h2>Ingredients<\/h2>([\s\S]*?)(?=<h2>|$)/, '<h2>Ingredients</h2><ul>$1</ul>')
               .replace(/<h2>Instructions<\/h2>([\s\S]*?)(?=<h2>|$)/, '<h2>Instructions</h2><ol>$1</ol>');
	// Wrap description text in <p> tags
    backendText = backendText.replace(/<h2>Description<\/h2>([\s\S]*?)(?=<h2>|$)/, '<h2>Description</h2><p>$1</p>');

    // Remove extra newline characters
    backendText = backendText.replace(/\n/g, '');
    
	console.log(backendText);
    return backendText;
}
// async function init() {
// 	const noodleDescription = document.getElementById('noodleDescription');
// 	const quizResult = document.getElementById('quizResult');
// 	const smoke = document.getElementById('smokeImage');
// 	noodleDescription.style.opacity = 0;
// 	quizResult.textContent = 'Your personality type is being calculated...';
// 	smoke.style.display = 'none';

// 	spinNoodleWheel();

// 	setTimeout(() => {
// 		doSmokeEffect();
// 	}, timeBeforeSmoke);

// 	setTimeout(() => {
// 		noodleDescription.style.opacity = 1;
// 		quizResult.style.opacity = 1;
// 		setDescriptionAndResult();
// 	}, timeBeforeSmoke + smokePeakCoverTime);

// 	setTimeout(() => {
// 		setImageCorrectly();
// 	}, imageAnimationTime + 500);

// 	bindButtons();
//}

/**
 * Set the noodle image to the corresponding image of the user's quiz result
 */
async function setImageCorrectly() {
	const image = document.getElementById('noodleImg');
	const noodleData = await getNoodleData();
	const noodleIndex = localStorage.getItem('myNoodleIndex');
	image.setAttribute('src', noodleData[noodleIndex]['path']);
	image.setAttribute('alt', noodleData[noodleIndex]['noodleName']);
}

/**
 * Set the noodle description and quiz result to the corresponding text of the user's quiz result
 */
async function setDescriptionAndResult() {
	const noodleDescription = document.getElementById('noodleDescription');
	const quizResult = document.getElementById('quizResult');
	let noodleId = localStorage.getItem('myNoodleIndex');

	// convert noodleId to int
	noodleId = parseInt(noodleId);
	const noodleData = await getNoodleData();
	noodleDescription.textContent =
		noodleData[noodleId]['personalityDescription'];
	quizResult.textContent = `Congratulations, your personality type is ${noodleData[noodleId]['noodleName']}!`;

}

/**
 * Animates the image to shuffle through all noodle images
 */
async function spinNoodleWheel() {
	const noodleData = await getNoodleData();
	const spinsAround = totalImageCycles;

	// exponential function
	const b = imageExponentialPlier;
	const a = imageAnimationTime / Math.pow(b, spinsAround * 12);

	const image = document.getElementById('noodleImg');
	for (let i = 0; i < spinsAround * 12; i++) {
		setTimeout(() => {
			image.setAttribute('src', noodleData[i % 12]['path']);
		}, a * Math.pow(b, i));
	}
}

/**
 * Animates the smoke image exactly once
 */
function doSmokeEffect() {
	const smoke = document.getElementById('smokeImage');
	setTimeout(() => {
		smoke.style.display = 'none';
	}, smokeAnimationTime);
	// img.src = img.src + "?";
	smoke.style.display = 'block';
}

/**
 * Get response from backend
 * @param {Object} nooldeOBJ 
 * @returns 
 */
async function getBackendRecipe(nooldeOBJ){
	console.log(nooldeOBJ);
	let  query = fetch("https://us-central1-noodle-66d8d.cloudfunctions.net/getLlama3Response",
	{
		method: "POST",
		body: JSON.stringify(nooldeOBJ),
		mode: "cors"
	})
	.then(res => res.json())

	return query;
}