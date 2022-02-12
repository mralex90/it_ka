
// Элементы форм

// document.forms.elements;

const mainForm = document.forms.main;
// console.log(mainForm.elements);

/*
Получаем элемент с именем nameInput
//const mainFormInput = mainForm.elements.nameInput;
// или mainForm.nameInput
console.log(mainFormInput);

// Получаем коллекцию с именем nameRadio
const mainFormRadioButtons = mainForm.Radio;
// или mainForm.elements.nameRadio
console.log(mainFormRadioButtons);  
*/

// Обратная ссылка
// element.form

// Получаем форму элемента
// console.log(mainFormInput.form);

/*
Так же нам хорошо извесно, что для таких элементов как радиоКнопки, если мы хотим 
закрыть их в одну общую группу, значение атрибута name должны быть одинаковые иначе 
ничего работать не будет. 
Что же мы получим в таком случае? 
В ДЖС действия у нас абсолютно те же, то есть мы обращаемся к форме, далее пишем значение 
атрибута name, но константу мы получим не конкретно один элемент, а коллекцию всех 
элементов с таким именем и далее, тем или иным способом, мы уже можем обращаться к 
конкретному элементу.
*/
/*
