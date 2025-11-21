let num1 = Number(document.getElementById("num1").value);
let num2 = Number(document.getElementById("num2").value);
let btn = document.getElementById("btn");

function f(){
    console.log(btn.textContent = num1+num2);
}

btn.addEventListener("click", f);