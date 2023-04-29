export default class Camioneta {
    private modelo: string;
    private marca: string;
    private capacidadCarga: number;

  
    constructor(modelo: string, marca: string, capacidadCarga: number) {
      this.modelo = modelo;
      this.marca = marca;
      this.capacidadCarga = capacidadCarga;
    }
  
    cargar(carga: number): void {
      if (carga > this.capacidadCarga) {
        console.log('La carga excede la capacidad de la camioneta');
      } else {
        console.log(`Cargando ${carga} kg`);
      }
    }
  
    descargar(): void {
      console.log('Descargando la carga');
    }
  
    obtenerModelo(): string {
      return this.modelo;
    }
  
    obtenerMarca(): string {
      return this.marca;
    }
  
    obtenerCapacidadCarga(): number {
      return this.capacidadCarga;   
    }
}

const miCamioneta = new Camioneta('Ranger', 'Ford', 1000);
console.log(miCamioneta.obtenerMarca()); // Output: "Ford"
miCamioneta.cargar(800); // Output: "Cargando 800 kg"
miCamioneta.cargar(1200); // Output: "La carga excede la capacidad de la camioneta"
miCamioneta.descargar(); // Output: "Descargando la carga"
