var nombre  = document.getElementById('name');
var apellido = document.getElementById('lastname');
var email = document.getElementById('input-email');
var pass = document.getElementById('input-password');
var select = document.getElementById('bicis').selectedIndex;
var tooltip = document.getElementsByClassName('tooltiptext');
/*
var resultado = document.getElementById('mostrar');
var tooltipName = document.getElementById('tooltipName');
var tooltipLastname = document.getElementById('tooltipLastname');
var tooltipEmail = document.getElementById('tooltipEmail');
var tooltipPass = document.getElementById('tooltipPass');
var tooltipSelect = document.getElementById('tooltipSelect');
*/
console.log(tooltip);
function validateForm(){
  /* ***********validacion del nombre ***********/
  //valida que no escriba un nombre vacio, ni espacios en blanco ni números.
  if(nombre.value == "" || nombre.value == null || nombre.value == 0){
    tooltip[0].style.display = "block";
    tooltip[0].innerHTML = "Debes ingresar su nombre";
    //mostrarOcultar(0,"Debes ingresar su nombre");
  }else if (/[0-9]/.test(nombre.value)) {
    tooltip[0].style.display = "block";
    tooltip[0].innerHTML = "Debes ingresar un nombre válido";
    //mostrarOcultar(0,"Debes ingresar un nombre válido");
  }
  var nombreMayuscula = nombre.value.charAt(0);
  if(nombreMayuscula.toUpperCase() != nombreMayuscula){
    tooltip[0].style.display = "block";
    tooltip[0].innerHTML = "La primera letra debe ser mayuscula";
    //mostrarOcultar(0,"La primera letra debe ser mayuscula");
  }
  /* ***********validacion del apellido ***********/
  //valida que no escriba un apellido vacio, ni espacios en blanco ni números.
  if(apellido.value == "" || apellido.value == null || apellido.value == 0){
    tooltip[1].style.display = "block";
    tooltip[1].innerHTML = "Debe ingresar su apellido";
    //mostrarOcultar(1,"Debe ingresar su apellido");
  }else if ( /[0-9]/.test(apellido.value)) {
    tooltip[1].style.display = "block";
    tooltip[1].innerHTML = "Debes ingresar un apellido válido";
    //mostrarOcultar(1,"Debes ingresar un apellido válido");
  }
  var apellidoMayuscula = apellido.value.charAt(0)
  if(apellidoMayuscula.toUpperCase() != apellidoMayuscula){
    tooltip[1].style.display = "block";
    tooltip[1].innerHTML = "La primera letra debe ser mayuscula";
    //mostrarOcultar(1,"Debes ingresar un apellido válido");
  }
  /* ***********validacion del correo ***********/
  if(email.value == "" || email.value == null || email.value == 0){
    tooltip[2].style.display = "block";
    tooltip[2].innerHTML = "Debe escribir un correo";
    //mostrarOcultar(2,"Debe escribir un correo");
  }
  var expresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/ ;
  if(!expresion.test(email.value)){
    tooltip[2].style.display = "block";
    tooltip[2].innerHTML = "Escriba un correo válido";
    //mostrarOcultar(2,"Debe escribir un correo");
  }
  /* ***********validacion del password ***********/
  if(pass.value == "password"|| pass.value == "123456" || pass.value == "098754"){
    tooltip[3].style.display = "block";
    tooltip[3].innerHTML = "Escriba un pass válido";
    //mostrarOcultar(3,"Escriba un pass válido");
  }else  if(!(/.{6,}/.test(pass.value))){
    tooltip[3].style.display = "block";
    tooltip[3].innerHTML = "La contrasenia debe ser mayor  a 6 caraceteres";
    //mostrarOcultar(3,"La contrasenia debe ser mayor  a 6 caraceteres");
  }
  /*********validacion del select**************/
  if(select == null){
    tooltip[4].style.display = "block";
    tooltip[4].innerHTML = "Debes seleccionar un valor";
    //mostrarOcultar(4,"Debes seleccionar un valor");
  }
}

function mostrarOcultar(id,mensaje){
    for(var i = 0; i < tooltip.length; i++){
      tooltip[i].style.display = "none";
    }
    tooltip[id].style.display = "block";
    tooltip[id].innerHTML = mensaje;
}
