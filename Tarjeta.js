export class Tarjeta {
  constructor(activado, token, saldo) {
    this.activado = activado;
    this.token =  token;
    this.saldo = saldo;
  }
  
  activarTarjeta(){
    return this.activado = true;
  }
}