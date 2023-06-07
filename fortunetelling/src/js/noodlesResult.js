window.addEventListener('DOMContentLoaded', init);

import { getHoroscope, getNoodleData } from './genHoroscope.js';


/**
 * On load function,
 * use localStorage to get the quiz result and display the corresponding noodle
 */
async function init() {
    const image = document.getElementById("noodleImg");
    let noodle = localStorage.getItem('noodle');
    image.setAttribute('src', noodle);

    const noodleDescription = document.getElementById("noodleDescription");
    const quizResult = document.getElementById("quizResult");
    let noodleId = localStorage.getItem('noodleIndex');
    //convert noodleId to int
    noodleId = parseInt(noodleId);
    const noodleData = await getNoodleData();
    noodleDescription.textContent = noodleData[noodleId]['personalityDescription'];
    quizResult.textContent = `Congratulations, your personality type is ${noodleData[noodleId]['noodleName']}!`;
}