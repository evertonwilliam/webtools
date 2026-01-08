const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentValue = '';
let operator = '';
let previousValue = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (!isNaN(value) || value === '.') {
      currentValue += value;
      display.textContent = currentValue;
    }

    if (['+', '-', '×', '÷'].includes(value)) {
      operator = value;
      previousValue = currentValue;
      currentValue = '';
    }

    if (value === '=') {
      let result;
      const a = parseFloat(previousValue);
      const b = parseFloat(currentValue);

      switch (operator) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '×': result = a * b; break;
        case '÷': result = a / b; break;
      }

      display.textContent = result;
      currentValue = result.toString();
    }
  });
});
