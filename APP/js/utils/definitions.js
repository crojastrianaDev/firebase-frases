//comunicación con el DOM, definición de botones y formularios

const registroForm = document.getElementById("form-registro");
const loginForm = document.getElementById("form-login");
const salir = document.getElementById("logout");//botón salir

//elementos  a mostrar con in o out
const loggedIn = document.querySelectorAll(".in");
const loggedOut = document.querySelectorAll(".out");
const detalleCuenta = document.querySelector(".detalles-perfil");
const frasesUl =  document.querySelector(".frases");

//frase
const formFrase= document.querySelector("#create-form");

//admin forms
const crearAdmin = document.querySelectorAll(".admin");
const adminForm = document.querySelector("#adminForm");