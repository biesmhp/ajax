addEventListener('load',inicio,false);

function inicio() {
  // Eventos
  // Solo permitimos la introducción de números
  evento = document.querySelectorAll("input.soloNumber");
  for (let i = 0; i < evento.length; i++) {
    evento[i].addEventListener("keypress", function(event){
      soloNumeros(event)
    });
  }
  // Vaciamos las cajas de números
  evento = document.querySelector("#btnBorrar")
  evento.addEventListener('click',function () {
    let arrCajasNumeros = document.querySelectorAll("input.soloNumber")
    for (var i = 0; i < arrCajasNumeros.length; i++) {
      arrCajasNumeros[i].value = ''
    }
  },false)

  // Crear objeto
  evento = document.querySelector("#btnRegistrar")
  evento.addEventListener('click',function () {
    // Recogemos las variables
    let pizza = document.querySelector("#inpPizza")
    let tortellini = document.querySelector("#inpTortellini")
    let lasagna = document.querySelector("#inpLasagna")
    let arrPedido = [["pizza",parseInt(pizza.value)],["tortellini",parseInt(tortellini.value)],["lasagna",parseInt(lasagna.value)]]
    // console.log(arrPedido);
    let modoPago = document.querySelectorAll("[name='pago']")
    let metodoPago = "contrarrembolso"
    for (var i = 0; i < modoPago.length; i++) {
      if (modoPago[i].checked==true) {
        metodoPago = modoPago[i].value;
      }
    }
    // console.log(metodoPago);
    pedidosobj1 = new Pedidosobj(arrPedido,metodoPago)
    console.log({pedidosobj1});
  },false)
}

function soloNumeros(e) {
  if (e.keyCode >= 48 && e.keyCode <= 57) {
    // Números del 0 al 9
    return true
  } else {
    e.preventDefault()
    return false
  }
}
