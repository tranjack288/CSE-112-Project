// ingredients.html onload module script

// Make sure to document our code
// See examples:
// - https://jsdoc.app/howto-es2015-modules.html
// - https://jsdoc.app/howto-es2015-classes.html


window.addEventListener('DOMContentLoaded', init);

/** On load function */
async function init() {
    // read from localStorage to get the selected noodle
    const noodleChosen = localStorage.getItem('noodleChosen');
    const noodleChosenJSON = JSON.parse(noodleChosen);
    const noodleChosenImg = noodleChosenJSON.path;
    const noodleChosenName = noodleChosenJSON.noodleName;
    const noodleChosenIngredients = noodleChosenJSON.ingredients;

    // The div container for all noodle ingredients
    let ingredientsContainer = document.getElementById('ingredients-container');
    let ingredientElesArr = []; // Array of noodle-ingredient custom elements
    let allIngredients = {}; // Object(map) to keep track of all current ingredients

    // read from the array of ingredients and populate the allIngredients Object(map)
    for(let i = 0; i < noodleChosenIngredients.length; i++){
        allIngredients[noodleChosenIngredients[i]] = true;
    }

    // Change the noodle Image and noodle name
    const noodleImgs = document.querySelectorAll('.noodleImg');
    const noodleNames = document.querySelectorAll('.noodleName');

    noodleImgs[0].src = noodleChosenImg;
    noodleImgs[1].src = noodleChosenImg;
    noodleNames[0].innerText = noodleChosenName;
    noodleNames[1].innerText = noodleChosenName;


    /**
     * Helper function to create the custom element noodle-ingredient
     * @param {String} ingredientName name of the ingredient
     * @returns {Object} NoodleIngredient a custom HTML element/a JS object
     */
    function createNoodleIngredientEle(ingredientName){
        let NoodleIngredient = document.createElement('noodle-ingredient');
        NoodleIngredient.data = String(ingredientName);
        ingredientsContainer.appendChild(NoodleIngredient);
        ingredientElesArr.push(NoodleIngredient);
        return NoodleIngredient;
    }

    /**
     * Helper function of add eventListener to noodle-ingredient 
     * Once the trash/redo button is clicked the corresponding boolean value in 
     * allIngredients will be changed
     * @param {Object} NoodleIngredientEle 
     */
    function addEventListenerToNoodleIngredientEle(NoodleIngredientEle){
        NoodleIngredientEle.addEventListener('toggleIngredient', function() {
            let ingredientStatus = allIngredients[NoodleIngredientEle.data];
            if(ingredientStatus === true){
                allIngredients[NoodleIngredientEle.data] = false;
            }else{
                allIngredients[NoodleIngredientEle.data] = true;
            }
            NoodleIngredientEle.classList.toggle('grayedOut');
            console.log(allIngredients);
        });
    }


    // Loop through all ingredients
    // For each ingredient create a custom element in HTML, 
    // and add to the ingredients array
    for (let ingredient in allIngredients){
        if (allIngredients.hasOwnProperty(ingredient)) {
            createNoodleIngredientEle(ingredient);    
        }
    }

    // Loop through all Custom components <noodle-ingredient> to apply event listeners
    // When delete button is clicked make the cooresponding ingredent in allIngredients
    for(let i = 0; i < ingredientElesArr.length; i++){
        addEventListenerToNoodleIngredientEle(ingredientElesArr[i]);
    }


    // Number of servings
    let minusBtn = document.getElementById('minus');
    let plusBtn = document.getElementById('plus');
    let servingCounts = document.querySelector('#quantitySelector p');

    let numServings = 1;
    plusBtn.addEventListener('click', function(){
        numServings++;
        servingCounts.innerHTML = numServings;
        if(numServings > 1){
            minusBtn.disabled = false;
            minusBtn.classList.remove('disable');
        }
    });
    minusBtn.addEventListener('click', function(){
        numServings--;
        servingCounts.innerHTML = numServings;
        if(numServings <= 1){
            minusBtn.disabled = true;
            minusBtn.classList.add('disable');
        }
    });


    // Add new ingredients
    let addIngredientForm = document.getElementById('addIngredientForm');
    addIngredientForm.addEventListener('submit', function(event){
        event.preventDefault();
        let newIngredient = event.target.addedIngredient.value; // get input data
        allIngredients[newIngredient] = true; // add to allIngredients Obj
        let newIngredientEle = createNoodleIngredientEle(newIngredient); // create new custome element
        addEventListenerToNoodleIngredientEle(newIngredientEle); // add eventListener to new custome element
    });


    // Confirm Button, when the confirm button is clicked,
    // store all the ingredients to localStorage
    let confirmBtn = document.getElementById('confirm-button');
    let confirmedIngredients = {}
    confirmBtn.addEventListener('click', function(){
        if(window.confirm('Do you want to create a noodle recipe with all the current ingridents?')){
            let validIngredientsArr = [];
            for(let ingredient in allIngredients){
                if(allIngredients[ingredient] === true){
                    validIngredientsArr.push(ingredient);
                }
            }
            confirmedIngredients.noodleName = noodleChosenName;
            confirmedIngredients.servings = numServings;
            confirmedIngredients.ingredients = validIngredientsArr;
            localStorage.setItem('confirmedIngredients', JSON.stringify(confirmedIngredients));    
            window.location.href="./noodlesResults.html";
        }        
    })
}