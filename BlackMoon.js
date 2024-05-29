export const BlackMoon = {
  saldoTotal: 0,
  sucursales: [],

  mostrarSucursales() {
    return this.sucursales;
  },
  mostrarSaldo() {
    return `El saldo total es de: ${this.saldoTotal}`;
  },
  abonarSaldoSucursal(sucursalID, cantidad) {
    const sucursal = this.sucursales.find(
      (sucursal) => sucursal.idSucursal === sucursalID,
    );
    if (sucursal) {
      if (this.saldoTotal > 0 && cantidad <= this.saldoTotal) {
        sucursal.saldoSucursal += cantidad;
        this.saldoTotal -= cantidad;
        return `Se han abonado ${cantidad} a la sucursal ${sucursal.nombreSucursal} con exito`;
      } else {
        return `No se puede abonar saldo a la sucursal ${sucursal.nombreSucursal} ${this.saldoTotal > 0 ? "porque no cuentas con saldo suficiente" : "porque el saldo de la total es de 0"}`;
      }
    } else {
      return `No se encontro la sucursal ${sucursalID}`;
    }
  },
};
