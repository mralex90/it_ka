
// DOM

// Поиск произвольного элемента

// Проверка matches
/*
Ничего не ищет, а проверяет, удовлетворяет ли элемент 
CSS-селектору, и возвращает true или false.
*/

const elems = document.querySelectorAll('.lesson__item-list');
for (let elem of elems) {
    if (elem.matches('[class$="lesson__item-list_red"]')) {
        console.log('Красный');
    } else if (elem.matches('[class$="lesson__item-list_blue"]')) {
        console.log('Синий');
    }
}
/*
В примере, мы получаем коллекцию обьектов(querySelectorAll) с классом ('.lesson__item-list') в константу elems.
Дальше, с помошью цикла (for (let elem of elems)) мы перебираем найденние обьекты и вот здесь, с помощью 
условного ветвления (if) мы проверяем используя matches существуют ли у этого обьекта, в данном случае, 
некий атрибут ('[class$="lesson__item-list_red"]') - класс с таким вот классом.
Соответственно, если у него есть модификатор "red" - выведем в консоль "Красный".
А если у него есть модификатор "blue" - выведем "Синий".
*/

/*
Стоит добавить, что получив обьект тем или иным способом мы 
можем применять свойства навигации о которых говорили ранее
*/

const text = document.querySelector('.lesson__text');
const list = text.nextElementSibling;
console.log(list);
/*
Мы получаем обьект в константу "text" с классом (.lesson__text), он у нас один на странице, и далее 
в константу "list" мы получаем СЛЕДУЮЩИЙ обьект с помощью "nextElementSibling". Выводим в консоль, 
и видим, что следующий после обьекта lesson__text - у нас список "ul" с классом "lesson__list".
Т.е. все свойства навигации мы можем применять к обьектам найденым с помощью методов поиска.
*/