import { menuData } from './menu-data'
import { menuList } from './type-defs'

drawDeepMenu()
addEventListeners()

function addEventListeners (): void {
  const listItems = document.querySelectorAll('.menu li')

  if (!listItems) {
    return
  }

  [].forEach.call(listItems, curryAddClickListener)
}

function curryAddClickListener (listItem: HTMLUListElement): void {
  listItem.addEventListener('click', listItemClickListener)
}

function drawDeepMenu (): void {
  const ctnr = document.querySelector('.menu')
  const menuHtml = getMenuHtmlRec(menuData)

  if (ctnr) {
    ctnr.innerHTML = menuHtml
  }
}

function getMenuHtmlRec (menu: menuList): string {
  if (!menu.length) {
    return ''
  }

  const listItems = menu.reduce((html, menuItem) => {
    const children = menuItem.items || []
    const final = children.length ? '' : 'final'

    return `
            ${html}
            <li class="${final}">
                <a class="title">${menuItem.title}</a>
                ${getMenuHtmlRec(children)}
            </li>
        `
  }, '')

  return `<ul>${listItems}</ul>`
}

function listItemClickListener (ev: Event): void {
  const listItem = ev.currentTarget as HTMLUListElement

  if (!listItem) {
    return
  }

  if (listItem.className.indexOf('final') === -1) {
    toggleListItem(listItem)
  }

  ev.stopPropagation()
}

function toggleListItem (listItem: HTMLUListElement): void {
  listItem.className = listItem.className.indexOf('menu-open') >= 0 ? '' : 'menu-open'
}
