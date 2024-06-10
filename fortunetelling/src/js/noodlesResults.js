// noodlesResults.html onload module script

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html


// import { v4 as uuidv4 } from 'uuid';
window.addEventListener('DOMContentLoaded', init);


/**
 * On load function,
 * use localStorage to get the quiz result and display the corresponding noodle
 */
async function init(){
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

	// delete survey answers from local storage
	localStorage.removeItem('surveyAnswers');
	localStorage.removeItem('confirmedIngredients');

	// Add event listener to my recipe and front page button
	let saved = false; // Recipe saved is false on default
	let leavePage = false; // Determines whether or not to leave noodleResults page when button is clicked
	let generatedImage = null;
	let recipeTextBackend = null;

	const myRecipesButton = document.getElementById('my-recipes-button');
	const frontPageButton = document.getElementById('front-page-button');
	const myRecipesLink = document.querySelector('a[href="./myRecipes.html"]');
	const aboutPageLink = document.querySelector('a[href="./about.html"]');

	myRecipesButton.addEventListener('click', ()=>{		
		if(saved == false){
			let saveRecipeStatus = saveRecipe(noodleChosenName, generatedImage, noodleChosenImg, recipeTextBackend);
			leavePage = saveRecipeStatus[0];
			saved = saveRecipeStatus[1];
		}
		if (leavePage == true || saved == true){
			window.location.href="./myRecipes.html";	
		}		
	});

	frontPageButton.addEventListener('click', ()=>{
		let leavePage = false
		if(saved == false){
			let saveRecipeStatus = saveRecipe(noodleChosenName, generatedImage, noodleChosenImg, recipeTextBackend);
			leavePage = saveRecipeStatus[0];
			saved = saveRecipeStatus[1];
		}	
		if (leavePage == true || saved == true){
			window.location.href="../../index.html";
		}
	});

	myRecipesLink.addEventListener('click', (event)=>{	
		event.preventDefault();
		if(saved == false){
			let saveRecipeStatus = saveRecipe(noodleChosenName, generatedImage, noodleChosenImg, recipeTextBackend);
			leavePage = saveRecipeStatus[0];
			saved = saveRecipeStatus[1];
		}
		if (leavePage == true || saved == true){
			window.location.href="./myRecipes.html";	
		}		
	});

	aboutPageLink.addEventListener('click', (event)=>{	
		event.preventDefault();
		if(saved == false){
			let saveRecipeStatus = saveRecipe(noodleChosenName, generatedImage, noodleChosenImg, recipeTextBackend);
			leavePage = saveRecipeStatus[0];
			saved = saveRecipeStatus[1];
		}
		if (leavePage == true || saved == true){
			window.location.href="./about.html";	
		}		
	});



	// Recipe Text
	let backendRecipe = await getBackendRecipe(noodleChosen);	
	recipeTextBackend =  backendRecipe["response"];
	let recipeJustText = recipeTextBackend;
	//console.log(recipeTextBackend);
	recipeTextBackend = turnRecipeIntoHTML(recipeTextBackend);
	const recipeText = document.getElementById("recipeText");
	recipeText.innerHTML = recipeTextBackend; 

	// AI Noodle Image
	// Grab descrition and send to DALLE
	let DescriptionsIndex = recipeJustText.indexOf("Description");
	let DirectionsIndex = recipeJustText.indexOf("Directions");
	recipeJustText = " just the food " + recipeJustText.slice(DescriptionsIndex,DirectionsIndex);
	
	console.log(recipeJustText);
	generatedImage = await getGeneratedImage(recipeJustText);
	console.log(JSON.stringify(generatedImage));
	noodleImgs[0].setAttribute("src", (generatedImage));
	noodleImgs[1].setAttribute("src", (generatedImage));

	// Saving fully generated recipe to localstorage
	if(saved == false){
		let saveRecipeStatus = saveRecipe(noodleChosenName, generatedImage, noodleChosenImg, recipeTextBackend);
		leavePage = saveRecipeStatus[0];
		saved = saveRecipeStatus[1];
	}
	

}
/**
 * Saving current recipe to localstorage
 * @param {String} noodleChosenName 
 * @param {String} generatedImage 
 * @param {String} defaultImage 
 * @param {String} recipeTextBackend 
 * @returns {Array.<boolean,boolean>} leave page, save recipe
 */
function saveRecipe(noodleChosenName, generatedImage, defaultImage, recipeTextBackend){
	let myRecipesMap = new Map();
	let currRecipe = {};
	currRecipe['noodleName'] = noodleChosenName;

	// Check generated text status (recipeTextBackend)
	if(recipeTextBackend != null){ // Recipe is generated 
		currRecipe['recipe'] = recipeTextBackend;
	}else{ // Recipe is not generated 
		if(window.confirm('Your recipe is not ready yet, do you really wish to leave?')){
			console.log('leave');
			return [true, false]; // leave the page immediately
		}else{
			console.log('stay');
			return [false, false]; // not leaving, wait for recipe generation
		}
	}

	// Check generated Image status (generatedImage)
	if(generatedImage != null){ // AI image is generated 
		currRecipe['imgPath'] = generatedImage;
	}else{ // AI image is not generated yet
		if(window.confirm('Your noodle image is not ready yet, but you can still save your recipe with the default image. Do you really wish to leave?')){
			// Use default noodle image
			currRecipe['imgPath'] = defaultImage;
		}else{
			console.log('stay');
			return [false, false]; // not leaving, wait for AI image generation
		}
	}
	currRecipe['defaultImgPath'] = defaultImage;

	
	// Update or add myRecipes entry to local storage
	if (localStorage.getItem('myRecipes') !== null){
		let myRecipesMapArr = JSON.parse(localStorage.getItem('myRecipes'));
		myRecipesMap = new Map(myRecipesMapArr);
	}
	let uniqueNoodleID =  uuid.v4();
	// update map by adding current recipe
	myRecipesMap.set(uniqueNoodleID, currRecipe);
	let myRecipesMapArr = Array.from(myRecipesMap);
	localStorage.setItem('myRecipes', JSON.stringify(myRecipesMapArr));

	// true to leave the page, and true to save recipe
	return [true, true];
}

/**
 * Get AI image from Dalle
 * @param {String} descriptionInput Image description
 * @returns {Object} query
 */
async function getGeneratedImage(descriptionInput){
	let  query = fetch("https://us-central1-noodle-66d8d.cloudfunctions.net/getDallEResponse",
			{method: "POST",
				body: JSON.stringify({"description": `${descriptionInput}`}),
				mode: "cors"
			})
			.then(res => res.json())
			.then(data => { return data["url"];});

			return query;
}
/**
 * Converts the text from the backend recipe into the corresponding html.
 * @param {String} backendText 
 * @returns {String} backendText
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
	.replace(/\*\*Directions:\*\*/g, '<h2>Preparation</h2>')
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
    
	//console.log(backendText);
    return backendText;
}

/**
 * Grbas the recipe from llama3 ednpoint
 * @param {Object} nooldeOBJ input noodle object
 * @returns {Object} query
 */
async function getBackendRecipe(nooldeOBJ)
	{
		let  query = fetch("https://us-central1-noodle-66d8d.cloudfunctions.net/getLlama3Response",
			{method: "POST",
				body: JSON.stringify(nooldeOBJ),
				mode: "cors"
			})
			.then(res => res.json())

	return query;
}