interface IMenu {
    title: string;
    items?: IMenu[];
}

const listMenu: IMenu[] = [
    {
        title: 'Животные',
        items: [
            {
                title: 'Млекопитающие',
                items: [
                    {title: 'Коровы', items: []},
                    {title: 'Ослы'},
                    {title: 'Собаки'},
                    {title: 'Кошки', items: [{title: 'Тигры'}, {title: 'Львы'}]},
                ],
            },
            {
                title: 'Другие',
                items: [
                    {
                        title: 'Насекомые',
                        items: [{title: 'Членистоногие', items: [{title: 'Тараканы'}]}],
                    },
                    {title: 'Змеи'},
                    {title: 'Птицы'},
                    {title: 'Ящерицы'},
                ],
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
                items: [{title: 'Морская форель'}],
            },
        ],
    },
];

function generateMenu(list: IMenu[]): string {
    let content = '<ul>';
    list.forEach(a => {
        const flag = a.items !== undefined && a.items.length,
            templ = flag ? `<a class='title'>${a.title}</a>${generateMenu(a.items as IMenu[])}` : `<a>${a.title}</a>`;

        content += `<li>${templ}</li>`;
    });
    content += '</ul>';
    return content;
}

let navMenuList: HTMLDivElement | null = document.querySelector('.menu');

if (navMenuList) {
    navMenuList.innerHTML = generateMenu(listMenu);
    navMenuList.onclick = (e: MouseEvent) => {
        const el: HTMLAnchorElement = e.target as HTMLAnchorElement;
        const classList = el.classList;
        if (!classList.contains('title')) {
            return;
        }
        const parentLi = el.parentNode as HTMLElement;
        parentLi.classList.toggle('menu-open');
    };
}
