interface IMenu {
    title: string;
    items: string[];
}

const menuList: IMenu[] = [
    {
        title: 'JavaScript',
        items: ['Angular', 'Vue', 'React']
    },
    {
        title: 'Dart',
        items: ['Angular', 'Polymer']
    }
];

function generateMenu(list: IMenu[]): string {
    let content = `<ul>`;
    for (const a of list) {
        content += `<li><a class='title'>${a.title}</a><ul>`;
        for (const item of a.items) {
            content += `<li><a>${item}</a></li>`;
        }
        content += `</li></ul>`;
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
