// Посчитает и выведет в консоль количество категорий в ul#categories, 
// то есть элементов li.item.Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента(тега h2) и количество элементов в категории
//     (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const ulEl = document.querySelector('#categories');
const itemEl = document.querySelectorAll('.item');

const howMuchLi = ulEl.children.length;
console.log(`В списке ${howMuchLi} категории`);

const animals = itemEl.forEach((el) => {
    console.log(`Категория: ${el.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${el.children.length}`);
});