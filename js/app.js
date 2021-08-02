'use strict'
let name = prompt("What's your name??");
while(name == null || name == ""){
    name = prompt("ENTER YOUR NAME!! :)")
}

alert(name.toUpperCase()+"!!\nReady or not here we go");
alert("y/n or yes/no responses only!!\nElse you won't git a point.")
let points = 0;
let q1 = prompt("Do you think I'm older than 25?");
q1 = q1.toLowerCase();
if(q1 == "yes" || q1 == "y"){ 
    alert("False"); 
    console.log("False");
} else if(q1 == "no" || q1 == "n"){ 
    alert("True");
    console.log("True");
    points++;
}

let q2 = prompt("Do you think I'm taller than 1.70?");
q2 = q2.toLowerCase();
if(q2 == "yes" || q2 == "y"){
    alert("True");
    console.log("True");
    points++;
} else if(q2 == "no" || q2 == "n"){ 
    alert("False"); 
    console.log("False");
}

let q3 = prompt("Do you think I love video games?");
q3 = q3.toLowerCase();
if(q3 == "yes" || q3 == "y"){
    alert("True");
    console.log("True");
    points++;
} else if(q3 == "no" || q3 == "n"){ 
    alert("False"); 
    console.log("False");
}

let q4 = prompt("Do you think my hair is brown?");
q4 = q4.toLowerCase();
if(q4 == "yes" || q4 == "y"){ 
    alert("False"); 
    console.log("False");
} else if(q4 == "no" || q4 == "n"){ 
    alert("True");
    console.log("True");
    points++;
}

let q5 = prompt("Lastly Do you think i can solve a rubix cube?");
q5 = q5.toLowerCase();
if(q5 == "yes" || q5 == "y"){
    alert("True");
    console.log("True");
    points++;
} else if(q5 == "no" || q5 == "n"){ 
    alert("False"); 
    console.log("False");
}

alert(name+", your score is "+points);
