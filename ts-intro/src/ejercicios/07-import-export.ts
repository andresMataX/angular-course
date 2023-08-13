import { Producto, calculaIVA } from './06-desestructuracion-fn';

const carritoCompras: Producto[] = [
    {
        desc: 'HP Laptop',
        precio: 15000
    },
    {
        desc: 'Mac',
        precio: 15010
    }
]

const [total, iva] = calculaIVA(carritoCompras);

console.log(total);
console.log(iva);