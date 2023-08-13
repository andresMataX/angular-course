function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1, 3, 2, 4, 8, 7, 8, 9, 7]);
let soyExplicito = queTipoSoy<string>('Hola Mundo');