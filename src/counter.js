const template = (value) =>
  `<button data-name="decrement">-</button>
  <span data-name="value">${value}</span>
  <button data-name="increment">+</button>`;

class Counter {
  constructor({ selector, initialValue }) {
    this.parent = document.querySelector(selector);
    this.parent.insertAdjacentHTML('beforeEnd', template(initialValue));
    this.value = initialValue;
    this.refs = {};
    this.init();
  }

  init() {
    this.refs.decrementButton = this.parent.querySelector(
      '[data-name="decrement"]',
    );
    this.refs.valueItem = this.parent.querySelector('[data-name="value"]');
    this.refs.incrementButton = this.parent.querySelector(
      '[data-name="increment"]',
    );

    this.refs.decrementButton.addEventListener(
      'click',
      this.handleDecrement.bind(this),
    );
    this.refs.incrementButton.addEventListener(
      'click',
      this.handleIncrement.bind(this),
    );
  }

  handleDecrement() {
    this.value -= 1;
    this.refs.valueItem.textContent = this.value;
  }

  handleIncrement() {
    this.value += 1;
    this.refs.valueItem.textContent = this.value;
  }
}

export default Counter;
