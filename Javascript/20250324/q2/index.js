function maxOfThree(a, b, c) {
    return max(max(a, b), c);
}

function max(a, b) {
    return a > b ? a : b;
}

const a = parseInt(prompt("Enter a number 1 :", 0));
const b = parseInt(prompt("Enter a number 2 :", 0));
const c = parseInt(prompt("Enter a number 3 :", 0));

const ans = maxOfThree(a, b, c);

document.writeln("Ans is " + ans);