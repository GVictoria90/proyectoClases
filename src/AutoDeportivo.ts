export default class AutoDeportivo {
    private modelo: string;
    private marca: string;
    private velocidadMaxima: number;
  
    constructor(modelo: string, marca: string, velocidadMaxima: number) {
      this.modelo = modelo;
      this.marca = marca;
      this.velocidadMaxima = velocidadMaxima;
    }
  
    acelerar(): void {
      console.log(`Acelerando a ${this.velocidadMaxima} km/h`);
    }
  
    frenar(): void {
      console.log('Frenando');
    }
  
    obtenerModelo(): string {
      return this.modelo;
    }
  
    obtenerMarca(): string {
      return this.marca;
    }
  
    obtenerVelocidadMaxima(): number {
      return this.velocidadMaxima;
    }
  }

//Para usar esta clase, simplemente cree una nueva instancia de AutoDeportivo para llamar a los métodos que necesito:

  
const miAuto = new AutoDeportivo('Aventador', 'Lamborghini', 350);
console.log(miAuto.obtenerMarca()); // Output: "Lamborghini"
miAuto.acelerar(); // Output: "Acelerando a 350 km/h"
miAuto.frenar(); // Output: "Frenando"

/*La clase AutoDeportivo tiene tres propiedades privadas: modelo, marca y velocidadMaxima. 
El constructor de la clase acepta valores para estas propiedades y los asigna a las variables correspondientes.*/
/*La clase también tiene tres métodos públicos: acelerar, frenar, obtenerModelo, obtenerMarca y obtenerVelocidadMaxima.
 El método acelerar simplemente imprime un mensaje en la consola, indicando que el auto está acelerando a su velocidad máxima.
 El método frenar imprime un mensaje en la consola que indica que el auto está frenando.*/
 /*Los métodos obtenerModelo, obtenerMarca y obtenerVelocidadMaxima devuelven el valor correspondiente de la propiedad que corresponde.*/