addEventListener('click',inicio,false)
function inicio() {

  // Add item to localStorage
  evento = document.querySelector("#btnAddLocal")
  evento.addEventListener('click',function () {
    let clave = document.querySelector("#inpKLocal").value
    let valor = document.querySelector("#inpVLocal").value
    localStorage.setItem(clave,valor);
  },false)
  // Get ALL items in localStorage
  evento = document.querySelector("#btnVerLocal")
  evento.addEventListener('click',function () {
    let vis = []
    for (var i = 0; i < localStorage.length; i++) {
      vis += localStorage.key(i)
      vis += ', '
    }
    showLocal(vis)
  },false)

  // Get an item from localStorage
  evento = document.querySelector("#btnVerLocalKey")
  evento.addEventListener('click',function () {
    let clave = document.querySelector("#inpKLocal").value
    let vis = localStorage.getItem(clave)
    showLocal(vis)
  },false)
  // Delete all from the localStorage
  evento = document.querySelector("#btnDelAllLocal")
  evento.addEventListener('click',function () {
    localStorage.clear()
  },false)
  // Delete an item
  evento = document.querySelector("#btnDelLocal")
  evento.addEventListener('click',function () {
    let clave = document.querySelector("#inpKLocal").value
    localStorage.removeItem(clave)
  },false)
}

function showLocal(aVisualizar) {
  document.querySelector("#visLocalStorage").innerHTML = aVisualizar;
}
