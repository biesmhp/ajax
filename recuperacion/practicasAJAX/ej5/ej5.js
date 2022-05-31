addEventListener('load',inicio,false)

function inicio() {
  // Access json to fill the initial select
  var xjson = new XMLHttpRequest();

  xjson.open("GET", "paises y ciudades.json", true);
  xjson.send(null);

  xjson.onreadystatechange = function() {
    if (xjson.readyState == 4) {
      if (xjson.status == 200) {
        let myObj = JSON.parse(xjson.responseText);
        addSelect(myObj.listadoPaises.pais,"#selPaises")
      }
    }
  };

  // ##############WIP

  evento = document.querySelector("#btnEnviar")
  evento.addEventListener('click',function (){
    // Create the select of countries

  },false)
}

function addSelect(arr,objetivo) {
  let select = document.querySelector(objetivo)
  for (let i = 0; i < arr.length; i++) {
    let opcion = document.createElement("option")
    // console.log(arr[i]);
    opcion.setAttribute("value",i)
    opcion.setAttribute("label",arr[i].nombre)
    select.appendChild(opcion)
  }
}

function muestraContenido() {
  if(xhttp.readyState == 4 && xhttp.status === 200) {
    // console.log(xhttp.responseText);
    document.querySelector("#visualizado").innerText = xhttp.responseText
  }
}
