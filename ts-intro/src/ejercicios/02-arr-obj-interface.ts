/*
    arreglos
*/
// let habilidades: (string | number | boolean)[] = ['Bash', 'Counter', 'Healing', 5, false];
let habilidades: string[] = ['Bash', 'Counter', 'Healing'];
habilidades.push('5');

/*
    objetos
*/

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string; // Propiedad opcional
}

const personaje: Personaje = {
    nombre: 'Cherso',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Momo';

console.table(personaje);