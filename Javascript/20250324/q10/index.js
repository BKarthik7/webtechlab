function charFreq(str) {
    const frequency = {};
    for (const char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
}

const input = prompt("Enter a string:");
const result = charFreq(input);
document.write(`<pre>${JSON.stringify(result, null, 2)}</pre>`);
