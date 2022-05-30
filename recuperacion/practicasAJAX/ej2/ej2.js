addEventListener('load',inicio,false)

function inicio() {
  evento = document.querySelector("#inpNombre")
  evento.addEventListener('keyup',function (){
    let valorCaja1 = document.querySelector("#inpNombre").value

    // Create an XMLHttpRequest object
    xhttp = new XMLHttpRequest()

    // FormData
    let fichero = "ej2.php"
    let url = `${fichero}?q=${valorCaja1}`

    // Send a request
    xhttp.open("GET", url, true)
    xhttp.send()

    // Define a callback function
    xhttp.onreadystatechange = muestraContenido
  },false)
}

function muestraContenido() {
  if(xhttp.readyState == 4 && xhttp.status === 200) {
    document.querySelector("#visualizado").innerHTML = xhttp.responseText
  }
}
