addEventListener('load',inicio,false)

function inicio() {
  // console.log(document.querySelector("#prueba"));
  // Access json to fill the initial select
  let xjson = new XMLHttpRequest()

  xjson.open("GET", "paises y ciudades.json", true)
  xjson.send(null)

  xjson.onreadystatechange = function() {
    if (xjson.readyState == 4 && xjson.status == 200) {
      let myObj = JSON.parse(xjson.responseText)
      addSelect(myObj.listadoPaises.pais,"#selPaises")
      // Show the cities
      evento = document.querySelector("#btnEnviar")
      evento.addEventListener('click',function (){
        let pais = document.querySelector("#selPaises").value
        // console.log(myObj.listadoPaises.pais[pais])
        // Create info details of the country selected
        addInfo(myObj.listadoPaises.pais[pais].capital,document.querySelector("#visualizado"))
        addInfo(myObj.listadoPaises.pais[pais].textoCapital,document.querySelector("#visualizado"))
      },false)
    }
  }
}

function addSelect(arr,objetivo) {
  let select = document.querySelector(objetivo)
  for (let i = 0; i < arr.length; i++) {
    let opcion = document.createElement("option")
    opcion.setAttribute("value",i)
    opcion.setAttribute("label",arr[i].nombre)
    opcion.setAttribute("class","paises")
    select.appendChild(opcion)
  }
  return select ? true : false
}

function addInfo(info,objetivo) {
  // let infoNode = document.querySelector(objetivo)
  let opcion = document.createElement("span")
  opcion.textContent = info
  objetivo.appendChild(opcion)
}

function muestraContenido() {
  if(xhttp.readyState == 4 && xhttp.status === 200) {
    // console.log(xhttp.responseText);
    document.querySelector("#visualizado").innerText = xhttp.responseText
  }
}
