function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

// Вызовы функции с аргументами 25 и 15
console.log("Чи є особа дорослою (25 років):", isAdult(25)); 
console.log("Чи є особа дорослою (15 років):", isAdult(15));
