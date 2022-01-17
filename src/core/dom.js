class Dom {
  constructor(selector) {
    this.element =
      typeof selector === 'string'
        ? document.querySelector(selector)
        : selector;
  }
  append(node) {
    if (node instanceof Dom) {
      node = node.element;
    }
    if (node instanceof Node) {
      this.element.append(node);
    }
    return this;
  }
  insert(html) {
    if (typeof html === 'string') {
      this.element.innerHTML = html;
    }
    return this;
  }

  addClass(classNames) {
    if (classNames) {
      this.element.classList.add(classNames);
    }
    return this;
  }
  on(eventName, fn) {
    this.element.addEventListener(eventName, fn, false);
  }
  off(eventName) {
    this.element.removeEventListener(eventName);
  }
}

export function $(selector) {
  return new Dom(selector);
}

$.create = function (tagName, classes = '') {
  let element = document.createElement(tagName);
  if (classes) {
    element.classList.add(classes);
  }
  return $(element);
};
