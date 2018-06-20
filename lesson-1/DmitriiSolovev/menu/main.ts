interface IMenu {
  title: string
  items?: IMenu[]
}

const menuList: IMenu[] = [
  {
    title: "Животныеt",
    items: [
      {
        title: "Млекопитающие",
        items: [
          { title: "Коровы" },
          { title: "Ослы" },
          { title: "Собаки" },
          { title: "Тигры" },
        ],
      },
      {
        title: "Другие",
        items: [{ title: "Змеи" }, { title: "Птицы" }, { title: "Ящерицы" }],
      },
    ],
  },
  {
    title: "Рыбы",
    items: [
      {
        title: "Аквариумные",
        items: [{ title: "Гуппи" }, { title: "Скалярии" }],
      },
      {
        title: "Форель",
        items: [{ title: "Морская форель" }],
      },
    ],
  },
]

function render(list: IMenu[]): string {
  let content = "<ul>"

  for (const item of list) {
    content = content + "<li>"

    if (item.items && item.items.length > 0) {
      content = content + `<a class="title">${item.title}</a>`
      content = content + render(item.items)
    } else {
      content = content + `<a>${item.title}</a>`
    }

    content = content + "</li>"
  }

  content = content + "</ul>"

  return content
}

const navMenuList: HTMLDivElement | null = document.querySelector(".menu")

if (navMenuList) {
  navMenuList.innerHTML = render(menuList)

  navMenuList.addEventListener("click", (e: MouseEvent) => {
    const el = e.target as HTMLAnchorElement

    if (!el.classList.contains("title")) {
      return
    }

    const parentLi = el.parentElement as HTMLLIElement
    parentLi.classList.toggle("menu-open")
  })
}
