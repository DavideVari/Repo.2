let btn = document.getElementById("btn");
let mess = document.getElementById("mess");

function f(){
    mess.textContent = "ciao studente!";
}

btn.addEventListener("click", f);

