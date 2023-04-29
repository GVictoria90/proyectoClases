export default class Autociudad {
    private marca: string;
    private modelo: string;
    private año: number;
    private velocidad: number;
  
    constructor(marca: string, modelo: string, año: number) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
      this.velocidad = 0;
    }

    acelerar(velocidad: number): void {
      this.velocidad += velocidad;
      console.log(`La velocidad actual de ${this.marca} ${this.modelo} es de ${this.velocidad} km/h.`);
    }
  
    frenar(): void {
      if (this.velocidad > 0) {
        this.velocidad -= 10;
        console.log(`La velocidad actual de ${this.marca} ${this.modelo} es de ${this.velocidad} km/h.`);
      } else {
        console.log(`El auto ${this.marca} ${this.modelo} ya está detenido.`);
      }
    }
  
    getMarca(): string {
      return this.marca;
    }
  
    getModelo(): string {
      return this.modelo;
    }
  
    getAño(): number {
      return this.año;
    }
  }
  
  // Ejemplo de uso
  const miAuto = new Autociudad("Toyota", "Corolla", 2020);
  console.log(`Mi auto es un ${miAuto.getMarca()} ${miAuto.getModelo()} del año ${miAuto.getAño()}.`);
  miAuto.acelerar(50);
  miAuto.acelerar(20);
  miAuto.frenar();
  miAuto.frenar();
  

  /* la clase Autociudad tiene tres propiedades (marca, modelo y año), 
  una propiedad privada (velocidad) y tres métodos públicos (acelerar, frenar y los getters para las propiedades). 
  Además, el constructor inicializa las propiedades marca, modelo y año, y la propiedad velocidad se inicializa en cero.*/