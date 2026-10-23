// Створення початкового об'єкта person
const person = {
  firstName: "Марія",
  lastName: "Коваленко",
  age: 25
};

// Додавання нової властивості email
person.email = "maria.kovalenko@example.com";

// Видалення властивості age
delete person.age;

// Виведення оновленого об'єкта
console.log(person);
