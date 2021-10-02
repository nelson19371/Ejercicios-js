// Enunciado Ejercicio5
// ¿cuanto es el x porciento de x numero?

const porcentaje = (porciento,numero)=>{
    let porc = porciento/100;

    let resultado = numero*porc;

    console.log(`El resultado es: ${resultado}`);


}


porcentaje(30,1500);