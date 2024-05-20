document.addEventListener('DOMContentLoaded', init);

/** On load function */
function init() {
    let surveyResults = localStorage.getItem('surveyResults')
   // console.log("opening noodleOptions with " + surveyResults);

    let surveyResultsJSON = JSON.parse(surveyResults);

    let noodleImg1 = document.createElement("img");
    let noodleImg2 = document.createElement("img");
    let noodleImg3 = document.createElement("img");
    let noodleImg4 = document.createElement("img");

    noodleImg1.src = surveyResultsJSON[0].path
    noodleImg2.src = surveyResultsJSON[1].path
    noodleImg3.src = surveyResultsJSON[2].path
    noodleImg4.src = surveyResultsJSON[3].path

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

    noodleImg1.addEventListener("click", () => //we'd pass these in local storage to ingredients page
        console.log("noodleImg1 was clicked, Noodle: " + JSON.stringify(surveyResultsJSON[0])));
    noodleImg2.addEventListener("click", () =>
         console.log("noodleImg2 was clicked, Noodle: " + JSON.stringify(surveyResultsJSON[1])));
    noodleImg3.addEventListener("click", () =>
         console.log("noodleImg3 was clicked, Noodle: " + JSON.stringify(surveyResultsJSON[2])));
    noodleImg4.addEventListener("click", () =>
         console.log("noodleImg4 was clicked, Noodle: " + JSON.stringify(surveyResultsJSON[3])));

    

}

document.addEventListener('DOMContentLoaded', init);