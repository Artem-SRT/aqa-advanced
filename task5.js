// Створення масиву об'єктів users
const users = [
  { name: "Андрій", age: 19, email: "andriy@example.com" },
  { name: "Олена", age: 22, email: "olena@example.com" },
  { name: "Дмитро", age: 21, email: "dmytro@example.com" }
];

// Перебір масиву за допомогою циклу for...of та деструктуризація в циклі
for (const { name, age, email } of users) {
  console.log(name, age, email);
}
