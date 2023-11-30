/*Sentencias : un programa es una sucesión de secuencias, finalizadas en ;
    JavaScript es case sensitive*/

    let a = 5;  // declaración con let
    var b = 4;  // declaración con var
    let c = a + b;
    console.log(c);
    
    //Identificadores: nombres que asignamos a variables y funciones
    // palabras reservadas break, case, const, let, try,  void, while
    const constanteUnica = 5; 
    const CONSTANTE_UNICA = 8; // Identificador de variable lower camel case, seaconseja usar mayúsculas para las variables
    console.log("la constante declarada vale " + constanteUnica);
    console.log("la constante declarada vale " + CONSTANTE_UNICA);
    
/*     constanteUnica = 6; 
 */    console.log("la constante declarada vale " + constanteUnica);
    /**Bloque : conjunto de sentencias agrupadas, ej: al declarar una función */
    
    function factorialEjemplo(n)   // Para dar formato en vs code shift+alt+f
    {
        if (n === 0) {
            return 1;
        }
        return n * factorialEjemplo(n - 1);
    }
    
    console.log("El factorial de el número 4 es: " + factorialEjemplo(4));