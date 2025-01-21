document.getElementById('addButton').addEventListener('click', function() {
  calculate('+');
});

document.getElementById('subtractButton').addEventListener('click', function() {
  calculate('-');
});

document.getElementById('multiplyButton').addEventListener('click', function() {
  calculate('*');
});

document.getElementById('divideButton').addEventListener('click', function() {
  calculate('/');
});

document.getElementById('powerButton').addEventListener('click', function() {
  calculate('**');
});

document.getElementById('modulusButton').addEventListener('click', function() {
  calculate('%');
});

function calculate(operation) {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  var result;
  var errorElement = document.getElementById('error');

  if (isNaN(num1) || isNaN(num2)) {
    errorElement.textContent = 'Please enter valid numbers';
    document.getElementById('result').textContent = 'Result: ';
    return;
  }

  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        errorElement.textContent = 'Division by zero is not allowed';
        document.getElementById('result').textContent = 'Result: ';
        return;
      }
      result = num1 / num2;
      break;
    case '**':
      result = Math.pow(num1, num2);
      break;
    case '%':
      result = num1 % num2;
      break;
    default:
      errorElement.textContent = 'Invalid operation';
      document.getElementById('result').textContent = 'Result: ';
      return;
  }

  errorElement.textContent = '';
  document.getElementById('result').textContent = 'Result: ' + result;
}
