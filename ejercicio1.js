// Enunciado Ejercicio 1:
// Dado un número, devolver su tabla de multiplicar completa.

// Ejemplos:
// -Ejecuto esta función:
// tablaMultiplicar(5)

// -Me devuelve este resultado:
// # Tabla del 5 #
// 1 x 5 = 5
// 2 x 5 = 10
// 3 x 5 = 15
// 4 x 5 = 20
// 5 x 5 = 25
// 6 x 5 = 30
// 7 x 5 = 35
// 8 x 5 = 40
// 9 x 5 = 45
// 10 x 5 = 50


const tablaMultiplicar = (valor)=>{
    for(let i =1;i<=10; i++){
        console.log(`${i} x ${valor}=`,i *valor)



    }


}

tablaMultiplicar(10);