var menu = {
    data: [
        {
            title: 'Животные',
            items: [
                {
                    title: 'Млекопитающие',
                    items: [
                        { title: 'Коровы' },
                        { title: 'Ослы' },
                        { title: 'Собаки' },
                        { title: 'Тигры' },
                    ]
                },
                {
                    title: 'Другие',
                    items: [{ title: 'Змеи' }, { title: 'Птицы' }, { title: 'Ящерицы' }]
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
                    items: [
                        {
                            title: 'Морская форель',
                            items: [{ title: 'глубоководная' }, { title: 'простая' }]
                        },
                    ]
                },
            ]
        },
        {
            title: 'Рабы'
        },
        {
            title: 'Рабочие'
        },
    ],
    render: function (menu) {
        var _this = this;
        var _menu = menu || this.data;
        var ul = document.createElement('ul');
        _menu.forEach(function (_a) {
            var title = _a.title, items = _a.items;
            ul.appendChild(_this.renderChildren({ title: title, items: items }));
        });
        return ul;
    },
    renderChildren: function (_a) {
        var title = _a.title, items = _a.items;
        var li = document.createElement('li');
        if (Array.isArray(items)) {
            var link = document.createElement('a');
            link.classList.add('title');
            link.innerHTML = title;
            li.appendChild(link);
            li.appendChild(this.render(items));
            link.addEventListener('click', function () {
                li.classList.toggle('menu-open');
            });
        }
        else {
            li.innerHTML = title;
        }
        return li;
    }
};
var navMenuList = document.querySelector('.menu');
if (navMenuList) {
    navMenuList.appendChild(menu.render());
}
