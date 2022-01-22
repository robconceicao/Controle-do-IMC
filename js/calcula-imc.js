var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = true;
  var alturaEhValida = true;

  if(peso <= 0 || peso >= 1000) {

    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
    paciente.classList.add("cor-texto");

  }

  if(altura <= 0 || altura >= 3.0) {

    console.log("Altura inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Altura inválido!";
    paciente.classList.add("paciente-invalido");
    paciente.classList.add("cor-texto");
    // paciente.style.backgroundColor = "lightcoral"; melhor usar no css
    // paciente.style.color = "white"; melhor usar no css

  }

  if(alturaEhValida && pesoEhValido) {

    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);

  }

}

<<<<<<< HEAD:js/calcula-imc.js

=======
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

});
>>>>>>> 0f44be51525ae6ffc412ebc3fb0381af9612a54c:js/principal.js

/* titulo.addEventListener("click", function() {

  console.log("fui clicado");

});*/

//podemos usar funções nomeadas ou funções anônimas
//função anônima
/*titulo.addEventListener("click", function(){

});*/

//função nomeada
/*
function mostraMensagem(){
  console.log("Olá eu fui clicado!");
}*/
