// EXERCICE 1 :

document.addEventListener('keydown', function(e) {
    let lettre = e.keyCode;
    // console.log(lettre)
    switch(lettre) {
        case 97:
            console.log("1")
            document.querySelector('.character').style.backgroundColor = "red"
            break;
        case 98:
            console.log("2")
            document.querySelector('.character').style.backgroundColor = "blue"
            break;
        case 99:
            console.log("3")
            document.querySelector('.character').style.backgroundColor = "yellow"
            break;
        case 100:
            console.log("4")
            document.querySelector('.character').style.backgroundColor = "green"
            break;
        case 101:
            console.log("5")
            document.querySelector('.character').style.backgroundColor = "black"
            break;
        case 102:
            console.log("6")
            break;
        case 103:
            console.log("7")
            break;
        case 104:
            console.log("8")
            break;
        case 105:
            console.log("9")
            break;
        case 96:
            console.log("0")
            break;
        default:
            console.log("pas un numero")
    }

}); 

// EXERCICE 2 :

