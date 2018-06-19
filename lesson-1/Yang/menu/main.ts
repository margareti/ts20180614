interface IMenu {
    title: string;
    items?: IMenu[];
}

const menu: IMenu[] = [
    {
        title: 'Животные', items: [
            {
                title: 'Млекопитающие', items: [
                    {title: 'Коровы'},
                    {title: 'Ослы'},
                    {title: 'Собаки'},
                    {title: 'Тигры'}
                ]
            },
            {
                title: 'Другие', items: [
                    {title: 'Змеи'},
                    {title: 'Птицы'},
                    {title: 'Ящерицы'},
                ],
            },
        ]
    },
    {
        title: 'Рыбы', items: [
            {
                title: 'Аквариумные', items: [
                    {title: 'Гуппи'},
                    {title: 'Скалярии'}
                ]
            },
            {
                title: 'Форель', items: [
                    {title: 'Морская форель'}
                ]
            },
        ]
    }
];


function generateMenu(list: IMenu[], className: string = 'title'): string {
    let content = `<ul>`;
    for (const a of list) {
        content += `<li><a class=${a.items ? className : ''}>${a.title}</a>`;
        if (a.items) {
            content += generateMenu(a.items);
        } else {
            content += `</li>`;
        }
    }
    content += `</ul>`;
    return content;
}


const div: HTMLDivElement | null = document.querySelector('.menu');


if (div) {
    div.innerHTML = generateMenu(menu);
    div.onclick = (ev: MouseEvent) => {
        const el: HTMLAnchorElement = ev.target as HTMLAnchorElement;
        const classList = el.classList;
        if (!classList.contains('title')) {
            return;
        }
        const parentLi = el.parentNode as HTMLLIElement;
        parentLi.classList.toggle('menu-open');
    };
}
