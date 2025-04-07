const count = parseInt(prompt("How many random numbers do you wish to generate?"), 10);

if (isNaN(count) || count <= 0) {
    document.writeln("Invalid input. Please enter a positive number.");
} else {
    const numbers = Array.from({ length: count }, () => Math.random());
    const average = numbers.reduce((sum, num) => sum + num, 0) / count;

    document.writeln("Generated numbers: " + numbers.join(", ") + "<br>");
    document.writeln("Average: " + average);
}
