/** On load function */
function init() {
    let surveyResults = localStorage.getItem('surveyResults')
    console.log("opening noodleOptions with " + surveyResults);

    for (let i = 0; i < 4; i++){
        let currentNoodle = surveyResults[0];
        console.log(currentNoodle.noodleName);
        console.log(currentNoodle.path);
    }

}

document.addEventListener('DOMContentLoaded', init);