let msg = ["plus grand", "plus petit", "pas un nombre"]
let essais = 0;
let min = 20;
let max = 80;

let getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }
console.log(getRandom(min, max))


let jouer = () => {
    let tentative = +prompt("nombre entre 20 et 80");
        console.log('​jouer -> tentative', tentative);
        if (tentative >= getRandom()){
            console.log("pas ok")
        }else{
            console.log('ok')
        }

}
