let names = [];
let input;

while (true) {
    input = prompt("Enter a name (or click cancel to finish):");
    if (input === null) break;
    if (input.trim() !== "") names.push(input.trim());
}

if (names.length > 0) {
    names.sort();
    console.log("Ordered List of Names:");
    names.forEach((name, index) => {
        console.log(`${index + 1}. ${name}`);
    });
} else {
    console.log("No names were entered.");
}
