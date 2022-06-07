addEventListener('load',inicio,false)

function inicio() {
  evento = document.querySelector("#btnEnviar")
  evento.addEventListener('click',function (e) {

  },false)
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
