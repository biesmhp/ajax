addEventListener('load',inicio,false)
function inicio() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "superheroes.json", true);
  xhr.send(null);
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
          if (xhr.status === 200) {
              let superH = JSON.parse(xhr.responseText);
              // console.log(superH);
              arrSuperHeroes = []
              createSuperH(superH)
              generateSelect(superH)

              evento = document.querySelector("#selHeroes")
              evento.addEventListener('change',function () {
                // console.log(arrSuperHeroes);
                let heroeSeleccionado = document.querySelector("#selHeroes").value
                console.log(heroeSeleccionado);
                showHeroe(heroeSeleccionado)
              },false)
          }
      }
  }
}

// Utilizando los datos recibidos del .json lo convertimos en objetos
function createSuperH(json) {
  // console.log(json);
  for (let i = 0; i < json.members.length; i++) {
    // console.log(miembro);
    let miembroToObject = new Personajes(json.squadName,json.homeTown,json.formed,json.secretBase,json.active,json.members[i].name,json.members[i].age,json.members[i].secretIdentity,json.members[i].powers)
    arrSuperHeroes.push(miembroToObject)
    // console.log(miembroToObject.toString());
  }
}

// Creamos las opciones del SELECT
function generateSelect(json) {
  var select = document.querySelector("#selHeroes");
  // console.log(select);
  for (let miembro of json.members) {
    console.log(miembro.name);
    let nombre = miembro.name;
    let option = document.createElement("option");
    option.setAttribute("value", nombre);
    option.innerHTML = nombre;
    select.appendChild(option);
  }
}

// Visualizamos los datos en un textarea
function showHeroe(hero) {
  for (var i = 0; i < arrSuperHeroes.length; i++) {
    // console.log(arrSuperHeroes[i].name)
    if (arrSuperHeroes[i].name == hero) {
      document.querySelector("#visCaja").value = arrSuperHeroes[i].toString();
    }
  }
}
