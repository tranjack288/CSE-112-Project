document.addEventListener('DOMContentLoaded', init);

/** On load function */
function init() {
    let surveyResults = localStorage.getItem('surveyResults')
    let surveyResultsJSON = JSON.parse(surveyResults);

    

    let noodleImg1 = document.createElement("img");
    let noodleImg2 = document.createElement("img");
    let noodleImg3 = document.createElement("img");
    let noodleImg4 = document.createElement("img");

    noodleImg1.src = surveyResultsJSON[0].path
    noodleImg2.src = surveyResultsJSON[1].path
    noodleImg3.src = surveyResultsJSON[2].path
    noodleImg4.src = surveyResultsJSON[3].path

    //this block of code sets the names of the 4 grid items
    let noodleElement1 = document.getElementById("grid-item1")
    noodleElement1.appendChild(noodleImg1);
    noodleElement1.querySelector("h3").textContent = surveyResultsJSON[0].noodleName;

    let noodleElement2 = document.getElementById("grid-item2")
    noodleElement2.appendChild(noodleImg2);
    noodleElement2.querySelector("h3").textContent = surveyResultsJSON[1].noodleName;

    let noodleElement3 = document.getElementById("grid-item3");
    noodleElement3.appendChild(noodleImg3);
    noodleElement3.querySelector("h3").textContent = surveyResultsJSON[2].noodleName;

    let noodleElement4 = document.getElementById("grid-item4")
    noodleElement4.appendChild(noodleImg4);
    noodleElement4.querySelector("h3").textContent = surveyResultsJSON[3].noodleName;

    //this initializes first box to be pre-selected - the function returns true if a box is currently selected
    let noodleSelected = changeSelected(noodleElement1);


    noodleElement1.addEventListener("click", () => {//we'd pass these in local storage to ingredients page 
        console.log("noodleElement1 was clicked, Noodle: " + JSON.stringify(surveyResultsJSON[0]));
        noodleSelected = changeSelected(noodleElement1);})

    noodleElement2.addEventListener("click", () =>{
         console.log("noodle element2 was clicked, Noodle: " + JSON.stringify(surveyResultsJSON[1]));
         noodleSelected = changeSelected(noodleElement2);});

    noodleElement3.addEventListener("click", () => {
         console.log("noodleelement 3 was clicked, Noodle: " + JSON.stringify(surveyResultsJSON[2]));
         noodleSelected = changeSelected(noodleElement3);});

    noodleElement4.addEventListener("click", () => {
         console.log("noodle element 4 was clicked, Noodle: " + JSON.stringify(surveyResultsJSON[3]));
         noodleSelected = changeSelected(noodleElement4);});

function changeSelected(gridItem){
     if (typeof changeSelected.currentlySelected === 'undefined') {
          // Initialize the first square to be pre-selected on init
          //or change currentlySelected to just clicked one if no square is currently clicked
          changeSelected.currentlySelected = gridItem;
          gridItem.style.backgroundColor = '#bb1212';
          console.log("blank, selecting " + gridItem)
          return true;}
     else if (gridItem == changeSelected.currentlySelected){
          //if item is reclicked, set grid back to all unselected.
          changeSelected.currentlySelected = undefined;
          gridItem.style.backgroundColor = 'white';
          console.log("unselecting" + gridItem);
     return false;}
     else { //this means one box is currently selected and we click on another box
          changeSelected.currentlySelected.style.backgroundColor = 'white';
          changeSelected.currentlySelected = gridItem;
          gridItem.style.backgroundColor = "#bb1212";
          console.log("switching to " + gridItem)
          return true;}
          
}



    //this makes it so the confirm button will only save chosen noodle to storage and switch pages if a noodle is currently selected
    

}

document.addEventListener('DOMContentLoaded', init);