//prendo res e inserisco una stringa
let output = document.getElementById("res") //corrisponde ad un oggetto
let inputObj = document.getElementById("input")
let btn = document.getElementById("btn")
output.textContent = "ciao"; //inserisco un contenuto testuale nell'oggetto
output.innerHTML += "<strong>Mondo"

//prendo l'input del parametro e lo inseriesco nel paragrafo
btn.addEventListener("click", getInputAndShow)

//prendere un numero dell'utente e  affianco
// quello n+5
function getInputAndShow(){
    let v = Number(inputObj.value) 
    // tramite Number, traduco la stringa (se posso) da stringa a numero

    if(isNaN(v)){
        return
    }
    console.log(typeof v);
    output.textContent = v+": "+(v+5)

}
