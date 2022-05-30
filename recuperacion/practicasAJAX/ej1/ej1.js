addEventListener('load',inicio,false)

function inicio() {
  evento = document.querySelector("#btnEnviar")
  evento.addEventListener('click',function (){
    let valorCaja1 = document.querySelector("#inp1").value
    let valorCaja2 = document.querySelector("#inp2").value

    // Create an XMLHttpRequest object
    xhttp = new XMLHttpRequest()

    // FormData
    let datos = new FormData()
    datos.append("valorCaja1",parseInt(valorCaja1))
    datos.append("valorCaja2",parseInt(valorCaja2))

    // Send a request
    xhttp.open("POST", "ej1.php", true)
    xhttp.send(datos)

    // Define a callback function
    xhttp.onreadystatechange = muestraContenido
  },false)
}

function muestraContenido() {
  if(xhttp.readyState == 4 && xhttp.status === 200) {
    console.log(typeof xhttp.responseText);
    console.log(xhttp.responseText);
    document.querySelector("#visualizado").innerText = xhttp.responseText
  }
}
