export abstract class Component {
  template!: string;
  element: Element;
  constructor(public selector: string) {
    this.selector = selector;
  }

  render(position: InsertPoisition = "beforeend") {
    const parentElement = document.querySelector(this.selector);
    if (!parentElement) throw new Error("invalid selector");
    parentElement.insertAdjacentHTML(position, this.template);
    this.element = parentElement.lastElementChild!;
    return this.element;
  }

  cleanHtml(selector: string) {
    this.element = document.querySelector(selector) as HTMLElement;
    this.element.innerHTML = "";
    return this.element;
  }
}
