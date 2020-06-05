import '../css/style.scss'
import DOMNodeCollection from "./dom_node_collection";

Window.prototype.$l = function (arg) {
  if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  }
  return document.querySelector(arg);
}

window.$l = $l