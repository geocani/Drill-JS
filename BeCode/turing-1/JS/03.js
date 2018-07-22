
// FONCTIONS
// -
let fSoustraction = function(a, b){
    console.log(a - b);
}
fSoustraction(10, 8);
// /
let fDivision = function(a, b){
    console.log(a / b);
}
fDivision(12, 3);
// *
let fMulti = function(a, b){
    console.log(a * b);
}
fMulti(3, 3);
// %
let fPourCent = function(a, b){
    console.log((a * b)/100);
}
fPourCent(100, 50);
// KM/H
let fKmH = function(a, b){
    return (a / b);
}
console.log("je fais " +fKmH(100, 4)+" km/h");