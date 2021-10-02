// Enunciado Ejercicio4:

// Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres, sin usar métodos propios del lenguaje,
// solo estructuras de control


const invertir = (palabra)=>{
    let palabraI='';
    for(let letra of  palabra){
        palabraI = letra + palabraI;
    }
    console.log(palabraI);
}


invertir('nelson')