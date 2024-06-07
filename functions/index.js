/* eslint-disable indent */

const functions = require("firebase-functions");

require("dotenv").config();

const Groq = require("groq-sdk");
const groq = new Groq({apiKey: process.env.GROQ_API_KEY});

const OpenAI = require("openai");
const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

/*
* Handler for making a request to Groq using Llama3 for generating a recipe
* using the ingredients specified in the user input
*/
exports.getLlama3Response = functions.https.onRequest(async (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");

    // Handle ingredients from req here
    const body = JSON.parse(req.body);
    console.log(body);

    const prompt = `Create a ${body["noodleName"]} recipe 
                    that makes ${body["servings"]} servings 
                    strictly from the following ingredients and using only 
                    ingredients that are edible: ${body["ingredient"]}. 
                    Also, give a short description including the name of the 
                    recipe and its ingredients. 
                    Format the response strictly as: 
                    Name: [Name of Bowl]
                    Ingredients: [List of ingredients]
                    Description: [Description]
                    Directions: [Directions as a numbered list]`;

    try {
        // Send a request to Groq API
        const llamaResponse = await groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
            model: "llama3-8b-8192",
        });

        // Return the generated recipe
        res.status(200).json({"response":
            llamaResponse.choices[0].message.content});
    } catch (err) {
        console.log(err.response);
        console.log(err.message);
        res.status(404).json({"error": "An error occurred"});
    }
});

/*
* Handler for making a request to DallE using the generated recipe description
* to generate an image
*/
exports.getDallEResponse = functions.https.onRequest(async (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");

    // Parse user input
    const body = JSON.parse(req.body);
    const description = body.description;

    // Make the call to DallE API
    try {
        const response = await openai.images.generate({
            // Able to change specifications
            model: "dall-e-2",
            prompt: description,
            n: 1,
            size: "256x256",
        });

        res.status(200).json({"url": response.data[0].url});
    } catch (err) {
        console.log(err.response);
        console.log(err.message);
        res.status(404).json({"error": "An error occurred"});
    }
});
