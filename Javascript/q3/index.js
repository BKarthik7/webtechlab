var c = prompt("Enter char", 'a');
function isVowel(char) {
    switch (char.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
        default:
            return false;
    }
}
if (isVowel(c)) {
    document.writeln("True")
}
else {
    if (c.length === 1) {
        document.writeln("False");
    }
    else {
        document.writeln("not a charecter");

    }
}