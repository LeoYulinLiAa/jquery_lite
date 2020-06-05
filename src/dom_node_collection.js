export default class DOMNodeCollection {
  constructor(elements = /**@type {HTMLElement[]} */ []) {
    this.elements = elements;
  }

  /**
   *
   * @param {string?} htmlString
   */
  html(htmlString) {
    if (htmlString === undefined) {
      return this.elements.map(e => e.innerHTML);
    } else {
      return this.elements.forEach(e => e.innerHTML = htmlString);
    }
  }

  empty() {
    this.html("");
  }

}