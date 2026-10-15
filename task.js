// Функції-колбеки
function handleEven() {
  console.log("number is even");
}

function handleOdd() {
  console.log("number is odd");
}

// Головна функція
function handleNum(number, evenCallback, oddCallback) {
  if (number % 2 === 0) {
    evenCallback();
  } else {
    oddCallback();
  }
}

// Приклади виклику
handleNum(4, handleEven, handleOdd); // Виведе: "number is even"
handleNum(7, handleEven, handleOdd); // Виведе: "number is odd"
