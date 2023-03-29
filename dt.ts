

import { parse } from "https://deno.land/std@0.125.0/datetime/mod.ts";

const myday = parse("04 07 2021", "dd mm yyyy");
console.log(myday);

import { red, blue, bold } from "https://deno.land/std@0.179.0/fmt/colors.ts";

console.log(bold(blue("hola mundo")));

//Esta es la forma que tiene Deno de levantar parámetros de la línea de comandos. Similar a process.argv, con Deno.args podemos levantar los parámetros.
console.log(Deno.args)

import "https://deno.land/x/dotenv@v3.2.2/load.ts"; 

const port = Number(Deno.env.get("PORT")) || 8080;
console.log(port)
//y ejecutar con deno run --allow-read dt.ts 8080
//y darle Y cuando pide permiso en consola para acceder a .env

await Deno.writeTextFile("test.txt", "Hola deno facil!")
//Para tener entonces el permiso para ejecutar ese proceso, ejecutamos el código con el flag: --allow-write. 

const text = await Deno.readTextFile("test.txt");
console.log(text)


const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
const resJson = await res.json()
console.log(resJson)
//denon run dt.ts
//o con el script: denon dev
//y en ese script ir agregando los permisos que vaya pidiendo para ejecutar el archivo