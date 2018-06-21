interface IMenuItem {
    title: string;
    items?: IMenuItem[];
}

interface IMenu {
    data: IMenuItem[];
    render: (menu?: IMenuItem[]) => HTMLUListElement;
    renderChildren: (item: IMenuItem) => HTMLLIElement;
}

const menu: IMenu = {
    data: [
        {
            title: 'Животные',
            items: [
                {
                    title: 'Млекопитающие',
                    items: [
                        {title: 'Коровы'},
                        {title: 'Ослы'},
                        {title: 'Собаки'},
                        {title: 'Тигры'},
                    ],
                },
                {
                    title: 'Другие',
                    items: [{title: 'Змеи'}, {title: 'Птицы'}, {title: 'Ящерицы'}],
                },
            ],
        },
        {
            title: 'Рыбы',
            items: [
                {
                    title: 'Аквариумные',
                    items: [{title: 'Гуппи'}, {title: 'Скалярии'}],
                },
                {
                    title: 'Форель',
                    items: [
                        {
                            title: 'Морская форель',
                            items: [{title: 'глубоководная'}, {title: 'простая'}],
                        },
                    ],
                },
            ],
        },
        {
            title: 'Рабы',
        },
        {
            title: 'Рабочие',
        },
    ],
    render(m) {
        const _menu = m || this.data;
        const ul: HTMLUListElement = document.createElement(
            'ul',
        ) as HTMLUListElement;
        _menu.forEach(({title, items}) => {
            ul.appendChild(this.renderChildren({title, items}));
        });
        return ul;
    },
    renderChildren({title, items}) {
        const li: HTMLLIElement = document.createElement('li') as HTMLLIElement;

        if (!Array.isArray(items)) {
            li.innerHTML = title;
            return li;
        }

        const link: HTMLAnchorElement = document.createElement(
            'a',
        ) as HTMLAnchorElement;
        link.classList.add('title');
        link.innerHTML = title;

        li.appendChild(link);
        li.appendChild(this.render(items));
        link.addEventListener('click', () => {
            li.classList.toggle('menu-open');
        });

        return li;
    },
};

let navMenuList: HTMLDivElement | null = document.querySelector('.menu');

if (navMenuList) {
    navMenuList.appendChild(menu.render());
}
