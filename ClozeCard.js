// create basic constructor
function clozeCard(cloze, text) {
    this.cloze = cloze + "...";
    this.fullText = cloze + " ... " + text;
    this.partial = "..." + text;
};

//export constructor
module.exports = clozeCard;