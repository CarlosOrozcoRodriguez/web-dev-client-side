// Definimos un prototipo de objeto
let animal = { 
    tipo: 'desconocido', 
    sonido: 'hace ruido', 
    hacerSonido: function() {
    console.log(this.sonido);
    } 
    };
    
    // Creamos un nuevo objeto utilizando el prototipo 'animal'
    let perro = Object.create(animal);
    perro.tipo = 'perro'; 
    perro.sonido = 'ladra'; 
    
    // Accedemos a las propiedades y métodos del objeto 'perro'
    console.log(perro.tipo); // Output: perro
    perro.hacerSonido(); // Output: ladra
    // Modificamos el valor de una propiedad existente en el prototipo
    perro.sonido = 'hace ruido'; 
    perro.hacerSonido(); // Output: hace ruido