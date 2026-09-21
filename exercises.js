// ==========================================
// NÚMEROS
// ==========================================

// 1. Suma de dos números
function sumar(a, b) {
    return a + b;
}

// 2. Resta de dos números
function restar(a, b) {
    return a - b;
}

// 3. Producto de dos números
function multiplicar(a, b) {
    return a * b;
}

// 4. División de dos números
function dividir(a, b) {
    return a / b;
}

// 5. Potencia
function potencia(base, exponente) {
    return Math.pow(base, exponente);
}

// 6. Resto de la división
function resto(a, b) {
    return a % b;
}

// 7. Raíz cuadrada
function raizCuadrada(num) {
    return Math.sqrt(num);
}

// 8. Valor absoluto
function valorAbsoluto(num) {
    return Math.abs(num);
}

// 9. Redondear al entero más cercano
function redondear(num) {
    return Math.round(num);
}

// 10. Número aleatorio entre 0 y 1
function numeroAleatorio() {
    return Math.random();
}


// ==========================================
// LETRAS
// ==========================================

// 1. Concatenación de cadenas
function concatenar(str1, str2) {
    return str1 + str2;
}

// 2. Longitud de una cadena
function longitudCadena(str) {
    return str.length;
}

// 3. Cadena en mayúsculas
function aMayusculas(str) {
    return str.toUpperCase();
}

// 4. Cadena en minúsculas
function aMinusculas(str) {
    return str.toLowerCase();
}

// 5. Carácter en una posición (índice)
function obtenerCaracter(str, indice) {
    return str.charAt(indice);
}

// 6. Cadena invertida
function invertirCadena(str) {
    return str.split('').reverse().join('');
}

// 7. Contar aparición de un carácter
function contarCaracter(str, caracter) {
    let contador = 0;
    for (let char of str) {
        if (char === caracter) contador++;
    }
    return contador;
}

// 8. Sin espacios en blanco
function eliminarEspacios(str) {
    return str.replace(/\s+/g, '');
}

// 9. Es palíndromo
function esPalindromo(str) {
    const limpio = str.toLowerCase().replace(/[\W_]/g, '');
    const invertido = limpio.split('').reverse().join('');
    return limpio === invertido;
}

// 10. Primera letra de cada palabra en mayúscula
function capitalizarPalabras(str) {
    return str.replace(/\b\w/g, l => l.toUpperCase());
}


// ==========================================
// ARRAYS
// ==========================================

// 1. Suma de elementos de un array
function sumarArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// 2. Promedio de elementos
function promedioArray(arr) {
    if (arr.length === 0) return 0;
    return sumarArray(arr) / arr.length;
}

// 3. Ordenar array de forma ascendente
function ordenarArray(arr) {
    return [...arr].sort((a, b) => a - b);
}

// 4. Elementos mayores a un número dado
function filtrarMayoresA(arr, num) {
    return arr.filter(el => el > num);
}

// 5. Combinar dos arrays
function combinarArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

// 6. Número máximo
function maximoArray(arr) {
    return Math.max(...arr);
}

// 7. Número mínimo
function minimoArray(arr) {
    return Math.min(...arr);
}

// 8. Cantidad de veces que un elemento aparece en el array
function contarElementoArray(arr, elemento) {
    return arr.filter(el => el === elemento).length;
}

// 9. Array sin elementos duplicados
function eliminarDuplicados(arr) {
    return [...new Set(arr)];
}

// 10. Array en orden inverso
function invertirArray(arr) {
    return [...arr].reverse();
}


// ==========================================
// OBJETOS LITERALES
// ==========================================

// 1. Obtener valor de la propiedad "nombre"
function obtenerNombre(obj) {
    return obj.nombre;
}

// 2. Actualizar propiedad "edad"
function actualizarEdad(obj, nuevaEdad) {
    obj.edad = nuevaEdad;
    return obj;
}

// 3. Agregar nueva propiedad con valor null
function agregarPropiedad(obj, nombrePropiedad) {
    obj[nombrePropiedad] = null;
    return obj;
}

// 4. Eliminar propiedad de un objeto
function eliminarPropiedad(obj, nombrePropiedad) {
    delete obj[nombrePropiedad];
    return obj;
}

// 5. Cantidad de propiedades
function cantidadPropiedades(obj) {
    return Object.keys(obj).length;
}

// 6. Verificar si el objeto tiene una propiedad
function tienePropiedad(obj, nombrePropiedad) {
    return obj.hasOwnProperty(nombrePropiedad);
}

// 7. Array con todos los valores de sus propiedades
function valoresPropiedades(obj) {
    return Object.values(obj);
}

// 8. Comparar si dos objetos son iguales
function sonObjetosIguales(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) return false;
    }
    return true;
}

// 9. Copia exacta de un objeto
function copiarObjeto(obj) {
    return { ...obj };
}

// 10. Fusionar dos objetos (prevalece el segundo)
function fusionarObjetos(obj1, obj2) {
    return { ...obj1, ...obj2 };
}