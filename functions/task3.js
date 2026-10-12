function checkOrder(available, ordered) { if (ordered === 0) { return "Your order is empty"; }
if (available < ordered) {
    return "Your order is too large, we don't have enough goods.";
}

return "Your order is accepted";
}
// Проверка работы функции console.log(checkOrder(10, 0));  // "Your order is empty" console.log(checkOrder(5, 10)); // "Your order is too large, we don't have enough goods." console.log(checkOrder(15, 10)); // "Your order is accepted"
