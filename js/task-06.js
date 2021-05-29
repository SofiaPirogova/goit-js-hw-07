// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.


const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', getChangeInputColor);

function getChangeInputColor() {
  const dataNumberOfLetters = Number(inputEl.dataset.length);
  // console.log(dataNumberOfLetters);
  const changingNumbersOfLetters = inputEl.value.split('').length;
// console.log(changingNumbersOfLetters);
  if (changingNumbersOfLetters === dataNumberOfLetters) {
   inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
}
};