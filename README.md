# NoodleCraft
NoodleCraft helps you decide what to cook by generating customizable noodle recipes. It helps filter a specific recipe of noodle like ramen, spaghetti, udon, pad thai, etc. based on attributes like your budget, time commitment, and any cultural preferences (ex. Italian vs Asian). For each noodle type, it will present you with a default list of ingredients that you are free to add or subtract from. Once the type of noodle and lists of ingredients are finalized, the website will leverage GenAI to generate a recipe conforming to your specifications. 

### Background
This website is a rework/extention of a previous project [NoodleHoroscope](https://github.com/cse110-sp23-group15/cse110-sp23-group15). We decided to replace the original functionality of the website, asking personality questions to assign the user a noodle, to instead help the user decide what noodle recipe to cook. 

### Code Setup
All frontend code is under the `/fortunetelling` directory. The backend is reliant on Firebase for website hosting, and API calls to GenAIs. Since Firebase projects cannot be shared, additional development will require new a new Firebase project. Setup instructions for Firebase and Firebase hosting can be found [here](https://firebase.google.com/docs/hosting/quickstart). Firebase Scripts for Firebase functions to call GenAIs are in `/functions/index.js`, instructions to apply them to your new project can be found [here](https://firebase.google.com/docs/functions).

You will then likely need to edit names in `noodleResults.js` and `genHoroscope.js` under `/fortunetelling/src/js` to accomodate your project.

### About Us
We are a group of UCSD students tasked to upgrade and enhance a pre-existing project. Learn more about us [here](https://noodlecraft.web.app/src/pages/about.html)!

Check out a video about the making of this project [here](https://youtu.be/9eJtKIJAeLo)
