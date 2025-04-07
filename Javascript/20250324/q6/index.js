function reverse(str) {
    return str.split('').reverse().join('');
}

const input = prompt("Enter text to reverse:", "jag testar");
document.writeln("Reversed text: " + reverse(input));