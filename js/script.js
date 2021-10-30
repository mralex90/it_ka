//    ========= CONST ==========

// Обьявление константы
const myAge = 30;
myAge = 21; // нельзя изменить константу

// Имена констант с заранее известными значениями
const BLOCK_SIZE = 25;
const COLOR_RED = "#F00";

// Имя константы сл значением присвоенным в процессе выполнения программы
const dummSizes = 25 + 30;


// Смена значений в константе
// Обьект с данными
const userProfile = {
    name: 'Alex',
    age: 30,
    address: 'Kharkiv' 
}
console.log(userProfile);

// Далее я меняю значение одного из полей обьекта
userProfile.age = 21;
// Ошибки нет, данные изменились
console.log(userProfile);
// Тоже самое сработает для массивов и др обьектных значений

