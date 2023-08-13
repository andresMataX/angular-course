function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, base: number, otroNumero: number = 10): number {
    return numero * base;
}

interface PersonajeSW {
    nombre: string;
    pv: number;
    mostrarHP: () => void
}

function curar(personaje: PersonajeSW, curarX: number): void {
    personaje.pv += curarX;

    // console.log(personaje);
}

const nuevoPersonaje: PersonajeSW = {
    nombre: 'Yoda',
    pv: 1000,
    mostrarHP() {
        console.log(`Puntos de vida: ${this.pv}`);
    }
}

curar(nuevoPersonaje, 500);
nuevoPersonaje.mostrarHP();