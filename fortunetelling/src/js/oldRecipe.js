// oldRecipe.html onload module script

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

window.addEventListener('DOMContentLoaded', init);

function init() {
    // Get noodle Id from the query string
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const noodleId = urlParams.get('noodleId');

    // Get noodle recipe object from localstorage
    const myRecipesMapArr = JSON.parse(localStorage.getItem('myRecipes'));
    const myRecipesMap = new Map(myRecipesMapArr);
    const recipeObj = myRecipesMap.get(noodleId);

    // Get the content from the recipe object
    const noodleImgPath = recipeObj.imgPath;
    const noodleName = recipeObj.noodleName;
    const recipeText = recipeObj.recipe;

    // Add noodle name and image to the page
    const noodleImgs = document.querySelectorAll('.noodleImg');
	const noodleNames = document.querySelectorAll('.noodleName');
	noodleImgs[0].src = noodleImgPath;
    noodleImgs[1].src = noodleImgPath;
    noodleNames[0].innerText = noodleName;
    noodleNames[1].innerText = noodleName;

    // Add noodle recipe to the page
    const recipeTextEle = document.getElementById("recipeText");
    recipeTextEle.innerHTML = recipeText;
}