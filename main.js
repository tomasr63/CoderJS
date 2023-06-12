//variables, condicionales, ciclos e iteraciones y funciones

const validarNumero = (numero) => { // Si los datos (numero) no son validos, esta funcion devuelve true
    return isNaN(parseInt(numero));
}

const armarTabla = () => { // Mi funcion

    let tablaDel = prompt("Devolveré la tabla del:"); // Pedir los datos y guardarlos en variables
    let ultimoMultiplicador = prompt("Ultimo numero de la tabla?");
    
    while(validarNumero(tablaDel) || validarNumero(ultimoMultiplicador)){ // Mientras no sean datos válidos, pedirlos de vuelta
        alert("Ingrese datos válidos.");
        tablaDel = prompt("Devolveré la tabla del:");
        ultimoMultiplicador = prompt("Ultimo numero de la tabla?");
    }
    
    let tabla = `Tabla del ${tablaDel}:`; // Si los datos son validos se crea la tabla

    for(let i = 1; i <= ultimoMultiplicador; i++) {
        let resultado = tablaDel * i; // Se hacen los calculos y se guardan en la variable resultado 
        tabla += `   ( ${tablaDel} x ${i} = ` + resultado + " ) "; // Se rellena la tabla
    }

    alert(tabla); // Se muestra la tabla

    const otraTabla = prompt("Otra tabla? (S/N)"); // Pregunta si se quiere otra tabla
    const rtaOtraTabla = otraTabla.toUpperCase();

    if(rtaOtraTabla === "S") { // Si se quiere otra tabla, se vuelve a llamar a la funcion(recursividad)
        armarTabla();
    }
}

armarTabla(); // Se llama a la funcion