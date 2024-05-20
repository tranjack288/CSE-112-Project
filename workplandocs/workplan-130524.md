# Workplan for Thursday, May 13 2024

## What we worked on this week:
Most of the work done this week was setting up and getting used to our codebase. The backend team explored ways to host this somwhere else we can have a backend. The frontend team started working on making changes to the website.

1. **DONE**
    1. [Remove old files that are not related to this project](https://github.com/tranjack288/CSE-112-Project/issues/1): deleted the unwanted file(noodle profile page), Changed some names of the website(Tasty Noodles, take a quiz, etc)
    2. [Rework Landing Page](https://github.com/tranjack288/CSE-112-Project/issues/18): reposition the noodle icon, added title and new buttons and reposition the layout of the whole front page (updated in the removing unwanted file branch)
    3. [Redesign the UI layout for index.html](https://github.com/tranjack288/CSE-112-Project/issues/3): 
        - Redesign the UI into the new 2 column layout, according to figma design
        - Add new title, descriptions and button to the questionnaire page
        - Change the chat button and the text-output position order
        - Apply visual changes to the chat button, and the text-output
        - Adjust the size and position of the chat box to fit the new design
        - Fix the buggy eye tracking animation
        - Fix the noodle flying out order
    4. [Change survey questions](https://github.com/tranjack288/CSE-112-Project/issues/5): Changed previous "fortune telling" question into more solid questions. The purpose of this is to figure out what noodle is best for the person based on budget, time to cook, number of ingredients, etc.
    5. ~~[Redesign the intro page user flow](https://github.com/tranjack288/CSE-112-Project/issues/14)~~: This was an unnecessary task as there was no flow to change, this task was just marked as completed.
    6. [Setup/Host database ](https://github.com/tranjack288/CSE-112-Project/issues/9): Using Firebase functions for API calls. Allows the front end to send HTTP requests to Firebase where Firebase can then react with JS code to call GPT and Dall-E which lets us keep the API keys for GPT and Dall-E secured and separated from the front end.


## Plan for next week:

Most tasks for next week are to flesh out most of the websites design.

1. **NEW TASKS**  
    1. [Redesign result page to show generated recipe and image](https://github.com/tranjack288/CSE-112-Project/issues/7)
    2. [Implement page to list and modify potential noodle ingredients](https://github.com/tranjack288/CSE-112-Project/issues/6)
    3. [Define a list of default ingredients for each noodle](https://github.com/tranjack288/CSE-112-Project/issues/10)
    4. [Define valid ingredients for user inputs](https://github.com/tranjack288/CSE-112-Project/issues/11)
    5. [Get API key](https://github.com/tranjack288/CSE-112-Project/issues/13)
    6. [Make API calls to generate recipe and image](https://github.com/tranjack288/CSE-112-Project/issues/12)