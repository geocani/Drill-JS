// EXERCICE 1 & 2

let nom = "Canivet";
let prenom = "Geoffrey";
let ville = "Charleroi";

// alert("Nom: " + nom + "\n" + "Prénom: " + prenom + "\n" + "Ville: " + ville);

// EXERCICE 3 & 4 

// let age = prompt("Quel est votre age?");
// let genre = prompt("quel est votre genre?")
// let couleur = prompt("quel est votre couleur pref?")

// alert("Age: " + age + "\n" + "Genre: " + genre + "\n" + "Couleur: " + couleur);

// EXERCICE 5
// let nb1 = 8.8;
// let nb2 = 9.9;

// alert(Math.ceil(nb1) * nb2);

// EXERCICE 6

// EXERCICE 7
let pointure = prompt("pointure");
let date = prompt("date");
let maFonction = () =>{
    pointure * 2;
    pointure + 5;
    pointure * 50;
    pointure - date;
    pointure + 1776;
    console.log(pointure);
}
maFonction();

// EXERCICE 8

let ages = prompt("age");

if (ages >= 18) {
    alert("Tu es majeur");
}else{
    alert("Tu es mineur");
}