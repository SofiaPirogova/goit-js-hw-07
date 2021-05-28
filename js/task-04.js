// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

incrementBtn.addEventListener('click', onIncrement);
decrementBtn.addEventListener('click', onDecrement);

function onIncrement() {
    counterValue += 1;
    valueEl.textContent = counterValue;
   
};

function onDecrement() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

decrementBtn.style.backgroundColor = 'tomato';
incrementBtn.style.backgroundColor = 'yellow';