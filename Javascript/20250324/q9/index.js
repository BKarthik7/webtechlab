function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}

const words = prompt("Enter words separated by commas:").split(",");
const lengthThreshold = parseInt(prompt("Enter the minimum length:"), 10);

const filteredWords = filterLongWords(words, lengthThreshold);
document.write("Filtered words: " + filteredWords.join(", "));
