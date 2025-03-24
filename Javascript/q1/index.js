const a = parseInt(prompt("Enter a number 1 :", 0));
const b = parseInt(prompt("Enter a number 2 :", 0));

var ans;
if(a > b){
    ans = a;
}
else{
    ans = b;
}

document.writeln("Greater is " + ans)