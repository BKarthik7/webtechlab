const a = parseInt(prompt("Enter a number 1 :", 0));
const b = parseInt(prompt("Enter a number 2 :", 0));
const c = parseInt(prompt("Enter a number 3 :", 0));

var ans;
if(a > b){
    if(a > c){
        ans = a;
    }
    else{
        ans = c;
    }
}
else{
    if(b > c){
        ans = b;
    }
    else{
        ans = c;
    }
}

document.writeln("Ans is " + ans)