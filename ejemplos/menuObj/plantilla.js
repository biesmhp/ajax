let nextID = 0;
class Pedidosobj {
  constructor(descripcion,pago) {
    this.nPedido = nextID++;
    this.descripcion = descripcion;
    this.total = this.calcular();
    this.pago = pago;
  }

  calcular() {
    return 5
  }

  ver() {
    return this.descripcion
  }
}
