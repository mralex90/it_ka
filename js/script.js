
// DOM
//Навигация по документу
// Навигация только по єлементам

// Получаем обьект body
const bodyElement = document.body;

/*
Навигационные свойства, описанные выше, относятся ко всем узлам в документе.
В частности, в "childNodes" находятся и текстовые узлы и узлы-єлементы и 
узлы-комментарии, если они есть.
*/

// Получаем коллекцию всех дочерних узлов
const childNodes = bodyElement.childNodes;
console.log(childNodes);

/*
Но для большинства задач текстовые узлы и узлы-комментарии нам не нужны. Мы хотим 
манипулировать узлами-элементами, которые представляют собой теги и формируют 
структуру страницы.
Для этого существуют отдельные свойства:

1)  children - тоже самое, что и childNodes в плане что мы получаем коллекцию всех 
    непосредственно дочерних, но не узлов, а именно элементов. Это тоже коллекция, 
    но которая содержит фактически только элементы, только html-теги
*/

// Получаем коллекцию всех дочерних элементов
const bodyChildren = bodyElement.children;
console.log(bodyChildren);
