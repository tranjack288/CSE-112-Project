// noodlesResults.html onload module script

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

window.addEventListener('DOMContentLoaded', init);

async function init(){
	const noodleChosen = JSON.parse(localStorage.getItem("noodleChosen"));
	
	const noodleChosenImg =  document.getElementById("chosenNoodleIMG");
	noodleChosenImg.setAttribute("src",noodleChosen.path);
	const noodleChosenText = document.getElementById("chosenNoodleName");
	noodleChosenText.textContent = noodleChosen.noodleName;

	let backendRecipe = await getBackendRecipe(noodleChosen);
	
	let recipeTextBackend =  backendRecipe["response"];
	let recipeJustText = recipeTextBackend;
	//console.log(recipeTextBackend);
	recipeTextBackend = turnRecipeIntoHTML(recipeTextBackend);
	const recipeText = document.getElementById("recipeText");
	recipeText.innerHTML = recipeTextBackend;
	//grab descrition and send to DALLE
	let DescriptionsIndex = recipeJustText.indexOf("Description");
	let DirectionsIndex = recipeJustText.indexOf("Directions");
	recipeJustText = " just the food " + recipeJustText.slice(DescriptionsIndex,DirectionsIndex);
	
	console.log(recipeJustText);
	let generatedImage = await getGeneratedImage(recipeJustText);
	console.log(JSON.stringify(generatedImage));
	noodleChosenImg.setAttribute("src", (generatedImage));
}
async function getGeneratedImage(descriptionInput){
	let  query = fetch("https://us-central1-noodle-66d8d.cloudfunctions.net/getDallEResponse",
			{method: "POST",
				body: JSON.stringify({"description": `${descriptionInput.slice(0,30)}`}),
				mode: "cors"
			})
			.then(res => res.json())
			.then(data => { return data["url"];});

			return query;
}
/**
 *  and converts the text from the backend recipe into the corresponding html.
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
 * grbas the recipe from llama3 ednpoint
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