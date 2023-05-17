

export class Footer extends Component {
    brand: string
  constructor(selector: string, public brand: string) {
    super(selector);
    this.brand = brand
    this.template = this.createTemplate();
    this.render();
  }
}

createTemplate() {
  return `
    <footer>
      <adress>${this.brand}</adress>
    </footer>
  `;
}
