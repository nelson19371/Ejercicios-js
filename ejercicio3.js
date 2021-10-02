// Enunciado Ejercicio 3:
// Dada una palabra, buscarla en una frase y devolver cuantas veces aparece, la frase y la palabra deben ser parametros de una función



const buscar = (frase,palabra)=>{

    let texto = frase.toLowerCase().replace(/[!¡.,-]/gi,'')
    let resultado = 0;

    if(texto.includes(palabra)){

        let palabras= texto.split(" ");
        for (let i = 0; i < palabras.length; i++) {
            if(palabras[i]==palabra){
                resultado++
            }
            
        }
        console.log('Cantidad de veces encontrada :'+resultado);

    }else{
        resultado = 0;
        console.log('Cantidad de veces encontrada :'+resultado);
    }

}



buscar('hola mi nombre es nelson nelson nelson','nelson');