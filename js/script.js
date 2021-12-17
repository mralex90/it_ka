
// Перебор элементов
let arr = ['Aleks', 'Ivan', 'Olya',];
console.log(arr.length);

// Цикл FOR
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
/*
У нас есть массив, длинна его = 3. Можем увидеть это выведя в консоль length для этого массива.
Дальше строим цикл и указываем в нем следущее:
Обьявляем переменную "i" которая равна 0, увеличиваем каждый раз ее на единицу, и в качестве 
условия пишем (i < arr.length;) - "i" должно быть меньше чем длинна массива.
И если хотим вывести каждое значение массива, можем сделать следующую запись:
обратиться к переменной, которой присвоен наш массив и в квадратных скобках указать переменную "i".
Ключи начинаются с 0. Первое значение переменной "i" = 0, и каждый раз, каждый круг будет увеличиваться 
на единицу пока "i" не будет равно 3 (длинне массива).
Что будет происходить - на первом круге "i" будет равно 0, соответственно выведется первое значение массива,
на втором круге - 1 (второе значение массива), на третьем кругу - 2 (3е значение) и на 4м круге 
"i" уже будет равно 3, условие не сработает и цикл остановится.
*/


////// Цикл FOR...OF
// Можно использовать для вывода значений
let arr1 = ['Aleks', 'Ivan', 'Olya',];

for (let arrItem of arr1) {
    console.log(arrItem);
}
/*
С циклом for можем получить и значение и ключ массива.
Но если нам достаточно получить только значение - можем использовать цикл FOR...OF.
И синтаксис у него немного отличается. 
Берем наш массив, пишем FOR, но в () следущее: обьявляем переменную, которая будет содержать 
в себе каждое значение массива и пишем OF и переменную, которая содержит в себе массив. Теперь 
нам достаточно выводить в консоль только новую созданную переменную. Таким образом 
будем получать значение массива.
*/