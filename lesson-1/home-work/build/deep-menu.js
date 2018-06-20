define(["require", "exports", "./menu-data"], function (require, exports, menu_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    drawDeepMenu();
    function getMenuHtmlRec(menu) {
        if (!menu.length) {
            return '';
        }
        var listItems = menu.reduce(function (html, menuItem) {
            return "\n            " + html + "\n            <li>\n                " + menuItem.title + "\n                " + getMenuHtmlRec(menuItem.items || []) + "\n            </li>\n        ";
        }, '');
        return "<ul>" + listItems + "</ul>";
    }
    function drawDeepMenu() {
        var ctnr = document.querySelector('.menu');
        var menuHtml = getMenuHtmlRec(menu_data_1.menuData);
        if (ctnr) {
            ctnr.innerHTML = menuHtml;
        }
    }
});
