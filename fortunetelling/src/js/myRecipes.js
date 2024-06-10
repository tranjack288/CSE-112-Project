// myRecipes.html onload module script

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html

window.addEventListener('DOMContentLoaded', init);

/** On load function */
function init() {
    // Read from localStorage to get myRecipes
    const myRecipesMapArr = JSON.parse(localStorage.getItem('myRecipes'));
    const myRecipesMap = new Map(myRecipesMapArr);
    const recipesGrid = document.getElementById('recipes-grid');

    // Create delete-button elements
    for (let [key, noodleObj] of myRecipesMap){
        let noodleName = noodleObj['noodleName'];
        let imgPath = noodleObj['imgPath'];
        let defaultImgPath = noodleObj['defaultImgPath'];
        let recipesButton = `
            <a href = "./oldRecipe.html?noodleId=${key}" class="recipes-button">
                <div>
                    <img src="${imgPath}" alt="noodle image" onerror="this.onerror=null;this.src='${defaultImgPath}'" ></img>
                    <h3>${noodleName}</h3>
                </div>
                <button class="delete-button" data-value="${key}">
                    <svg width="25" height="28" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.41346 0V1.66667H0V5H1.68269V26.6667C1.68269 27.5507 2.03726 28.3986 2.66839 29.0237C3.29952 29.6488 4.15552 30 5.04808 30H21.875C22.7676 30 23.6236 29.6488 24.2547 29.0237C24.8858 28.3986 25.2404 27.5507 25.2404 26.6667V5H26.9231V1.66667H18.5096V0H8.41346ZM5.04808 5H21.875V26.6667H5.04808V5ZM8.41346 8.33333V23.3333H11.7788V8.33333H8.41346ZM15.1442 8.33333V23.3333H18.5096V8.33333H15.1442Z" fill="black"></path>
                    </svg>	
                </button>						
            </a>
        `;
        recipesGrid.insertAdjacentHTML('beforeend', recipesButton);
    }

    // Delete Button event listener
    const deleteButtons = document.querySelectorAll('.delete-button');
    for(let i=0; i<deleteButtons.length; i++){
        deleteButtons[i].addEventListener('click', (event)=>{
            event.preventDefault(); 

            // Remove recipe entry in localstorage
            let noodleID = deleteButtons[i].dataset.value;
            myRecipesMap.delete(noodleID);
            let myRecipesMapArr = Array.from(myRecipesMap);
            localStorage.setItem('myRecipes', JSON.stringify(myRecipesMapArr));

            // Remove html element from the page
            let recipesButton = deleteButtons[i].parentNode;
            recipesGrid.removeChild(recipesButton);
        });
    }

    
}