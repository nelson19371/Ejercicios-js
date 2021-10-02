// Enunciado Ejercicio 2:
// Dada una cadena de Texto, comprobar si es un palindromo o no.Dada
// Los palíndromos son palabras que se leen igual aun estando invertidas 
// por ejemplo: ana,bob, otto, allivessevilla




const palabra = (palabra)=>{
    const reversa =palabra.split("").reverse().join("")
    if(palabra == reversa){
        console.log('Es un palindromo')
    }else{
        console.log('No es un palindromo')
    }


  
}


palabra('ana');