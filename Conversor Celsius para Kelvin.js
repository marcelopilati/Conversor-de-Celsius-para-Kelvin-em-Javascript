import ConversorTemperatura from 'readline-sync';

console.log("Conversor de Celsius para Kelvin!! \n");

let Celsius = ConversorTemperatura.question("Insira a temperatura em Celsius: \n");

let Kelvin = Number(Celsius) + 273.15;

console.log(Celsius + "Celsius equivale a "+Kelvin+" graus kelvin");