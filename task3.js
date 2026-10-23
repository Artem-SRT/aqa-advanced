// Створення об'єкта car1
const car1 = {
  brand: "Toyota",
  model: "Camry",
  year: 2021
};

// Створення об'єкта car2
const car2 = {
  brand: "BMW",
  model: "X5",
  owner: "Олексій" 
};

// Об'єднання за допомогою оператора spread
const car3 = { ...car1, ...car2 };

// Виведення об'єкта car3 в консоль
console.log(car3);
