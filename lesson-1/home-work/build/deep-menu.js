define(["require", "exports", "./menu-data"], function (require, exports, menu_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    drawDeepMenu();
    addEventListeners();
    function addEventListeners() {
        var listItems = document.querySelectorAll('.menu li');
        if (!listItems) {
            return;
        }
        [].forEach.call(listItems, curryAddClickListener);
    }
    function curryAddClickListener(listItem) {
        listItem.addEventListener('click', listItemClickListener);
    }
    function drawDeepMenu() {
        var ctnr = document.querySelector('.menu');
        var menuHtml = getMenuHtmlRec(menu_data_1.menuData);
        if (ctnr) {
            ctnr.innerHTML = menuHtml;
        }
    }
    function getMenuHtmlRec(menu) {
        if (!menu.length) {
            return '';
        }
        var listItems = menu.reduce(function (html, menuItem) {
            var children = menuItem.items || [];
            var final = children.length ? '' : 'final';
            return "\n            " + html + "\n            <li class=\"" + final + "\">\n                <a class=\"title\">" + menuItem.title + "</a>\n                " + getMenuHtmlRec(children) + "\n            </li>\n        ";
        }, '');
        return "<ul>" + listItems + "</ul>";
    }
    function listItemClickListener(ev) {
        var listItem = ev.currentTarget;
        if (!listItem) {
            return;
        }
        if (listItem.className.indexOf('final') === -1) {
            toggleListItem(listItem);
        }
        ev.stopPropagation();
    }
    function toggleListItem(listItem) {
        listItem.className = listItem.className.indexOf('menu-open') >= 0 ? '' : 'menu-open';
    }
});
