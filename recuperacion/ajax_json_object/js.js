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
  let cajaDatosNode = document.querySelector("#inpDatos")
  evento = document.querySelector("#btnEnviar")
  evento.addEventListener('click',function (e) {
    // addTable(animales,cajaDatosNode,"tablaAnimales")
    addSelect(arrCategoria,cajaDatosNode,"selCategoria")
    // addInput("date",cajaDatosNode,"inpFecha1")
    // addInput("date",cajaDatosNode,"inpFecha2")
  },false)

  evento = document.querySelector("#btnApretar")
  evento.addEventListener('click',function (e) {
    // addTable(animales,cajaDatosNode,"tablaAnimales")
    // addSelect(arrCategoria,cajaDatosNode,"selCategoria")
    addInput("date",cajaDatosNode,"inpFecha1")
    addInput("date",cajaDatosNode,"inpFecha2")
    addInput("date",cajaDatosNode,"inpFecha3")
    addInput("date",cajaDatosNode,"inpFecha4")
    let boton = addInput("button",cajaDatosNode,"btnFecha","Marcar Fecha")
    console.log(boton);
    boton.addEventListener('click',function(e) {
      let fecha1Node = document.querySelector("#inpFecha1")
      // console.log(new Date(fecha1Node.value).toLocaleDateString("es-ES"));
      let fecha2Node = document.querySelector("#inpFecha2")
      fecha2Node.value = fecha1Node.value
    },false)
  },false)
}

// Para visualizar un array de objetos
function addTable(arr,objetivo,id) {
  let table = document.querySelector(`#${id}`) ? document.querySelector(`#${id}`) : document.createElement("table")
  while (table.firstChild) {
    table.removeChild(table.lastChild);
  }
  // let table = document.createElement("table")
  arguments.length == 3 ? table.setAttribute("id",id) : null
  table.appendChild(addCabecera(arr[0]))
  arr.forEach((item, i) =>
    {
      table.appendChild(addLineaDatos(item))
    })
  objetivo.appendChild(table)
  // console.log(document.querySelector(`#${id}`))
  return table
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
  let select = document.querySelector(`#${id}`) ? document.querySelector(`#${id}`) : document.createElement("select")
  while (select.firstChild) {
    select.removeChild(select.lastChild)
  }
  arguments.length == 3 ? select.setAttribute("id",id) : null
  for (let i = 0; i < arr.length; i++) {
    let opcion = document.createElement("option")
    opcion.setAttribute("value",i)
    opcion.setAttribute("label",`${arr[i]}`)
    opcion.setAttribute("class","opcionSelect")
    select.appendChild(opcion)
  }
  objetivo.appendChild(select)
  return select
}

// Para añadir un tipo de input
function addInput(tipo,objetivo,id,valor) {
  let input = document.querySelector(`#${id}`) ? document.querySelector(`#${id}`) : document.createElement("input")
  while (input.firstChild) {
    input.removeChild(input.lastChild)
  }
  arguments.length >= 3 ? input.setAttribute("id",id) : false
  input.setAttribute("type",tipo)
  input.setAttribute("class",`input${tipo.trim().replace(/^\w/, (c) => c.toUpperCase())}`)
  arguments.length == 4 ? input.setAttribute("value",valor) : false
  switch (true) {
    case tipo=="number":
      input.setAttribute("min",0)
      // input.setAttribute("value",0)
    break;
    case tipo=="button":
      // input.setAttribute("value","boton")
    break;
    case tipo=="text":
      input.setAttribute("placeholder","Introduce texto")
    break;
    case tipo=="date":
    break;
    default:
      input.setAttribute("placeholder","Introduce texto")
  }
  objetivo.appendChild(input)
  return input
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
