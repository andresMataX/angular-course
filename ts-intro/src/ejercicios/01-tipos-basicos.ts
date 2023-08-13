
/*
    ===== Código de TypeScript =====
*/


let nombre: string = 'Cherso';

// No es posible
// nombre = 5;

// Especificamos los tipos de datos que puede recibir
let hp: number | string = 95;
hp = 'FULL';

let estaVivo: boolean = true;

console.log(nombre, hp, estaVivo);