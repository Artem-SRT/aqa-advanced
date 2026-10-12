// 1. Function Declaration
function getAreaDeclaration(width, height) {
    return width * height;
}

// 2. Function Expression
const getAreaExpression = function(width, height) {
    return width * height;
};

// 3. Arrow Function
const getAreaArrow = (width, height) => width * height;

// Вызовы функций
console.log("Function Declaration:", getAreaDeclaration(5, 10)); 
console.log("Function Expression:", getAreaExpression(5, 10));  
console.log("Arrow Function:", getAreaArrow(5, 10));
