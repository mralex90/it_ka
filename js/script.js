/*
Запись строк. Кавычки.
Строку можно созжать с помощью одинарных, двойных либо обратных кавычек:
*/

let someStringOne = 'Hello! Im string!';
let someStringTwo = "Hello! Im string!";
let someStringThree = `Hello! Im string!`;

console.log(someStringOne);
console.log(someStringTwo);
console.log(someStringThree);

/*
Одинарные и двойные кавычки работают, по сути, одинаково,а если 
использовать обратные кавычки, то в такую строку мы сможем вставлять 
произвольные выражения и всяких переменных, обернув их в ${...}:
*/

let textHi = "Hello!";
let textAll = `${textHi} Im string!`;

console.log(textAll);


function someSum(a,b) {
    return a + b;
}
console.log(`Summa: ${someSum(4, 7)}`);
/*
Этот пример демонстрирует вызов ф-ии прямо в строке. Для этого мы сделали 
простую ф-ию которая складывает "а"+"б" и возвращает результат. Далее 
мы выводим в консоль строку, которая реализована с помощью обратных кавычек.
Пишем слово "Сумма" и далее с помощью той же конструкции ${...} внутри этих 
фигурных скобок мы делаем вызов ф-ии "someSum" передавая некие числа. 
В итоге мы получаем строку "Сумма" и результат работы ф-ии.
*/

// Многострочная запись

let text = `Hello!
Youre learning JS!
`;
console.log(text);
/*
В примере у нас есть переменная "text", которой мы присваиваем строку используя 
обратные кавычки и при этом эту строку пишем в несколько строк. И благодаря 
обратным кавычкам переменная "текст" присвоится ровно такая же многострочная строка.
*/

/////////////////

// Все что заключено в любые кавычки будет иметь тип данных строка

let someString = "158";
let someNum = 158;
console.log(someString);
console.log(typeof someString);
console.log(someNum);
console.log(typeof someNum);

console.log(someString + someNum);
// При сложении числа и строки мы получим тип строка