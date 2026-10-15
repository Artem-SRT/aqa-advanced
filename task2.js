function recursiveCounter(num) {
  // Виведення поточного значення
  console.log(num);

  // Умова виходу з рекурсії
  if (num <= 1) {
    return;
  }

  // Рекурсивний виклик
  recursiveCounter(num - 1);
}

// Запуск лічильника з цифри 5
recursiveCounter(5);
