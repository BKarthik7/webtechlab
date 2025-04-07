const lexicon = {
    "merry": "god",
    "christmas": "jul",
    "and": "och",
    "happy": "gott",
    "new": "nytt",
    "year": "år"
};

function translateToSwedish(text) {
    return text.split(' ').map(word => lexicon[word.toLowerCase()] || word).join(' ');
}

const input = prompt("Enter your Christmas card text in English:", "Merry Christmas and Happy New Year");
document.writeln("Translated text: " + translateToSwedish(input));
