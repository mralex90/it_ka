
// Метрики элементов на странице 

// Получаем обьект
const block = document.querySelector('.lesson__block');

// Позиция обьекта
// Свойства offsetParent, offsetLeft u offsetTop

// Получаем родительский элемент
// относительно которого позицыонирован наш обьект
const elementOffsetParent = block.offsetParent;

console.log(elementOffsetParent);

// Получаем позицию обьекта относительно предка (offsetParent)
const elementOffsetLeft = block.offsetLeft;
const elementOffsetTop = block.offsetTop;

console.log(elementOffsetLeft);
console.log(elementOffsetTop);
/*
Мы создаем две константы и соответственно присваиваем им значение.
Первое значение будет возвращать положение обьекта слева от родительского, 
а второе - сверху.
Выводим в консоль и смотрим что произошло.
Мы видим, что родительский обьект нашего элемента - это див с классом "lesson".
Также мы видим два значения: 
"offsetLeft" - позиция слева у нас равна 200рх, т.е. наш обьект смещен 
влево на 200рх относительно дива с классом "lesson", а сверху он мещен на 30рх
относительно дива с классом "lesson".

Если убрать position:relative нашего дива "lesson", мы знаем что теперь родителем 
будет <body>. И мы видим, что значения изменились, т.е. сейчас полжение слева 
уже 230рх потому, что считается от <body>.
То же самое сверху - 150рх вместо 30рх, потому что считаетсч положение относительно 
уже другого родителя.
*/