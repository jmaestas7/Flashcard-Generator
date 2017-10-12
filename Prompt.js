let inquirer = require("inquirer");
var clozeCard = require("./ClozeCard.js");
var basicCard = require("./BasicCard.js");

var cards = [];

function createCard() {
    inquirer
    .prompt([
    // Here we create the text prompt for the kind of card to be created.
        {
        type: "list",
        message: "What kind of Flashcard would you like to make?",
        choices: ["Basic", "Cloze", "Display cards"],
        name: "kind"
        }
    ]).then(function(response) {
        if (response.kind === "Basic") {
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What do you want to be displayed on the fornt of the card?",
                        name: "front"
                    },
                    {
                        type: "input",
                        message: "What do you want to be displayed on the back of the card?",
                        name: "back"
                    }
                ]).then(function(answers) {
                    var card = new basicCard(
                    answers.front,
                    answers.back);
                    cards.push(card);
                    createCard();
                })
        }
        if (response.kind === "Cloze") {
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What do you want to be displayed as the cloze statement?",
                        name: "front"
                    },
                    {
                        type: "input",
                        message: "What do you want to be displayed as the partial statement?",
                        name: "back"
                    }
                ]).then(function(answers) {
                    var card = new clozeCard(
                    answers.front,
                    answers.back);
                    cards.push(card);
                    createCard();
                })
        }
        if (response.kind === "Display cards") {
            for (var i = 0;i < cards.length; i++) {
                if (cards[i].constructor.name == "basicCard") {
                    console.log("Card " + [i] + " | " + cards[i].front + " ... " + cards[i].back);
                }
                if (cards[i].constructor.name == "clozeCard") {
                    console.log("Card " + [i] + " | " + cards[i].fullText);
                }
            }
            createCard();
        }
    });
};

createCard();