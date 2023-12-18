//Elementos del DOM
//Variables
//Fuciones
//Eventos
function stickerValid(){ 
    const parrafo = document.getElementById("valorTotal")
    var sticker = parseInt(document.getElementById("stk1").value)
    var sticker2 = parseInt(document.getElementById("stk2").value)
    var sticker3 = parseInt(document.getElementById("stk3").value)
    var total = sticker + sticker2 + sticker3
    if (total <= 10){
        parrafo.innerHTML =  "llevas "+ total+" stickers"
    } else {
        parrafo.innerHTML =  "llevas demasiados stickers"
    }
    }
  