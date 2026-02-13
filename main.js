
class TotoGenerator extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'toto-generator');

    const title = document.createElement('h1');
    title.textContent = 'Toto Number Generator';

    const numbersContainer = document.createElement('div');
    numbersContainer.setAttribute('class', 'numbers');

    const additionalNumberContainer = document.createElement('div');
    additionalNumberContainer.setAttribute('class', 'additional-number');

    const button = document.createElement('button');
    button.textContent = 'Generate Numbers';
    button.addEventListener('click', () => this.generateNumbers());

    const style = document.createElement('style');
    style.textContent = `
      .toto-generator {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: sans-serif;
      }
      .numbers {
        display: flex;
        gap: 10px;
        margin: 20px 0;
      }
      .number, .additional {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        font-weight: bold;
        color: white;
      }
      .number {
        background-color: #4CAF50;
      }
      .additional {
        background-color: #f44336;
      }
      button {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(title);
    wrapper.appendChild(numbersContainer);
    wrapper.appendChild(additionalNumberContainer);
    wrapper.appendChild(button);
  }

  generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 49) + 1);
    }

    let additionalNumber;
    do {
      additionalNumber = Math.floor(Math.random() * 49) + 1;
    } while (numbers.has(additionalNumber));

    this.displayNumbers(Array.from(numbers), additionalNumber);
  }

  displayNumbers(numbers, additionalNumber) {
    const numbersContainer = this.shadowRoot.querySelector('.numbers');
    numbersContainer.innerHTML = '';
    numbers.forEach(number => {
      const numberElement = document.createElement('div');
      numberElement.setAttribute('class', 'number');
      numberElement.textContent = number;
      numbersContainer.appendChild(numberElement);
    });

    const additionalNumberContainer = this.shadowRoot.querySelector('.additional-number');
    additionalNumberContainer.innerHTML = '';
    const additionalNumberElement = document.createElement('div');
    additionalNumberElement.setAttribute('class', 'additional');
    additionalNumberElement.textContent = additionalNumber;
    additionalNumberContainer.appendChild(additionalNumberElement);
  }
}

customElements.define('toto-generator', TotoGenerator);
