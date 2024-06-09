# Workplan for June 3 2024

## What we worked on last week:

We worked on more front end tasks and set up the backend to handle sending the noodle and the desired ingredients. Currently majority of the frontend is done. We spent some time deciding if we wanted to allow invalid igredients such as bricks and cars. We decided to not allow this and to filter it out. To keep things simple, we decided to just structure the gpt query to ignore invalid ingredients. 


1. **DONE:**
    1. [Create a prompt where the user can override a valid ingredient](https://github.com/tranjack288/CSE-112-Project/issues/20): We are not filtering the ingredient put in by the user. We will just ask gpt to ignore any invalid items
    2. [Fix layout of the questionnaire when screen is minimized i.e on mobile](https://github.com/tranjack288/CSE-112-Project/issues/26): adjusted some css to ensure it is better on PC and on mobile


2. **IN PROGRESS:**
    1. [Connect the front end and backend](https://github.com/tranjack288/CSE-112-Project/issues/30): The basic structure has been set up, but the logic and consensus for how to communicate needs to be set up
    2. [Redesign result page to show generated recipe and image](https://github.com/tranjack288/CSE-112-Project/issues/7): Added the final page, but with placeholders. Also fixed the alignment when showing questions. 

## What to work on this week:
 
We are done for the most part, but there are some final touches that need to be added. The final connection to the back and front end needs to be done. Some optimizations such as compressing images and stuff are to be done. If time permits we will spent more time polishing the product. 

1. **TO FINISH**
    1. [Connect the front end and backend](https://github.com/tranjack288/CSE-112-Project/issues/30): Complete the query to GPT and Dalle, standardize the way the backend and front end share information
    2. [Redesign result page to show generated recipe and image](https://github.com/tranjack288/CSE-112-Project/issues/7): connect with the backend to send the data and display the results

2. **NEW TASKS** 
    1. [Rework the animations and transitions](https://github.com/tranjack288/CSE-112-Project/issues/4): rework to make it pretty
    2. [Make API calls to generate recipe and image](https://github.com/tranjack288/CSE-112-Project/issues/12): set up the actual api calls
    3. [Get API key](https://github.com/tranjack288/CSE-112-Project/issues/13)
    3. [Replace the name and profile pics on about us page ](https://github.com/tranjack288/CSE-112-Project/issues/15)





