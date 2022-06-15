addEventListener('load',inicio,false)
let arrCategoria = ['Hogar','Calzado','Ropa','Accesorios']
let perro = {
  especie: 'perro',
  tamano: 'mediano',
  precio: 25.2,
}
let conejo = {
  especie: 'conejo',
  tamano: 'pequeño',
  precio: 65.90,
}
let animales = [perro,conejo]

function inicio() {
  //
  let cajaDatosNode = document.querySelector(".inpDatos")
  // addSelect(arrCategoria,cajaDatosNode,"selCategoria")
  // addInput("text",cajaDatosNode,"btnEnviar")
  addTable(animales,cajaDatosNode,"tableDatosAnimal")
  // evento = document.querySelector("#btnEnviar")
  // evento.addEventListener('click',function (e) {
  //
  // },false)

}

// Para visualizar un array de objetos
function addTable(arr,objetivo,id) {
  document.querySelector(`#${id}`) ? document.querySelector(`#${id}`).innerHTML = '' : null
  let table = document.createElement("table")
  arguments.length == 3 ? table.setAttribute("id",id) : null
  table.appendChild(addCabecera(arr[0]))
  arr.forEach((item, i) =>
    {
      table.appendChild(addLineaDatos(item))
    })
  objetivo.appendChild(table)
  // console.log(document.querySelector(`#${id}`))
  return
}

function addCabecera(obj) {
  // Crear la cabecera de los datos
  let lineaCabecera = document.createElement("tr")
  lineaCabecera.setAttribute("class","lineaCabecera")
  for (var propiedad in obj) {
    let opcionCabecera = document.createElement("th")
    opcionCabecera.setAttribute("id",`idCabecera${propiedad}`)
    let opcionCabeceraText = document.createTextNode(propiedad.toUpperCase())
    opcionCabecera.appendChild(opcionCabeceraText)
    lineaCabecera.appendChild(opcionCabecera)
  }
  return lineaCabecera
}

function addLineaDatos(obj) {
  // Crear la visualización de los datos
  let lineaDatos = document.createElement("tr")
  lineaDatos.setAttribute("class","lineaDatos")
  for (let propiedad in obj) {
    if (obj.hasOwnProperty(propiedad)) {
      let dato = document.createElement("td")
      let datoText = document.createTextNode(obj[propiedad])
      dato.appendChild(datoText)
      lineaDatos.appendChild(dato)
    }
  }
  return lineaDatos
}

// Para mostrar un select con las opciones escogidas
function addSelect(arr,objetivo,id) {
  let select = document.createElement("select")
  arguments.length == 3 ? select.setAttribute("id",id) : null
  for (let i = 0; i < arr.length; i++) {
    let opcion = document.createElement("option")
    opcion.setAttribute("value",i)
    opcion.setAttribute("label",`${arr[i]}`)
    opcion.setAttribute("class","opcionSelect")
    select.appendChild(opcion)
  }
  objetivo.appendChild(select)
  return objetivo ? true : false
}

// Para añadir un tipo de input
function addInput(tipo,objetivo,id) {
  let input = document.createElement("input")
  arguments.length == 3 ? input.setAttribute("id",id) : null
  input.setAttribute("type",tipo)
  input.setAttribute("class","input")
  switch (true) {
    case tipo=="number":
      input.setAttribute("min",0)
      input.setAttribute("value",0)
    break;
    case tipo=="button":
      input.setAttribute("value","boton")
    break;
    default:
      input.setAttribute("placeholder","Introduce texto")
  }
  objetivo.appendChild(input)
  return objetivo ? true : false
}

class Articulo {
  constructor(categoria,descripcion,precio) {
    this.categoria = categoria
    this.codigo = 0
    this.descripcion = descripcion
    this.puc = precio
    this.puv = this.totalPrecio()
    this.ventas = 0
  }

  totalPrecio() {
    return this.puc * 0.21 + this.puc
  }

  toString() {
    return `Categoría: ${this.categoria}, codigo: ${this.codigo}, precio con IVA: ${this.puv}, nº ventas: ${this.ventas}.\n
    Descripcion: ${this.descripcion}`
  }
}
