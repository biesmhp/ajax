addEventListener('load',inicio,false)
let arrCategoria = ['Hogar','Calzado','Ropa','Accesorios']

function inicio() {
  //
  let cajaDatosNode = document.querySelector(".inpDatos")
  addSelect(arrCategoria,cajaDatosNode,"selCategoria")
  addInput("text",cajaDatosNode,"btnEnviar")
  // evento = document.querySelector("#btnEnviar")
  // evento.addEventListener('click',function (e) {
  //
  // },false)
  
}

// Para visualizar un array u objeto bidimensional
function addTable(arr,objetivo,id) {
  let table = document.createElement("table")
  arguments.length == 3 ? select.setAttribute("id",id) : null
  for (var i = 0; i < arr.length; i++) {
    let linea = document.createElement("tr")
    linea.setAttribute("value",i)
    linea.setAttribute("label",arr[i])
    let columna = document.createElement("td")
    columna.setAttribute("value",i)
    columna.setAttribute("label",`${arr[i]}`)
    columna.setAttribute("class","opcionSelect")
    linea.appendChild(columna)
    table.appendChild(linea)
  }
  // for (let y = 0; y < arr.length; y++) {
  //
  // }
  objetivo.appendChild(table)
  return objetivo ? true : false
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

class Prueba {
  constructor(tipo, descripcion, precio) {
    this.tipo = tipo
    this.descripcion = descripcion
    this.precio = precio
  }

  toString() {
    return `Tipo: ${this.tipo}, descripción: ${this.descripcion} y precio: ${this.precio}\n`
  }
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
