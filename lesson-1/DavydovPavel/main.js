var listMenu = [
    {
        title: 'Животные',
        items: [
            {
                title: 'Млекопитающие',
                items: [
                    { title: 'Коровы', items: [] },
                    { title: 'Ослы' },
                    { title: 'Собаки' },
                    { title: 'Кошки', items: [{ title: 'Тигры' }, { title: 'Львы' }] },
                ]
            },
            {
                title: 'Другие',
                items: [
                    {
                        title: 'Насекомые',
                        items: [{ title: 'Членистоногие', items: [{ title: 'Тараканы' }] }]
                    },
                    { title: 'Змеи' },
                    { title: 'Птицы' },
                    { title: 'Ящерицы' },
                ]
            },
        ]
    },
    {
        title: 'Рыбы',
        items: [
            {
                title: 'Аквариумные',
                items: [{ title: 'Гуппи' }, { title: 'Скалярии' }]
            },
            {
                title: 'Форель',
                items: [{ title: 'Морская форель' }]
            },
        ]
    },
];
function generateMenu(list) {
    var content = '<ul>';
    list.forEach(function (a) {
        var flag = a.items !== undefined && a.items.length, templ = flag ? "<a class='title'>" + a.title + "</a>" + generateMenu(a.items) : "<a>" + a.title + "</a>";
        content += "<li>" + templ + "</li>";
    });
    content += '</ul>';
    return content;
}
var navMenuList = document.querySelector('.menu');
if (navMenuList) {
    navMenuList.innerHTML = generateMenu(listMenu);
    navMenuList.onclick = function (e) {
        var el = e.target;
        var classList = el.classList;
        if (!classList.contains('title')) {
            return;
        }
        var parentLi = el.parentNode;
        parentLi.classList.toggle('menu-open');
    };
}
