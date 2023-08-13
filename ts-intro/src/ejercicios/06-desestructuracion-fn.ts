export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Samsung J6',
    precio: 150
}

const tableta: Producto = {
    desc: 'Ipad',
    precio: 350
}

export function calculaIVA(productos: Producto[]): [number, number] {
    let total = 0;

    productos.forEach(({ precio }) => {
        total += precio;
    })

    return [total, total * 0.16];
}

const articulos: Producto[] = [telefono, tableta];

const [total, iva] = calculaIVA(articulos);
console.log(total);
console.log(iva);