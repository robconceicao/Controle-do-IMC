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

  var pesoEhValido = validaPeso(peso); // true ou false
  var alturaEhValida = validaAltura(altura);

  if(!pesoEhValido) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
    paciente.classList.add("cor-texto");

  }

  if(!alturaEhValida) {
    console.log("Altura inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Altura inválido!";
    paciente.classList.add("paciente-invalido");
    paciente.classList.add("cor-texto");
    // paciente.style.backgroundColor = "lightcoral"; melhor usar no css
    // paciente.style.color = "white"; melhor usar no css

  }

  if(alturaEhValida && pesoEhValido) {
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc;

  }

}

function validaPeso(peso) {
  if(peso >= 0 && peso < 1000) {
    return true;
  }else {
    return false;
  }

}

function validaAltura(altura) {
  if(altura >= 0 && altura <= 3.0) {
    return true;
  }else {
    return false;
  }
}

function calculaImc(peso,altura) {
  var imc = 0;

  imc = peso / (altura * altura);
  return imc.toFixed(2);

}
