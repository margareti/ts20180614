interface IMenu {
    title: string;
    items?: IMenu[];
}

const menuList: IMenu[] = [
    {
        title: 'Животные',
        items: [
            {
                title: 'Млекопитающие',
                items: [
                    {title: 'Коровы'},
                    {title: 'Ослы'},
                    {title: 'Собаки'},
                    {title: 'Тигры'}
                ]
            },
            {
                title: 'Другие',
                items: [{title: 'Змеи'}, {title: 'Птицы'}, {title: 'Ящерицы'}]
            }
        ]
    },
    {
        title: 'Рыбы',
        items: [
            {
                title: 'Аквариумные',
                items: [{title: 'Гуппи'}, {title: 'Скалярии'}]
            },
            {
                title: 'Форель',
                items: [{title: 'Морская форель'}]
            }
        ]
    }
];

function generateMenu(list: IMenu[]): string {
    let content = `<ul>`;
    for (const menuItem of list) {
        content += '<li>';
        if ((menuItem.items && menuItem.items.length > 0) || false) {
            content += `<a class="title">${menuItem.title}</a>`;
            content += generateMenu(menuItem.items);
        } else {
            content += `<a>${menuItem.title}</a>`;
        }

        content += `</li>`;
    }
    content += `</ul>`;
    return content;
}

let navMenuList: HTMLDivElement | null = document.querySelector('.menu');

if (navMenuList) {
    navMenuList.innerHTML = generateMenu(menuList);
    navMenuList.onclick = (ev: MouseEvent) => {
        const el: HTMLAnchorElement = ev.target as HTMLAnchorElement;
        const classList = el.classList;
        if (!classList.contains('title')) {
            return;
        }
        const parentLi = el.parentNode as HTMLLIElement;
        parentLi.classList.toggle('menu-open');
    };
}
