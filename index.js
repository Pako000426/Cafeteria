// Obtener la hora actual (Depende del servidor)
const horaActual = new Date().getHours();
const minutosActuales = new Date().getMinutes();

export const BlackMoon = {
  saldoTotal: 100,
  // Arreglo para las sucursales
  sucursales: [],
  // Muestra los datos del Objeto principal
  mostrarSucursales() {
    return this.sucursales;
  },
  mostrarSaldo() {
    return `El saldo total es de: ${this.saldoTotal}`;
  },
  abonarSaldoSucursal(sucursalID, cantidad){
    const sucursal = this.sucursales.find(sucursal => sucursal.idSucursal === sucursalID);
    if(sucursal){
      if(this.saldoTotal > 0 && cantidad <= this.saldoTotal){
        sucursal.saldoSucursal += cantidad;
        this.saldoTotal -= cantidad;
        return `Se han abonado ${cantidad} a la sucursal ${sucursal.nombreSucursal} con exito`;
      } else {
        return `No se puede abonar saldo a la sucursal ${sucursal.nombreSucursal} ${this.saldoTotal > 0 ? 'porque no cuentas con saldo suficiente' : 'porque el saldo de la total es de 0'}`;
      }
    } else {
      return `No se encontro la sucursal ${sucursalID}`;
    }
  }
  
}

class Sucursal {
  constructor(nombreSucursal, idSucursal, saldoSucursal, estado, calle, numeroCalle,
             codigoPostal, delegacion, horaApertura, minutoApertura, horaCierre, minutoCierre) {
    this.nombreSucursal = nombreSucursal;
    this.idSucursal = idSucursal;
    this.abierto = false;
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
    this.abierto; 
    if ((horaActual > this.horaApertura || (horaActual === this.horaApertura && 
                                           minutosActuales >= this.minutoApertura)) &&
       (horaActual < this.horaCierre || (horaActual === this.horaCierre && 
                                         minutosActuales < this.minutoCierre))) {
      console.log(`La sucursal ${this.nombreSucursal} está abierta 
      en el estado de ${this.estado}. Son las ${horaActual} y ${minutosActuales}`);
      this.abierto = true;
    } else {
      console.log(`La sucursal ${this.nombreSucursal} está cerrada en el estado 
      de ${this.estado} por ser las ${horaActual} y ${minutosActuales}`);
      this.abierto = false;
    }
    return this.abierto;
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

  cambiarHoraAperturaYCierre(horaApertura, minutoApertura, horaCierre, minutoCierre){
    this.horaApertura = horaApertura;
    this.minutoApertura = minutoApertura;
    this.horaCierre = horaCierre;
    this.minutoCierre = minutoCierre;
  }

  mostrarSaldoSucursal(){
    return this.saldoSucursal;
  }
  
  abonarASaldoTotal(cantidad) {
    if(this.saldoSucursal > 0 && cantidad <= this.saldoSucursal){
      BlackMoon.saldoTotal += cantidad;
      this.saldoSucursal -= cantidad;
      console.log(`Se ha abonado ${cantidad} al saldo total de BlackMoon con éxito`);
    } else {
      console.log(`No se ha podido abonar la cantidad ${cantidad} al saldo total de 
      BlackMoon ${this.saldoSucursal > 0 ? 'porque no cuentas con saldo suficiente' : 
                  'porque el saldo de la sucursal es de 0'}`);
    }
  }
}

class Persona {
  constructor(nombre, correo, contrasenia) {
    this.nombre = nombre
    this.correo = correo
    this.contrasenia = contrasenia
  }

  iniciarSesion(correo, contrasenia){
    if(this.correo === correo && this.contrasenia === contrasenia){
      console.log(`Bienvenido ${this.nombre}`);
    } else {
      console.log('Credenciales incorrectas');
    }
  }

  verPerfil(){
    return `Nombre: ${this.nombre}
    Correo: ${this.correo}
    Contraseña: ${this.contrasenia}`;
  }
  
}

class Cliente extends Persona {
  constructor(nombre, correo, contrasenia, diaDeNacimiento, mesDeNacimiento) {
    super(nombre, correo, contrasenia);
    this.diaDeNacimiento = diaDeNacimiento;
    this.mesDeNacimiento = mesDeNacimiento;
    this.tarjeta = new Tarjeta(false, 0, 0);
  }
  ordenarAlimentos(){
    //ToDo: Hasta que este creado Orden
  }
}

class Tarjeta {
  constructor(activado, token, saldo) {
    this.activado = activado;
    this.token =  token;
    this.saldo = saldo;
    this.informacionTarjeta = new InformacionTarjetaCliente();
  }
  mostrarTarjeta(){
    return `Activado: ${this.activado}
            Token: ${this.token}
            Saldo: ${this.saldo}`;
  }
}

class InformacionTarjetaCliente {
  constructor (empleadoDNIQueActivo, añoDeActivacion, mesDeActivacion, diaDeActivacion, horaDeActivacion,
              minutoDeActivacion, empleadoDNIQueAbono, añoAbonoTarjetaCte, mesAbonoTarjetaCte, diaAbonoTarjetaCte,
              horaAbonoTarjetaCte, minutoAbonoTarjetaCte, cantidadAbonada)
  {
    this.empleadoDNIQueActivo = empleadoDNIQueActivo;
    this.añoDeActivacion = añoDeActivacion;
    this.mesDeActivacion = mesDeActivacion;
    this.diaDeActivacion = diaDeActivacion;
    this.horaDeActivacion = horaDeActivacion;
    this.minutoDeActivacion = minutoDeActivacion;
    this.empleadoDNIQueAbono = empleadoDNIQueAbono;
    this.añoAbonoTarjetaCte = añoAbonoTarjetaCte;
    this.mesAbonoTarjetaCte = mesAbonoTarjetaCte;
    this.diaAbonoTarjetaCte = diaAbonoTarjetaCte;
    this.horaAbonoTarjetaCte = horaAbonoTarjetaCte;
    this.minutoAbonoTarjetaCte = minutoAbonoTarjetaCte;
    this.cantidadAbonada = cantidadAbonada;
  }
  mostrarActivacionTarjeta(){
    //ToDo
  }
}

class Empleado extends Persona {
  constructor(nombre, correo, contrasenia, rol, dNI, sucursaID, salario, sueldo, totalCobrado, mesDeCobro, diaDeCobro, horaDeCobro, minutoDeCobro){
    super(nombre, correo, contrasenia);
    this.rol = rol;
    this.dNI = dNI;
    this.sucursalID = sucursaID;
    this.salario = salario;
    this.sueldo = sueldo;
    this.totalCobrado = totalCobrado;
    this.mesDeCobro = mesDeCobro;
    this.diaDeCobro = diaDeCobro;
    this.horaDeCobro = horaDeCobro;
    this.minutoDeCobro = minutoDeCobro;
  }
  crearTarjetaCte() {
    
  }
  cargarSueldo(){
    
  }
    
}