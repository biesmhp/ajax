addEventListener('load',inicio,false);

function inicio() {
  // Eventos
  evento = document.querySelectorAll("input.soloNumber");
  // console.log(evento);
  for (let i = 0; i < evento.length; i++) {
    // console.log(evento[i]);
    evento[i].addEventListener("keypress", function(event){
      if (!(event.charCode>=48&&event.charCode<=57)) {
        event.preventDefault()
      }
    });
  }

  // evento = document.querySelectorAll("input.soloNumber")
}
