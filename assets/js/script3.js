
function validPass(){
    const codigo1 = document.getElementById("codigo1").value
    const codigo2 = document.getElementById("codigo2").value
    const codigo3 = document.getElementById("codigo3").value
    const parrafo = document.getElementById("passValid")

    const concat = codigo1 + codigo2 + codigo3

    if (concat == 911){
        parrafo.innerHTML = "Password 1 correcto";
    } else if (concat == 714){
        parrafo.innerHTML = "Password 2 correcto"; 
    } else {
        parrafo.innerHTML = "Password incorrecto";
    }
}