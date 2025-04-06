function findLongestWord(words) {
    if (!Array.isArray(words)) {
        throw new Error("Input must be an array of words");
    }
    return words.reduce((maxLength, word) => Math.max(maxLength, word.length), 0);
}

const words = prompt("Enter words separated by commas:").split(",");
const longestWordLength = findLongestWord(words);
document.write("Length of the longest word: " + longestWordLength);