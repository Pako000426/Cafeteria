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

console.log(cliente1.mostrarTarjeta());
