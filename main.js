let form = document.querySelector('#form');
let peso;
let altura;
let imc;
var result;
var tr;
var btn = document.querySelector(".btn");
var alturaTimeout;

form.addEventListener("submit", function(e) {
    e.preventDefault()
    peso = parseFloat(e.target.querySelector('#campoPeso').value);
    altura = parseFloat(e.target.querySelector("#campoAltura").value);
    if(peso !== "" && altura !== "") { //Se os campos forem preenchidos corretamente...
        imc = calculaImc(peso, altura); //...invoca a função calculaImc enviando peso e altura como argumento
        result = document.getElementById("result");
        result.textContent = (`Seu IMC: ${imc}`);
        classificação(imc);
    } else {
        result.textContent = "Preencha todos os campos!";
    }   
});
function calculaImc(peso, altura) {
    imc = peso / altura ** 2;
    return imc.toFixed(2);
}
function classificação(vlrImc) {
    tr = document.getElementsByTagName("tr");
    console.log(vlrImc);
    if(vlrImc <= 18.5) {
        tr[1].style.backgroundColor = "red";
    } else if(vlrImc <= 24.9) {
        tr[2].style.backgroundColor = "red";
    } else if(vlrImc <= 29.9) {
        tr[3].style.backgroundColor = "red";
    } else if(vlrImc <= 34.9) {
        tr[4].style.backgroundColor = "red";
    } else if(vlrImc <= 39.9) {
        tr[5].style.backgroundColor = "red";
    } else if(vlrImc >=40) {
        tr[6].style.backgroundColor = "red";
    }
}

function k(i) {
    var v = i.value.replace(/\D/g,'');
    //console.log(v)
    v = (v/100).toFixed(2) + '';
    //console.log(v);
    //v = v.replace(".", ",");
    //console.log(v);
    //v = v.replace(/(\d)(\d{3})(\{3}),/g, "$1.$2.$3,");

    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");

    i.value = v;

}

