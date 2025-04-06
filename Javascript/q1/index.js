function max(a, b) {
    return a > b ? a : b;
}

const a = parseInt(prompt("Enter a number 1 :", 0));
const b = parseInt(prompt("Enter a number 2 :", 0));

const ans = max(a, b);

document.writeln("Greater is " + ans);