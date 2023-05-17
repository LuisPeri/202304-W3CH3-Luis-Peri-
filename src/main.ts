import { Component } from "./component";

export class Main extends Component {
  
  constructor(selector: string) {
    super(selector: string) {
      super(selector);
      this.template = this.createTemplate();
      this.render();
    }
  }

  createTemplate() {
    return `
      <main>
        <h2>Maing Page</h2>
      </main>
    `
  }
}
