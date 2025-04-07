function sum(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

function multiply(numbers) {
    return numbers.reduce((acc, num) => acc * num, 1);
}

const numbers = [1, 2, 3, 4];
document.writeln("Sum: " + sum(numbers));
document.writeln("Product: " + multiply(numbers));
