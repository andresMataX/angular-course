interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Helena',
    detalles: {
        autor: 'My Chemical Romance',
        anio: 2004
    }
}

const { volumen, segundo, cancion, detalles: { autor: autorDetalle, anio } } = reproductor;
// Preferible:
// const { autor: autorDetalle, anio } = detalles;

/*console.log('El volumen actual es', volumen);
console.log('El segundo actual es', segundo);
console.log('La canción actual es', cancion);
console.log('El autor es', autorDetalle);
console.log('El año es', anio);*/

const sw: string[] = ['Yoda', 'Luke', 'Leia'];
const [, , personaje3] = sw;
// console.log('Personaje 1:', personaje1);
// console.log('Personaje 2:', personaje2);
console.log('Personaje 3:', personaje3);