addEventListener('load',inicio,false)
function inicio() {
  // Get All Cookies
  evento = document.querySelector("#btnAllCookies")
  evento.addEventListener('click',function () {
    showCookies()
  },false)

  // Get Cookie
  evento = document.querySelector("#btnGetCookie")
  evento.addEventListener('click',function () {
    let cName = document.querySelector("#inpNombreGet").value
    showCookie(cName)
  },false)

  // Set Cookie
  evento = document.querySelector("#btnSetCookie")
  evento.addEventListener('click',function () {
    let cName = document.querySelector("#inpNombreSet").value
    let cValor = document.querySelector("#inpValor").value
    setCookie(cName,cValor)
    showCookies()
  })

  // Delete Cookie
  evento = document.querySelector("#btnDelCookie")
  evento.addEventListener('click',function () {
    let cName = document.querySelector("#inpNombreDel").value
    delCookie(cName)
    showCookies()
  })
  // Delete ALL Cookies
  evento = document.querySelector("#btnDelAllCookies")
  evento.addEventListener('click',function () {
    delAllCookies()
    showCookies()
  })
}

// Set cookie
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Get cookie por nombre
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Get ALL cookies
function getCookies() {
  return document.cookie;
}

// Delete Cookie
function delCookie(cName) {
  return document.cookie = `${cName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`
}
// Delete All Cookies
function delAllCookies() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  }
}

// Show Cookies
function showCookies() {
  let allCookies = getCookies()
  document.querySelector("#visualizar").innerHTML = allCookies
}
function showCookie(cName) {
  let allCookies = getCookie(cName)
  document.querySelector("#visualizar").innerHTML = allCookies
}

// Check cookie
function checkCookie() {
  let username = getCookie("username");
  if (username != "") {
   alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
      setCookie("username", username, 365);
    }
  }
}
