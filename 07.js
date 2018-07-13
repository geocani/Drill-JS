// EXERCICE 1 :
let character = {
    name: "geoffrey",
    age: 33,
    itemsToGive: ["arme un", "arme deux"]
}
for (let obj in character){
    console.log(character[obj]);
}

// EXERCICE 2 :
let aVendre = [
    armeUn = {
        title: "épée",
        physic: 30,
        magic: 20,
        minLevel: 10,
        available: true
    },
    armeDeux = {
        title: "baton",
        physic: 20,
        magic: 30,
        minLevel: 30,
        available: false
    },
    armeTrois = {
        title: "arc",
        physic: 40,
        magic: 10,
        minLevel: 10,
        available: true
    }
];
for (let ob in aVendre) {
    if (minLevel > 11 ) {
    console.log(aVendre[ob]);
    }
}

