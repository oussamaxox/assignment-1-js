// Task 1
let a = 3;
let b = 5;
let c = null;



let output = "";

output += "alert( \"a + b: \" + " + (a + b) + " );\n";
output += "alert( \"a - b: \" + " + (a - b) + " );\n";
output += "alert( \"a * b: \" + " + (a * b) + " );\n";
output += "alert( \"a / b: \" + " + (a / b) + " );\n";
output += "alert( \"a % b: \" + " + (a % b) + " );\n";

a += b;
output += "alert( \"a += b: \" + " + a + " );\n";

a -= b;
output += "alert( \"a -= b: \" + " + a + " );\n";

a *= b;
output += "alert( \"a *= b: \" + " + a + " );\n";

a /= b;
output += "alert( \"a /= b: \" + " + a + " );\n";

a %= b;
output += "alert( \"a %= b: \" + " + a + " );\n";

output += "alert( \"a == b: \" + " + (a == b) + " );\n";
output += "alert( \"a != b: \" + " + (a != b) + " );\n";
output += "alert( \"a > b: \" + " + (a > b) + " );\n";
output += "alert( \"a < b: \" + " + (a < b) + " );\n";
output += "alert( \"!a && !c: \" + " + (!a && !c) + " );\n";
output += "alert( \"!a || !c: \" + " + (!a || !c) + " );\n";

console.log(output);


// Task 2

let $fname = "Ossama";
let $lname = "Amakrane";
let $email = "Ossama@mymail.com";
let $output = `My name is ${$fname} ${$lname}. You can contact me at ${$email}`;
console.log($output);