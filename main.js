var peso;
var altura;
var imc;
var result;
var tr;
var btn = document.querySelector(".btn");
var alturaTimeout;

btn.addEventListener("click", function() {
    peso = parseFloat(document.getElementById("campoPeso").value);
    altura = parseFloat(document.getElementById("campoAltura").value);
    if(peso !== "" && altura !== "") {
        imc = parseFloat(peso/(altura*altura)).toFixed(2);
        result = document.getElementById("result");
        result.textContent = (`${imc}`);
        classificação(imc);
    } else {
        result.textContent = "Preencha todos os campos!";
    }   
});
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
    console.log(v)
    v = (v/100).toFixed(2) + '';
    console.log(v);
    //v = v.replace(".", ",");
    console.log(v);
    //v = v.replace(/(\d)(\d{3})(\{3}),/g, "$1.$2.$3,");

    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");

    i.value = v;

}

