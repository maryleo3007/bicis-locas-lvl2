var nombre  = document.getElementById('name');
var apellido = document.getElementById('lastname');
var email = document.getElementById('input-email');
var pass = document.getElementById('input-password');
var select = document.getElementById('bicis').selectedIndex;


//console.log(inputbox);
/*
var resultado = document.getElementById('mostrar');
var tooltipName = document.getElementById('tooltipName');
var tooltipLastname = document.getElementById('tooltipLastname');
var tooltipEmail = document.getElementById('tooltipEmail');
var tooltipPass = document.getElementById('tooltipPass');
var tooltipSelect = document.getElementById('tooltipSelect');
*/

function validateForm(){
  /* ***********validacion del nombre ***********/
  //valida que no escriba un nombre vacio, ni espacios en blanco ni números.
  if(nombre.value == "" || nombre.value == null || nombre.value == 0){
      mostrarOcultar(0,"Debe ingresar su nombre");
  }else if (/[0-9]/.test(nombre.value)) {
      mostrarOcultar(0,"Debe ingresar un nombre válido");
  }
  var nombreMayuscula = nombre.value.charAt(0);
  if(nombreMayuscula.toUpperCase() != nombreMayuscula){
      mostrarOcultar(0,"La primera letra debe ser mayuscula");
  }
  /* ***********validacion del apellido ***********/
  //valida que no escriba un apellido vacio, ni espacios en blanco ni números.
  if(apellido.value == "" || apellido.value == null || apellido.value == 0){
      mostrarOcultar(1,"Debe ingresar su apellido");
  }else if ( /[0-9]/.test(apellido.value)) {
      mostrarOcultar(1,"Debe ingresar un apellido válido");
  }
  var apellidoMayuscula = apellido.value.charAt(0)
  if(apellidoMayuscula.toUpperCase() != apellidoMayuscula){
      mostrarOcultar(1,"Debe ingresar un apellido válido");
  }
  /* ***********validacion del correo ***********/
  if(email.value == "" || email.value == null || email.value == 0){
      mostrarOcultar(2,"Debe escribir un correo");
  }
  var expresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/ ;
  if(!expresion.test(email.value)){
      mostrarOcultar(2,"Debe escribir un correo");
  }
  /* ***********validacion del password ***********/
  if(pass.value == "password"|| pass.value == "123456" || pass.value == "098754"){
      mostrarOcultar(3,"Escriba un pass válido");
  }else  if(!(/.{6,}/.test(pass.value))){
      mostrarOcultar(3,"La contrasenia debe ser mayor  a 6 caraceteres");
  }
  /*********validacion del select**************/
console.log(select);
  if(select == 0){
      mostrarOcultar(4,"Debes seleccionar un valor");
  }
}

function mostrarOcultar(id,mensaje){
    var span = document.createElement('span');
    span.classList.add("tooltiptext");
    //span.setAttibute("class","tooltiptext");
    var texto = document.createTextNode(mensaje);
    span.appendChild(texto);
    var inputbox = document.getElementsByClassName('input-box')[id].appendChild(span);
    var tooltip = document.getElementsByClassName('tooltiptext');
    tooltip[id].style.display = "block";
    //tooltip[id].innerHTML = mensaje;
}
