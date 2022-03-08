class Superh {
  constructor(squadName,homeTown,formed,secretBase,active) {
    this.squadName = squadName;
    this.homeTown = homeTown;
    this.formed = formed;
    this.secretBase = secretBase;
    this.active = active;
  }

  toString() {
    // let actividad = "retirados"
    // if (this.active) {
    //   actividad = "en activo"
    // }
    return `Escuadrón: ${this.squadName}, ciudad de origen: ${this.homeTown}, año de formación: ${this.formed}, base secreta: ${this.secretBase}, actualmente ${this.active ? "en activo" : "retirados"}`
  }
}
