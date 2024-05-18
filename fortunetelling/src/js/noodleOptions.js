document.addEventListener('DOMContentLoaded', init);

/** On load function */
function init() {
    let surveyResults = localStorage.getItem('surveyResults')
    console.log("opening noodleOptions with " + surveyResults);

    let surveyResultsJSON = JSON.parse(surveyResults);

    let noodleImg1 = document.createElement("img");
    let noodleImg2 = document.createElement("img");
    let noodleImg3 = document.createElement("img");
    let noodleImg4 = document.createElement("img");

    noodleImg1.src = surveyResultsJSON[0].path
    noodleImg2.src = surveyResultsJSON[1].path
    noodleImg3.src = surveyResultsJSON[2].path
    noodleImg4.src = surveyResultsJSON[3].path

    document.getElementById("grid-item1").appendChild(noodleImg1);
    document.getElementById("grid-item2").appendChild(noodleImg2);
    document.getElementById("grid-item3").appendChild(noodleImg3);
    document.getElementById("grid-item4").appendChild(noodleImg4);


}

document.addEventListener('DOMContentLoaded', init);