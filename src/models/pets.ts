export type PetStructure = {
  id: string;
  name: string;
  breed: string;
  isAdopted: boolean;
  owner: string;
};

export class Pets implements PetStructure {
  static generateID() {
    return Math.trunc(Math.random() * 100).toString();
  }

  id: string;
  breed: string;
  isAdopted: boolean;

  constructor(public name: string, breed: string, public owner: string) {
    this.id = Pet.generateID();
    this.name = name;
    this.breed = breed;
    this.isAdopted = false;
    this.owner = owner;
  }
}
