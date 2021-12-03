/*

Considera una lista/array de ovejas.

Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean
de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

Por ejemplo, si tenemos las ovejas:

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'}
]
Al ejecutar el método debería devolver lo siguiente:

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

[{ name: 'Navidad', color: 'rojo' },
 { name: 'Ki Na Ma', color: 'rojo' }]

 */

const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "Ki Ne Mr", color: "rojo" },
  { name: "aN", color: "rojo" },
  { name: "a", color: "rojo" },
];

export default function contarOvejas(ovejas) {
  return ovejas.filter(
    ({ name, color }) =>
      color == "rojo" && name.search("[aA]") != -1 && name.search("[nN]") != -1
  );
}

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);
