addEventListener('load',inicio,false)
function inicio() {

  // Comprobamos que las fechas no sean anteriores al día de hoy
  evento = document.querySelector("#dateEntrada")
  evento.addEventListener('change',function (e) {
    anteriorAHoy(e)
    salidaTrasEntrada(e)
  },false)
  evento = document.querySelector("#dateSalida")
  evento.addEventListener('change',function (e) {
    anteriorAHoy(e)
    salidaTrasEntrada(e)
  },false)

  evento = document.querySelector("#btnReservar")
  evento.addEventListener('click',function () {
    // Vaciamos la caja
    let cajaVisual = document.querySelector("#visCaja")
    cajaVisual.innerHTML = '';

    var fechaEntrada = document.querySelector("#dateEntrada").value
    var fechaSalida = document.querySelector("#dateSalida").value
    let numDiasYllegada = dias(fechaEntrada,fechaSalida)
    // console.log(numDiasYllegada);
    cajaVisual.innerHTML = `Días de la estancia: ${numDiasYllegada[0]}. Días hasta la llegada ${numDiasYllegada[1]<1 ? 0 : numDiasYllegada[1]}`;
    mostrarPopUp(numDiasYllegada)
  },false)
}

function anteriorAHoy(domFecha) {
  // console.log(e);
  var entrada = new Date(domFecha.target.value);
  var hoy = new Date();
  // console.log(entrada);
  // console.log(hoy);
  if (entrada<hoy) {
    // alert("La fecha NO puede ser anterior al día de hoy");
    // Mostramos el error
    mostrarCaja('La fecha NO puede ser anterior al día de hoy');
    console.log("anterior a hoy, error");
    // Corregimos la fecha
    domFecha.target.valueAsDate = hoy
  }
}

function salidaTrasEntrada(domFecha) {
  // console.log(domFecha);
  var fechaEntrada = document.querySelector("#dateEntrada")
  // Si la fecha de entrada está vacia
  if (fechaEntrada.value=='') {
    // Por defecto aparece el día de hoy como entrada
    var hoy = new Date()
    fechaEntrada.valueAsDate = hoy
  }
  var fechaSalida = document.querySelector("#dateSalida")
  // Visualizado
  // console.log(`${fechaEntrada} y ${fechaSalida}`);
  if (fechaEntrada.value>fechaSalida.value) {
    // alert("La fecha de entrada NO puede ser mayor que la de Salida");
    // Mostramos el error
    mostrarCaja('La fecha de Entrada NO puede ser mayor que la de Salida')
    fechaEntrada.valueAsDate = hoy
    fechaSalida.valueAsDate = hoy
  }
}

function dias() {
  // console.log(`Dom fecha entrada: ${arguments[0]}; Dom fecha salida: ${arguments[1]}`);
  if (arguments.length === 2) {
      let dia = 1000 * 60 * 60 * 24;
      let fecha1 = new Date(arguments[0]);
      let fecha2 = new Date(arguments[1]);
      let hoy = new Date();
      return [((fecha2 - fecha1) / dia), Math.round(((fecha1-hoy) / dia),0)];
  } else if (arguments.length === 1) {
      return (arguments[0] * 30);
  }
  return false;
}

function mostrarCaja(texto) {
  // Mostramos el error
  let cajaVisual = document.querySelector("#visCaja")
  cajaVisual.innerHTML = texto;
  cajaVisual.innerHTML = "\n"
  return true;
}

function mostrarPopUp(numDias,diasHastaLlegada) {
  setTimeout(function(){
      let ventana = window.open("", "Popup", "width=400, height=400");
      ventana.moveTo(screen.width / 2 - 200, screen.height / 2 - 200);
      ventana.document.write(
          `<h1>Información de la reserva</h1>
      <p>La estancia prevista será de ${numDias}</p><br>
      <p>La reserva comienza en ${diasHastaLlegada} días</p>`
      );
  }, 5000);
}
