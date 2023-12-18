//Elementos del DOM
//Variables
//Fuciones
//Eventos
function changeBorder(){ 
    const tree = document.getElementById("switch")
    const validation = tree.classList.contains("boder")
    if (validation == false){
       tree.classList.add("boder")
    } else {
       tree.classList.remove("boder")
    }
    }
  