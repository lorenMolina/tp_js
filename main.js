import "./style.css";

// //Ejercicio 1.2
// const a = 5;
// const b = 10;
// const c = a + b;
// console.log("La suma es " + c);

// //Ejercicio 1.3
// let nombreUsuario;
// nombreUsuario = prompt("¿Cuál es tu nombre?");
// console.log("Hola, " + nombreUsuario + "!");

// //Ejercicio 2.1
// let a1 = 1;
// let b1 = 2;
// let c1;
// console.log("El mayor es ", a1 > b1 ? a1 : b1);

// //Ejercicio 2.2
// let numeroIngresado;
// numeroIngresado = prompt("Ingrese un número para determinar su paridad");
// console.log(`El número ${numeroIngresado} es`, numeroIngresado % 2 === 0 ? "par" : "impar");

// //Ejercicio 3.1
// let variable = 10;
// while(variable > 0){
//     console.log(variable--);
// }

//Ejercicio 3.2
// let mayorACien;
// do{
//     mayorACien = prompt("Ingrese un número mayor a 100: ")
// }while(mayorACien <= 100);
// console.log("Ingresaste un número mayor a 100: ", mayorACien);

//Ejercicio 4.1
// let numParametro = prompt("Ingrese un número para ver si es par")
// function esPar(numParametro){
//     return numParametro % 2 === 0;
// }

// console.log("El número es par: ", esPar(numParametro));

//Ejercicio 4.2
// let gradosC
// let gradosF
// gradosC = prompt("Ingrese un número en grados celsius y lo convertiré a Fahrenheit")
// function convertirCelsiusAFahrenheit(gradosC){
//     gradosF = gradosC * 1.8 + 32;
//     return gradosF;
// }
// console.log(`${gradosC}°C son equivalentes a`, `${convertirCelsiusAFahrenheit(gradosC)}°F`)

//Ejercicio 5.1
// const persona = {
//     nombre: "Bart",
//     edad: 10,
//     ciudad: "Springfield",
//     cambiarCiudad: function(ciudadNueva){
//         this.ciudad = ciudadNueva;
//     }
// };
// persona.cambiarCiudad(prompt("Ingrese ciudad nueva"));
// console.log("Nombre: ", persona.nombre, ", Edad: ", persona.edad, ", Ciudad: ", persona.ciudad)

//Ejercicio 5.2
// const libro = {
//     titulo: "Un mundo feliz",
//     autor: "Aldous Huxley",
//     año: 1932,
//     mayorADiezAños: function(año){
//         let antiguo
//         if(2024 - año > 10){
//             return antiguo = true;
//         }else {
//             return antiguo = false;
//         }
//     }
// }
// console.log("El libro", libro.titulo, "del autor", libro.autor, "es antiguo:" ,libro.mayorADiezAños(libro.año));

//Ejercicio 6.1
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let numerosx2 = numeros.map((elemento)=>{
//     return elemento * 2;    
// })
// console.log("Números originales:", numeros);
// console.log("Números multiplicados por 2:", numerosx2);

// //Ejercicio 6.2
// let pares = [];
// for(let i=1; i<=20; i++){
//     if(i % 2 === 0){
//         pares.push(i);
//     }
// }
// console.log("Primeros 10 números pares:",pares);

//Ejercicio 7.1
const parrafo1 = document.getElementById("parrafo1");
const parrafo2 = document.getElementById("parrafo2");
const parrafo3 = document.getElementById("parrafo3");
const button = document.getElementById("button");
button.addEventListener("click", ()=>{
    parrafo1.style = "color:blue";
    parrafo2.style = "color:blue";
    parrafo3.style = "color:blue";
});

//Ejercicio 7.2
const submitButton = document.getElementById("formButton");
const input = document.getElementById("input");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const text = input.value;
  alert("Has ingresado: " + text);
});

//Ejercicio 8.1
const lis = document.querySelectorAll("li");
lis.forEach((li) => {
  li.addEventListener("click", (e) => console.log(li.innerHTML));
});

//Ejercicio 8.2
const btnHab = document.getElementById("hab");
const btnDes = document.getElementById("deshab");
const input2 = document.getElementById("input2");
btnHab.addEventListener("click", () => (input2.disabled = false));
btnDes.addEventListener("click", () => (input2.disabled = true));

//Ejercicio 9
document.addEventListener('DOMContentLoaded', () => {
  const correo = document.getElementById('correo');
  const guardarBoton = document.getElementById('svBtn');
  const borrarBoton = document.getElementById('delBtn');
  const mensajeCorreo = document.getElementById('mensaje');
  const validarCorreo = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const mostrarMensaje = (mensaje) => {
      mensajeCorreo.textContent = mensaje;
      console.log(mensaje);
  }

  guardarBoton.addEventListener('click', (guardado) => {
      guardado.preventDefault();
      const email = correo.value;
      if (email === '') {
          mostrarMensaje('Ingresa un correo')
      } else if (validarCorreo(email)) {
          localStorage.setItem('email', email);
          mostrarMensaje(`${email} guardado`)
      } else {
          mostrarMensaje('Correo no válido, ingresa uno nuevo por favor');
      }
  })

  borrarBoton.addEventListener('click', () => {
      const emailGuardado = localStorage.getItem('email');
      if (emailGuardado) {
          localStorage.removeItem('email');
          mostrarMensaje('Email borrado');
      } else {
          mostrarMensaje('No hay ningún correo guardado');
      }
  })
})
