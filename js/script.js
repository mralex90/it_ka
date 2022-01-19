
// Управление прокруткой страницы прямо из ДЖС

// Метод scrollTo(pageX, pageY) прокручивает страницу на абсолютные координаты 
// (pageX, pageY) относительно нулевых значений. Тоже самое что и window.scroll()

function setScrollTo(){
    window.scrollTo(0, 50);
    const windowScrollTop = window.pageYOffset;
    console.log(windowScrollTop);
}

function setScrollToOptions() {
    window.scrollTo({
        top: 500,
        left: 0,
        // smooth, instant,
        // либо auto; по умолчанию auto
        behavior: "smooth"
    });
}

// Опции не работают в Safari

/*
Пример:
У нас функция кот. будет взываться по клику на кнопку и здесь мы обращаемся к 
глобальному обьекту window, пишем scrollTo и все те же значения (0 гориз, 50рх по вертик).
Опять же получаем текущую прокрутку и выводим в консоль, все то же самое.
Скролд у нас находится в нулевой позиции и нажимаем на вторую кнопку вызывая теперь 
метод scrollTo. Наблюдаем то же самое , что и в прошлый раз - страница немного прокрутилась, 
мы поолучили 50рх значение.
Но, если повторно будем нажимать, то у нас ничего не будет меняться, скролл будет 
оставаться на том же значении и будет выводиться в консоль те же 50рх.
Почему? Потому, что каждый раз страница пытается прокрутиться от 0 до 50рх, если 
scrollBy() добавлял к текущему скроллу каждый раз по 50рх, то scrollTo() от 0 просто 
прокручивает до 50рх, по этому мы каждый раз видим одно и то же. 
*/
/*
У метода scrollTo() есть ряд параметров и для того чтобы их использовать мы должны записать 
этот метод немного в другом синтаксисе, а именно в () мы ставим {} и как бы создаем 
некий обьект, в котором мы конкретно указываем что нужно прокрутить сверху 500рх, слева 0рх и 
также существует параметр, который отвечает за тип прокрутки, в данном случае как раз значение 
у него smooth - это значит, что прокрутка будет плавной.
Так же существует значение "auto" - по умолчанию и "instant" - это прокрутка не плавная, такая же 
как и у scrollTo() без параметров.
Проблема в том, что эти опции они не работают в Safari и широкого применения у них нет.

*/