class Animal { 
    constructor(tipo, sonido) {
    this.tipo = tipo;
    this.sonido = sonido;
    } 
    
    hacerSonido() {
    console.log(this.sonido);
    } 
    } 
    
    class Perro extends Animal { 
    constructor() {
    super('perro', 'ladra');
    } 
    } 
    
    class Gato extends Animal { 
    constructor() {
    super('gato', 'maulla');
    } 
    
    hacerSonido() {
    console.log('El gato dice: ' + this.sonido);
    } 
    } 
    
    let miPerro = new Perro();
    let miGato = new Gato();
    
    miPerro.hacerSonido(); // Output: ladra
    miGato.hacerSonido(); // Output: El gato dice: maulla