// Lanza la función inicio() al cargar el fichero .js
addEventListener('load',inicio,false)

function inicio() {
  evento = document.querySelector("#btnEnviar");
  evento.addEventListener('click',escribir,false);

  evento = document.querySelector("#btnVer");
  evento.addEventListener('click',loadDoc,false);
}

function escribir() {
  let nombre = document.querySelector("#inpNombre").value;
  let descripcion = document.querySelector("#inpDescripcion").value;
  let precio = document.querySelector("#inpPrecio").value;

  const xhttp = new XMLHttpRequest();

  let datos = new FormData();
  datos.append("nombre",nombre);
  datos.append("descripcion",descripcion);
  datos.append("precio",precio);

  xhttp.open("post", "php.php", true);
  xhttp.send(datos);
  xhttp.onreadystatechange = muestracontenido
}

function muestracontenido() {
  if (this.readyState == 4 && this.status == 200) {
    let textoPhp = this.responseText;
    document.querySelector("#visualizado").innerHTML = textoPhp;
  }
}

// Carga el documento XML
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {visualizarXML(this);}
  xhttp.open("GET", "bbdd.xml");
  xhttp.send();
}
// Visualiza el contenido del XML
function visualizarXML(xml) {
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("Objeto");
  let table="<tr><th>Nombre</th><th>Descripción</th><th>Precio</th></tr>";
  for (let i = 0; i <x.length; i++) {
    table += "<tr><td>" +
    x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("precio")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.querySelector("#visualizado").innerHTML = table;
}
