class Personajes extends Superh{
  constructor(squadName,homeTown,formed,secretBase,active,name,age,secretIdentity,powers) {
    super(squadName,homeTown,formed,secretBase,active);
    this.name = name;
    this.age = age;
    this.secretIdentity = secretIdentity;
    this.powers = powers;
  }

  toString(){
    return super.toString()+`. Miembro Nombre: ${this.name}, edad: ${this.age}, identidad secreta: ${this.secretIdentity}, poderes: ${this.powers}`
  }
}
