document.addEventListener('DOMContentLoaded', init);

/** On load function */
function init() {
    let surveyResults = localStorage.getItem('surveyResults')
    console.log("opening noodleOptions with " + surveyResults);

    for (let i = 0; i < 4; i++){
        let currentNoodle = surveyResults[3];
        console.log(currentNoodle);

        //document.getElementsByTagName("noodleGridContainer")[i].src = currentNoodle.
        //let elem1 = document.getElementsByTagName("noodleGridContainer")[0].id;
        
    }

    //let elem1 = document.getElementsByTagName("grid-item1").id;


}

document.addEventListener('DOMContentLoaded', init);