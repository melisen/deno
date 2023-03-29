import { red, blue, bold } from "https://deno.land/std@0.179.0/fmt/colors.ts";

const numeros = Deno.args.map(numero => Number(numero));
const min = Math.min(...numeros);
const max = Math.max(...numeros);
const promedio = (numeros.reduce((acc, numero)=> acc + numero, 0))/numeros.length;
console.log(promedio);

const arrayNumeros = [];
arrayNumeros.push(numeros);
arrayNumeros.push(min);
arrayNumeros.push(max);
arrayNumeros.push(promedio);

await Deno.writeTextFile("resultados.dat", arrayNumeros.join("\n"))

//console.log(min, max)