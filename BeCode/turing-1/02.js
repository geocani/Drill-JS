//EXERCICE 1 :
let langue = "fr";
let msg = ["salut le monde", "hello world", "hola mundo"];

if(langue == "fr"){
    console.log(msg[0]);
}
else if(langue == "en"){
    console.log(msg[1]);
}
else{
    console.log(msg[2]);
}

//exercice 2 :
let score = 40;
let result = ["A","B","C"];

if(score >= 90){
    console.log(result[0])
}
else if(score < 90){
    console.log(result[1])
}
else if(score <= 50){
    console.log(result[2])
}

//EXERCICE 3 :
let singulier = "pomme";
let nombre = 3;

if(nombre == 1){
    console.log("Je mange "+nombre+" pomme.");
} else {
    console.log("je mange "+nombre+" pommes.")
}