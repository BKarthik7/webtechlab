function translate(text) {
    return text.split('').map(char => {
        if (!isVowel(char) && /[a-z]/i.test(char)) {
            return char + 'o' + char;
        }
        return char;
    }).join('');
}

function isVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char.toLowerCase());
}

const input = prompt("Enter text to translate:", "this is fun");
document.writeln("Translated text: " + translate(input));
