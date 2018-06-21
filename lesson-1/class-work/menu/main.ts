const menuData = [
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
            title: 'Тигры'
          }
        ]
      }, {
        title: 'Другие',
        items: [
          {
            title: 'Змеи'
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


type itemMenu = {
  title: string,
  items?: itemMenu[],
};

const renderList = (list: itemMenu[]): HTMLUListElement => {
  const ul: HTMLUListElement = document.createElement('ul');
  list.forEach((item) => {
    ul.appendChild(renderItem(item));
  });
  return ul;
};

const renderItem = (item: itemMenu): HTMLLIElement => {
  const li: HTMLLIElement = document.createElement('li');
  const link: HTMLAnchorElement = document.createElement('a');
  link.innerText = item.title;
  li.appendChild(link);
  if (item.hasOwnProperty('items') && Array.isArray(item.items)) {
    li.appendChild(renderList(item.items));
    link.classList.add('title');
    link.addEventListener('click', () => {
      li.classList.toggle('open');
    });
  }
  return li;
};

const navMenuList: HTMLDivElement | null = document.querySelector('.menu');

if (navMenuList) {
  const rendered = renderList(menuData);
  navMenuList.appendChild(rendered);
}
