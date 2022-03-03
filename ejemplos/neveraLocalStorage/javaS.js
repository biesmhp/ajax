addEventListener('load',inicio,false);

function inicio() {
  // Array de productos
  arrProductos = ["leche","agua","zumo","yogures","mantequilla","verduras","queso","jamón","pescado","carne"];
  // generarStorage(arrProductos);

  // Con el botón
  evento = document.querySelector("#btnQuitar");
  evento.addEventListener('click',guiQuitar,false);
  evento = document.querySelector("#btnGuardar");
  evento.addEventListener('click',guiGuardar,false);
  // Con la imagen
  evento = document.querySelector("#imgAbierta");
  evento.addEventListener('click',guiQuitar,false);
  evento = document.querySelector("#imgCerrada");
  evento.addEventListener('click',guiGuardar,false);

  // Genera la lista de productos y nos muestra su cantidad
  generarLista();

  // Para añadir productos al almacenamiento local
  evento = document.querySelector("#btnMeter");
  evento.addEventListener('click',meterProductos,false);
  // Para eliminar productos del almacenamiento local
  evento = document.querySelector("#btnSacar");
  evento.addEventListener('click',sacarProductos,false);

  mostrarProductos();
}

function guiQuitar() {
  document.querySelector("#btnMeter").hidden = true;
  document.querySelector("#btnSacar").hidden = false;
  document.querySelector("#imgAbierta").hidden = false;
  document.querySelector("#imgCerrada").hidden = true;
}

function guiGuardar() {
  document.querySelector("#btnMeter").hidden = false;
  document.querySelector("#btnSacar").hidden = true;
  document.querySelector("#imgAbierta").hidden = true;
  document.querySelector("#imgCerrada").hidden = false;
}

function generarLista() {
  borrarHijos(document.querySelector("#listProductos"));
  for (var i = 0; i < arrProductos.length; i++) {
    if (localStorage.getItem(arrProductos[i])) {
      // console.log(arrProductos[i]);
    }else{
      localStorage.setItem(arrProductos[i],0);
    }
  }
  // Generamos una lista checkbox con los productos
  for (var i = 0; i < arrProductos.length; i++) {
    // Contenedor de la linea
    let cajaP = document.createElement('div');
    cajaP.id = 'caja'+arrProductos[i];
    // Texto a visualizar: la cantidad en la nevera
    let textNodeCantidad = document.createTextNode(localStorage.getItem(arrProductos[i]));
    // Input checkbox
    let producto = document.createElement('input');
    producto.type = 'checkbox';
    producto.name = 'nevera';
    producto.id = 'producto'+arrProductos[i];
    producto.value = arrProductos[i];
    // Texto a visualizar
    let textNode = document.createTextNode(arrProductos[i]);
    // Caja con la cantidad
    let cantidad = document.createElement('input');
    cantidad.type = 'number';
    cantidad.min = 0;
    cantidad.max = 10;
    cantidad.value = 0;
    cantidad.size = 1;
    cantidad.id = "cantidad"+arrProductos[i];
    // Lo añadimos al HTML
    cajaP.appendChild(textNodeCantidad);
    cajaP.appendChild(producto);
    cajaP.appendChild(textNode);
    cajaP.appendChild(cantidad);
    document.querySelector("#listProductos").appendChild(cajaP);
  }
}

function meterProductos() {
  let arrProvisional = document.querySelectorAll("[name='nevera']");
  for (var i = 0; i < arrProvisional.length; i++) {
    // Seleccionamos solo los productos marcados
    if (arrProvisional[i].checked) {
      // console.log(arrProvisional[i].value);
      let textoID = "#cantidad"+arrProvisional[i].value;
      let cantidad = document.querySelector(textoID);
      // console.log(cantidad.value);
      let cAlmacenada = localStorage.getItem(arrProvisional[i].value);
      localStorage.setItem(arrProvisional[i].value, (parseInt(cAlmacenada)+parseInt(cantidad.value)));
      // console.log(localStorage.getItem(arrProvisional[i].value));
    }
  }
  generarLista();
}

function sacarProductos() {
  let arrProvisional = document.querySelectorAll("[name='nevera']");
  for (var i = 0; i < arrProvisional.length; i++) {
    // Seleccionamos solo los productos marcados
    if (arrProvisional[i].checked) {
      // console.log(arrProvisional[i].value);
      let textoID = "#cantidad"+arrProvisional[i].value;
      let cantidad = document.querySelector(textoID);
      // console.log(cantidad.value);
      if (cantidad.value>localStorage.getItem(arrProvisional[i].value)) {
        cantidad.value = localStorage.getItem(arrProvisional[i].value);
      }
      let cAlmacenada = localStorage.getItem(arrProvisional[i].value);
      localStorage.setItem(arrProvisional[i].value, (cAlmacenada-cantidad.value));
      // console.log(localStorage.getItem(arrProvisional[i].value));
    }
  }
  generarLista();
}

function mostrarProductos() {
  var allkeys = "";
  for (i=0;i < localStorage.length;i++) {
      let key = localStorage.key(i);
      allkeys += key + " " + localStorage.getItem(key) + " ";
  }
  console.log(allkeys);
}

function borrarHijos(element) {
  element.innerHTML = '';
}
