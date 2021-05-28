// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//   после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().
const ingredients = [
    'Картошка',
     'Грибы',
     'Чеснок',
   'Помидоры',
     'Зелень',
   'Приправы',
];
const ulEl = document.querySelector('#ingredients');

const allFutureLi = ingredients.map((el) => {
    const newLi = document.createElement('li');
    newLi.textContent = el;
    return  newLi;
  
});

ulEl.append(...allFutureLi);
