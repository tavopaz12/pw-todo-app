import { LitElement, html } from "https://unpkg.com/lit@2.3.1/index.js?module";

class PwTodo extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`<slot></slot><h1>Estoy en las sombras</h1>`;
  }
}

export default PwTodo;