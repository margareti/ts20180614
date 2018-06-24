var menuData = [
    {
        title: 'Животные',
        items: [
            {
                title: 'Млекопитающие',
                items: [
                    {
                        title: 'Коровы'
                    }, {
                        title: 'Ослы'
                    }, {
                        title: 'Собаки'
                    }, {
                        title: 'Тигры',
                        items: [{
                                title: 'Assyrian'
                            }, {
                                title: 'Amur'
                            }, {
                                title: 'Other tigers',
                                items: [{
                                        title: 'White tiger'
                                    }, {
                                        title: 'Circus tiger'
                                    }]
                            }]
                    }
                ]
            }, {
                title: 'Другие',
                items: [
                    {
                        title: 'Змеи',
                        items: [{
                                title: 'Cobra'
                            }, {
                                title: 'Rattlesnake'
                            }, {
                                title: 'Movie snakes',
                                items: [{
                                        title: 'Anaconda'
                                    }, {
                                        title: 'Jurassic park dinos'
                                    }]
                            }]
                    }, {
                        title: 'Птицы'
                    }, {
                        title: 'Ящерицы'
                    }
                ]
            }
        ]
    }, {
        title: 'Рыбы',
        items: [
            {
                title: 'Аквариумные',
                items: [
                    {
                        title: 'Гуппи'
                    }, {
                        title: 'Скалярии'
                    }
                ]
            }, {
                title: 'Форель',
                items: [
                    {
                        title: 'Морская форель'
                    }
                ]
            }
        ]
    }
];
function generateMenuItem(menuItem) {
    console.log(menuItem.title);
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var title = document.createElement('h5');
    title.innerText = menuItem.title;
    li.appendChild(title);
    if (menuItem.items) {
        li.addEventListener('click', function (e) {
            console.log(e.currentTarget);
            console.log(e.currentTarget);
            if (e.target === title) {
                li.classList.toggle('open-menu');
            }
            // if (e.target === this) {
            //   console.log('click', this.innerText);
            // }
        });
        menuItem.items.forEach(function (item) {
            li.appendChild(generateMenuItem(item));
        });
    }
    ul.appendChild(li);
    return ul;
}
var generateMenu = function (menuItems) {
    var fragment = document.createDocumentFragment();
    menuItems.forEach(function (menuItem) {
        var generatedMenu = generateMenuItem(menuItem);
        fragment.appendChild(generatedMenu);
    });
    return fragment;
};
var menuEl = document.querySelector('.menu');
if (menuEl) {
    menuEl.appendChild(generateMenu(menuData));
}
