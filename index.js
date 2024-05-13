// Obtener la hora actual (Depende del servidor)
const horaActual = new Date().getHours();
const minutosActuales = new Date().getMinutes();

const BlackMoon = {
  saldoTotal: 0,
  sucursales: [],
  // Muestra los datos del Objeto principal
  mostrarBlackMoon() {
    return `Saldo total: ${this.saldoTotal} Sucursales: ${this.sucursales}`;
  }
}

class Sucursal {
  constructor(nombreSucursal, idSucursal, saldoSucursal, estado, calle, numeroCalle,
             codigoPostal, delegacion, horaApertura, minutoApertura, horaCierre, minutoCierre) {
    this.nombreSucursal = nombreSucursal;
    this.idSucursal = idSucursal;
    this.saldoSucursal = saldoSucursal;
    this.estado = estado;
    this.calle = calle;
    this.numeroCalle = numeroCalle;
    this.codigoPostal = codigoPostal;
    this.delegacion = delegacion;
    this.horaApertura = horaApertura;
    this.minutoApertura = minutoApertura;
    this.horaCierre = horaCierre;
    this.minutoCierre = minutoCierre;
    this.empleados = [];
  }

  aperturaOCierreAutomatico() {
    let abierto = false; 
    if ((horaActual > this.horaApertura || (horaActual === this.horaApertura && 
                                           minutosActuales >= this.minutoApertura)) &&
       (horaActual < this.horaCierre || (horaActual === this.horaCierre && 
                                         minutosActuales < this.minutoCierre))) {
      console.log(`La sucursal ${this.nombreSucursal} está abierta 
      en el estado de ${this.estado}. Son las ${horaActual} y ${minutosActuales}`);
      abierto = true;
    } else {
      console.log(`La sucursal ${this.nombreSucursal} está cerrada en el estado 
      de ${this.estado} por ser las ${horaActual} y ${minutosActuales}`);
      abierto = false;
    }
    return abierto;
  }
  
  /*
  Muestra toda la información de la sucursal
  */
  mostrarInfoSucursal() {
    return `El nombre de la sucursal es: ${this.nombreSucursal}
    su id es: ${this.idSucursal} 
    abierto: ${this.aperturaOCierreAutomatico()}
    su saldo es: ${this.saldoSucursal}
    su estado es: ${this.estado} 
    su calle es: ${this.calle}
    su numero de calle es: ${this.numeroCalle} 
    su codigo postal es: ${this.codigoPostal}
    su delegacion es: ${this.delegacion} 
    su hora de apertura es: ${this.horaApertura}
    su minuto de apertura es: ${this.minutoApertura}
    su hora de cierre es: ${this.horaCierre}
    su minuto de cierre es: ${this.minutoCierre}`;
  }

  /*
  Modifica el estado de apertura de la sucursal manualmente,
  si la sucursal está abierta, se cierra, y viceversa.
  */
  aperturaOCierreManual() {
    if(this.abierto === true){
      console.log('Acabas de cerrar la sucursal');
      this.abierto = false;
    } else {
      console.log('Acabas de abrir la sucursal');
      this.abierto = true;
    }
  }
  
  abonarASaldoTotal() {
    /*ToDo: Agregar un método que permita abonar el saldo total de la sucursal al saldo 
    total de BlackMoon. */
  }
}

const sucursal1 = new Sucursal('Sucursal Iztacalco', 20213, 0, 'CDMX', 'Coruña', 209, 
                               9004, 'Iztacalco', 0, 0, 0, 55);

BlackMoon.sucursales.push(sucursal1);

//console.log(sucursal1.aperturaOCierreAutomatico());
console.log(sucursal1.mostrarSucursal());