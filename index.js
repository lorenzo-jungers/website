/*
let firstName = "Lorenzo";
let age = 12;
let student = true;
console.log("Tudo bem ",firstName, "?");
console.log("Você tem",age,"anos.");
console.log("Você é estudante?",student);

document.getElementById("1p").innerHTML = "Ola " + firstName;

document.getElementById("2p").innerHTML = "Você tem " + age +" anos.";

document.getElementById("3p").innerHTML = "Você é estudante? " + student;

let x;
x = 3 + 12 - (5*3 - 10 )
console.log(x)
*/
let nome;
 document.getElementById("Mandar").onclick = function(){
    nome = document.getElementById("nome").value
    console.log("Seu nome é",nome)
    document.getElementById("p1").innerHTML = "Bom dia" + nome".";
 }
