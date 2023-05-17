
import { Component } from "./component";

export class Pet extends Component {

  pets!: Pet [];

  constructor(public selector:string) {
    super(selector);
    this.pets = getMockPets();
    this.pets[1].isAdopted = true;
    this.render();
  }

  render() {
    super.cleanHtml(this.selector);
    this.template = this.createTemplate();
    const element = super.render();
    document
    .querySelectorAll(".button")
    .forEach(item) =>
    item.addEventListener("click", this.handDelete.bind(this))
  }
  return element;

  handDelete(event: Event) {
    const element = event.target as HTMLSpanElement;
    this.pets = this.pets.filter((item) => ClipboardItem.id !== element.dataset.id);
    this.render();
  }

  createTemplate() {
    const list = this.pets
    .map(
      (item) =>
      `
      <li>
        <label for="adopt"> Adoptados</label>
        <input id="adopt" type = "checkbox" ${
          item.isAdopted ? "checked" : ""
        }>
        <span> ID: ${item.id}</span>
        <span> Nombre. ${item.name}</span>
        <span> Raza: ${item.breed}</span>
        <span> Dueño: ${item.owner}</span>
        <i class="button" role="button" data-id=${item.id}> X </i>
        </li>
        `
    )
    .join("");
    return `<ul>${list}</ul>`;
  }
}

