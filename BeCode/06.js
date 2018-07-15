// EXERCICE 1 :
let cUn = [7, 5, -12, 6, 32, 18, 14, -2];
console.log(Math.min(...cUn));
let cDeux = [-3, 9, 21, 36, 27, 54, 17, 35]
console.log(Math.max(...cDeux));

// EXERCICE 2 :
let floatBateau = 10.4;
let couleBateau = Math.floor(floatBateau);
let voleBateau = Math.ceil(floatBateau);

//EXERCICE 3 :
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
console.log(getRandom(50, 101));
console.log(getRandom(0, 2));
console.log(getRandom(0, 11));

// EXERCICE 4 :
let persoAleatoire = ["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Reptil"];

function randomActor(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(persoAleatoire[randomActor(0, 5)]);
