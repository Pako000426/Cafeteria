// El objeto cliente se compone de una tarjeta;
import { Tarjeta } from "./Tarjeta.js";

export class Persona {
  constructor(nombre, correo, contrasenia) {
    this.nombre = nombre;
    this.correo = correo;
    this.contrasenia = contrasenia;
  }

  iniciarSesion(correo, contrasenia) {
    if (this.correo === correo && this.contrasenia === contrasenia) {
      console.log(`Bienvenido ${this.nombre}`);
    } else {
      console.log("Credenciales incorrectas");
    }
  }

  verPerfil() {
    return `Nombre: ${this.nombre}
    Correo: ${this.correo}
    Contraseña: ${this.contrasenia}`;
  }
}

export class Cliente extends Persona {
  constructor(nombre, correo, contrasenia, diaDeNacimiento, mesDeNacimiento) {
    super(nombre, correo, contrasenia);
    this.diaDeNacimiento = diaDeNacimiento;
    this.mesDeNacimiento = mesDeNacimiento;
    this.tarjeta = new Tarjeta(false, 0, 0);
  }

  ordenarAlimentos() {
    //ToDo: Hasta que este creado Orden
  }
  
  mostrarTarjeta() {
    return `Activada: ${this.tarjeta.activado}
            Token: ${this.tarjeta.token}
            Saldo: ${this.tarjeta.saldo}`;
  }
}

export class Empleado extends Persona {
  constructor(
    nombre,
    correo,
    contrasenia,
    rol,
    dNI,
    sucursaID,
    salario,
    sueldo,
    totalCobrado,
    mesDeCobro,
    diaDeCobro,
    horaDeCobro,
    minutoDeCobro,
  ) {
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
  
  activarTarjetaCte() {
    
    
    }
  
  cargarSueldo() {
    
  }
}
