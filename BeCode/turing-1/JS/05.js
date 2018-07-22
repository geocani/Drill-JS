//EXERCICE 1:
// let tab = ["un", "deux", 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i <= tab.length; i++){
//     console.log(tab[i]);
// }

//EXERCICES 2 :
let tabActeurs = ["acteur un", "acteur deux", "acteur trois"];
for (let i = 0; i <tabActeurs.length; i++ ){
    console.log(tabActeurs[i]);
}
//EXERCICES 3 :
let tabPerso = ["Mario", "Luigi", "Peach"];
let tabPersoClone = tabPerso.slice();
tabPersoClone.push("Bowser");
console.log(tabPersoClone[3]);