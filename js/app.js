'use strict'
let points = 0;
let name = prompt("What's your name??");
while(!name){
    name = prompt("ENTER YOUR NAME!! :)")
}

alert(name.toUpperCase()+"!!\nReady or not here we go");
alert("y/n or yes/no responses only!!\nElse you won't git a point.")

question1();
question2();
question3();
question4();
question5();
question6();
question7();

function question1(){
let q1 = prompt("Do you think I'm older than 25?").toLowerCase();
if(q1 == "yes" || q1 == "y"){ 
    alert("False"); 
    console.log("False");
} else if(q1 == "no" || q1 == "n"){ 
    alert("True");
    console.log("True");
    points++;
}
}

function question2(){
let q2 = prompt("Do you think I'm taller than 1.70?").toLowerCase();
if(q2 == "yes" || q2 == "y"){
    alert("True");
    console.log("True");
    points++;
} else if(q2 == "no" || q2 == "n"){ 
    alert("False"); 
    console.log("False");
}
}

function question3(){
let q3 = prompt("Do you think I love video games?").toLowerCase();
if(q3 == "yes" || q3 == "y"){
    alert("True");
    console.log("True");
    points++;
} else if(q3 == "no" || q3 == "n"){ 
    alert("False"); 
    console.log("False");
}
}

function question4(){
let q4 = prompt("Do you think my hair is brown?").toLowerCase();
if(q4 == "yes" || q4 == "y"){ 
    alert("False"); 
    console.log("False");
} else if(q4 == "no" || q4 == "n"){ 
    alert("True");
    console.log("True");
    points++;
}
}

function question5(){
let q5 = prompt("Lastly Do you think i can solve a rubix cube?").toLowerCase();
if(q5 == "yes" || q5 == "y"){
    alert("True");
    console.log("True");
    points++;
} else if(q5 == "no" || q5 == "n"){ 
    alert("False"); 
    console.log("False");
}
}

function question6(){
alert("Lets play rock paper scissors.");
for(let chances = 4; chances>0; chances--){
    let userChoice = Number(prompt("Chances : "+chances+"\nChoice one as a number:\n1.Rock\n2.Paper\n3.Scissors"));
    while(!userChoice || userChoice < 1 || userChoice > 3){
        alert("Choice one as a number from the lest.");
        userChoice = Number(prompt("Chances : "+chances+"\nChoice one as a number:\n1.Rock\n2.Paper\n3.Scissors"));
    }
    let myChoice = Math.floor(Math.random()*3)+1;
    if(userChoice == myChoice){
        alert("It's a tie.")
    }else if(userChoice == 1){
        if(myChoice == 3){
            alert("You win")
            points++;
            break;
        }else{
            alert("I win")
        }
    }else if(userChoice == 2){
        if(myChoice == 1){
            alert("You win")
            points++;
            break;
        }else{
            alert("I win")
        }
    }
    else if(userChoice == 3){
        if(myChoice == 2){
            alert("You win")
            points++;
            break;
        }else{
            alert("I win")
        }
    }
}
}

function question7(){
let list = ["LAID-BACK CAMP","JUJUTSU KAISEN","MY HERO ACADEMIA","ODD TAXI","SK8 THE INFINITY","Naruto","HORIMIYA","One Punch Man","Dororo","Pokémon"];
let Rlist = ["JUJUTSU KAISEN","Naruto","One Punch Man"];

for(let i = 6; i > 0;i--){
    let q7 = prompt("Chances : "+ i +"\nGuess an anime that I finished from the lest:"+"\n-"+list[0]+"\n-"+list[1]+"\n-"+list[2]+"\n-"+list[3]+"\n-"+list[4]+"\n-"+list[5]+"\n-"+list[6]+"\n-"+list[7]+"\n-"+list[8]+"\n-"+list[9]);
    while(!q7){
        alert("Choice one from the lest.");
        q7 = prompt("Chances : "+ i +"\nGuess an anime that I finished from the lest:"+"\n-"+list[0]+"\n-"+list[1]+"\n-"+list[2]+"\n-"+list[3]+"\n-"+list[4]+"\n-"+list[5]+"\n-"+list[6]+"\n-"+list[7]+"\n-"+list[8]+"\n-"+list[9]);
    }
    let b;
    for(let x = 0; x < Rlist.length; x++){
        if(q7 === Rlist[x]){
            b = true;
            break;
        }else{
            b = false
        }
    }
    if (b == true){
        alert("Your Right");
        points++;
        break;
    }
}
}
alert(name+", your score is "+points+" out of 7");
