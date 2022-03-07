addEventListener('load',inicio,false)
function inicio() {
  evento = document.querySelector("#inpLetras")
  evento.addEventListener('keypress',function (e) {
    soloLetras(e)
  },false)

  evento = document.querySelector("#inpNumeros")
  evento.addEventListener('keypress',function (e) {
    soloNumeros(e)
  },false)

  evento = document.querySelector("#inpVis");
  evento.addEventListener('keypress',function (e) {
    document.querySelector("#inpVis").value="";
    document.querySelector("#visualizar").innerHTML=e.keyCode;
  },false)
}

function soloLetras(e) {
  if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode == 209 || e.keyCode == 193 || e.keyCode == 201 || e.keyCode == 205 || e.keyCode == 211 || e.keyCode == 218) {
    // Mayúsculas, +Ñ +Á +É +Í +Ó +Ú
    return true
  } else if (e.keyCode >= 97 && e.keyCode <= 122 || e.keyCode == 241 || e.keyCode == 225 || e.keyCode == 233 || e.keyCode == 237 || e.keyCode == 243 || e.keyCode == 250) {
    // Minúsculas, +ñ +á +é +í +ó +ú
    return true
  } else {
    e.preventDefault()
    return false
  }
}

function soloNumeros(e) {
  if (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode == 44) {
    // Números del 0 al 9
    return true
  } else {
    e.preventDefault()
    return false
  }
}
