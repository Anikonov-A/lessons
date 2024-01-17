"use strict";

// Задача №1
// Отримати в константу елемент <body>

const body = document.body; // Отримуємо body в константу

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

// Створюємо стрілкову функцію
const createList = (param = 5) => {
  // Створюємо новий елемент <ul>
  const ul = document.createElement("ul");
  // Проходимо циклом від 1 до значення, переданого як параметр
  for (let i = 1; i <= param; i++) {
    // Створюємо новий елемент <li>
    const li = document.createElement("li");
    // Задаємо текст для <li> у вигляді рядка "list-item #i", де i - номер елемента
    li.textContent = `list-item #${i}`;
    // Додаємо елемент <li> до елемента <ul>
    ul.appendChild(li);
  }
  // Додаємо елемент <ul> до елемента <body>
  body.insertAdjacentElement("afterbegin", ul);
};
// Викликаємо функцію createList і передаємо кількість елементів у списку
createList(4);

// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.

// Перевіряємо чи є в нас body взагалі
if (body) {
  // Додаємо до елементу <body> класс loaded.
  body.classList.add("loaded");
  // Використовуємо тернарній оператор для перевірки наявності класу і маніпуляції з стилем.
  body.classList.contains("loaded") ? (body.style.color = "green") : null;

  //АБО
  // if (body.classList.contains("loaded")) {
  //   body.style.color = "green";
  // }
}

// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active,
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

//Отримуємо колекцію елементів в константу
const elementsWithItemClass = document.querySelectorAll(".item");

//Перевіряємо чи є ці елементи
if (elementsWithItemClass.length) {
  //Викликаємол метод forEach для колекції елементів,
  elementsWithItemClass.forEach((el, i) => {
    //додаємо клас active до поточного елементу
    el.classList.add("active");
    //Змінюємо текстовий контент поточного елементу . і + 1 використовується через те що індексація в колекції елементів починається з нуля.
    el.textContent = `Елемент №${i + 1}`;
  });
  // АБО
  // for (let i = 0; i < elementsWithItemClass.length; i++) {
  //   const element = elementsWithItemClass[i];
  //   element.classList.add("active");
  //   element.textContent = `Елемент №${i + 1}`;
  // }
}

// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

const button = document.querySelector(".button"); //Отримую елемент button в константу
button ? button.scrollIntoView({ behavior: "smooth" }) : null; //Виконую перевірку на наявність елементу,і скролл до нього

// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

//Отримую елемент link в константу
const link = document.querySelector(".link");

// Оголошуємо змінні щоб далі не хардкодити.
const attributeNumber = 100;
const testNumber = 200;

// Перевіряємо чи є в нас єлемент link
if (link) {
  // Додаємо атрибут "data-quantity" зі значенням 100
  link.setAttribute("data-quantity", attributeNumber);
  //  Використовуємо parseInt() для перетворення значення атрибуту в число, оскільки значення атрибутів завжди є рядком.
  const quantityData = parseInt(link.getAttribute("data-quantity"));
  // Перевіряємо, чи значення менше 200 і, якщо так, міняємо колір тексту на червоний
  quantityData < testNumber ? (link.style.color = "red") : null;
}
