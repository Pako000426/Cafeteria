// Objetos
import { BlackMoon } from "./BlackMoon.js";
import { Sucursal } from "./Sucursal.js";
import { Tarjeta } from "./Tarjeta.js";
import { Persona } from "./Persona.js";
import { Cliente } from "./Persona.js";
import { Empleado } from "./Persona.js";

const empleado1 = new Empleado(
  "Juan",
  "tugrp@example.com",
  "contraseña",
  "Empleado",
  "12345678",
  "Sucursal1",
  1000,
  0,
  0,
  0,
  0,
  0,
);

const cliente1 = new Cliente(
  "Alberto",
  "tugrp@example.com",
  "567392JaE",
  10,
  12,
);

const cliente2 = new Cliente(
  "Jose",
  "adada@adadadda.com",
  "791878493hiudhjia",
  9,
  5,
);






Empleado.this.rol= "Empleado";

empleado1.activarTarjetaCte(cliente1);

<<<<<<< HEAD
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

=======
console.log(cliente1.mostrarTarjeta());
>>>>>>> 1ddaabdd83cb55f4211eb283d375cdc3ef38abbf
