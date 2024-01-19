"use strict";

// Задача №1
// Що потрапить в консоль?

// let someVar = 0;
// ++someVar;

// if (someVar) {
//   console.log(someVar);
// }
//  Інкремент збільшить значення змінної someVar на 1 ,і так як нове значення не буде нульовим умова if(someVar) виконається і в консолі ми побачимо 1

// Задача №2
// За допомогою циклу FOR виведіть в консоль 10 рядків:
// Пункт №1
// Пункт №2
// і т.д.
// Відповідь:

for (let i = 1; i <= 10; i++) {
  console.log(`Пункт №${i}`);
}

// Задача №3
// Що потрапить в консоль ?
// if (2 * 20 <= 10 || (30 / 2 < 5 && 10 <= "10") || 20 === "20") {
//   console.log("000");
// }
// Відповідь:
// в консоль не виведеться нічого, тому що :
// 2 * 20 <= 10 (false)
// 30 / 2 < 5 (false) && 10 <= "10" (true) але так як логічний оператор && повертає перший false то результат цього виразу буде false
// 20 === "20" (fales)
// Отже ми отримаємо
// if( false || false || false)
// це не дасть виконатись всередені блоку if

// Задача №4
// Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
// Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
// Функція не має повертати NaN, Infinite або помилку

function devideFunction(a, b) {
  let result = a / b; // Математичну операцію виносимо в окрему змінну
  a = Number(a); // Конвертуємо параметри функції в число
  b = Number(b);

  if (!isNaN(a) && !isNaN(b) && isFinite(a) && isFinite(b) && b !== 0) {
    //Перевіряємо чи a та b є числами та чи вони не нескінченні, також b не має дорівнювати 0
    return console.log(`Результат ділення: ${result}`); //Виводимо результат
  }
}
devideFunction("", "7");
devideFunction(0, 7);
devideFunction(10, 0);
devideFunction(10, " ");
devideFunction("10", "1");
devideFunction("string", "0");

// Задача №5
// Створіть масив даних - 5 елементів, один з яких число 10
// Обробіть масив за допомогою методу перебору
// Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль

let myArr = ["string", true, 10, 31, false]; //Створили массив

myArr.forEach((el) => (el === 10 ? console.log(el) : null));
// Метод forEach проходить по кожному елементу массива перевіряючи чи поточний елемент рівний числу 10, якщо умова виконується ,виконується вираз після "?" , якщо ні то після ":" в данному випадку це null.Також це можна було зробити за допомогою інструкції if
// myArr.forEach((el) => {
//   if (el === 10) {
//     console.log(el);
//   }
// });