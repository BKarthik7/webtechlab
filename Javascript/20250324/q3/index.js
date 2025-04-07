function isVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char.toLowerCase());
}

var c = prompt("Enter char", 'a');

if (isVowel(c)) {
    document.writeln("True");
} else {
    if (c.length === 1) {
        document.writeln("False");
    } else {
        document.writeln("not a character");
    }
}