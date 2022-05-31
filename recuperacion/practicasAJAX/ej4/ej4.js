addEventListener('load',inicio,false)

function inicio() {
  evento = document.querySelector("#btnEnviar")
  evento.addEventListener('click',function (){
    let valorCaja1 = document.querySelector("#inpNombre").value
    let valorCaja2 = document.querySelector("#inpApellido").value
    let valorCaja3 = document.querySelector("#inpEdad").value
    // Comprobamos que 'edad' sea un valor numérico mayor que 0
    valorCaja3 = isNaN(valorCaja3) || valorCaja3 < 0 ? null : valorCaja3

    // Create an XMLHttpRequest object
    xhttp = new XMLHttpRequest()

    // FormData
    let datos = new FormData()
    datos.append("nombre",valorCaja1)
    datos.append("apellido",valorCaja2)
    datos.append("edad",valorCaja3)

    // Send a request
    xhttp.open("POST", "ej4.php", true)
    xhttp.send(datos)

    // Define a callback function
    xhttp.onreadystatechange = muestraContenido
  },false)
}

function muestraContenido() {
  if(xhttp.readyState == 4 && xhttp.status === 200) {
    // console.log(xhttp.responseText);
    document.querySelector("#visualizado").innerText = xhttp.responseText
  }
}
