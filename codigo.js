'use strict'

alert("Bienvenido al cajero");
let usuario = prompt("Ingrese su usuario");
let contraU = ("0123");
let contador = 0;
let contraN;
do {
    contador++
    contraN = Number(prompt("ingrese los 4 digitos"));
}
while (contraN != contraU && contador < 3);
if (contraN == contraU){
    alert("Bienvenido" + usuario + "su contraseña es correcta");
} else{
    alert("Sus intentos fueron " + contador + " intentos");
    alert("Tu contraseña es incorrecta");
};
