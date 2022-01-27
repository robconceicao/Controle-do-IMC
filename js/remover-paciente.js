var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
  event.target.parentNode.remove();

})

// a linha abaixo foi reesumida em acima

/*tabela.addEventListener("dblclick", function(event){
  var alvoEvento = event.target;
  var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover
  paiDoAlvo.remove();

})*/
