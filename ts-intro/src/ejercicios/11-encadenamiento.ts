interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Andrés'
}

const pasajero2: Pasajero = {
    nombre: 'Alma',
    hijos: ['Andrés', 'Emilio']
}

function imprimeHijos({ hijos }: Pasajero): void {
    const cuantosHijos = hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimeHijos(pasajero2);
imprimeHijos(pasajero1);