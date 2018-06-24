
interface IMenu {
  title: string,
  items?: IMenu[]
}


const menuData: IMenu[] = [
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

function generateMenuItem(menuItem: IMenu) {
  console.log(menuItem.title)
  const ul: HTMLUListElement = document.createElement('ul');
  const li: HTMLLIElement = document.createElement('li');
  const title: HTMLHeadingElement = document.createElement('h5');
  title.innerText = menuItem.title;
  li.appendChild(title);

  if (menuItem.items) {
    li.addEventListener('click', (e: MouseEvent) => {
      if (e.target === title) {
        li.classList.toggle('open-menu');
      }
    })
    menuItem.items.forEach((item: IMenu) => {
      li.appendChild(generateMenuItem(item));
    })
  }

  ul.appendChild(li);
  return ul;
}

const generateMenu = (menuItems: IMenu[]):DocumentFragment => {
  const fragment: DocumentFragment = document.createDocumentFragment();

  menuItems.forEach((menuItem: IMenu) => {
    const generatedMenu = generateMenuItem(menuItem);
    fragment.appendChild(generatedMenu);
  })

  return fragment;
}
const menuEl: HTMLDivElement | null = document.querySelector('.menu');
if (menuEl) {
  menuEl.appendChild(generateMenu(menuData));
}


