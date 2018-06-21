"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var menuList = [
    {
        title: 'Животные',
        items: [
            {
                title: 'Млекопитающие',
                items: [
                    { title: 'Коровы', items: [] },
                    { title: 'Ослы' },
                    { title: 'Собаки' },
                    { title: 'Кошки', items: [{ title: 'Тигры' }, { title: 'Львы' }] },
                ],
            },
            {
                title: 'Другие',
                items: [
                    {
                        title: 'Насекомые',
                        items: [{ title: 'Членистоногие', items: [{ title: 'Тараканы' }] }],
                    },
                    { title: 'Змеи' },
                    { title: 'Птицы' },
                    { title: 'Ящерицы' },
                ],
            },
        ],
    },
    {
        title: 'Рыбы',
        items: [
            {
                title: 'Аквариумные',
                items: [{ title: 'Гуппи' }, { title: 'Скалярии' }],
            },
            {
                title: 'Форель',
                items: [{ title: 'Морская форель' }],
            },
        ],
    },
];
var MenuGenerator = /** @class */ (function () {
    function MenuGenerator() {
    }
    return MenuGenerator;
}());
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu(opt) {
        var _this = _super.call(this) || this;
        opt.element.innerHTML = _this._generateMenu(opt.menuList);
        opt.element.addEventListener('click', _this._clickHandler);
        return _this;
    }
    Menu.prototype._clickHandler = function (ev) {
        var el = ev.target;
        var classList = el.classList;
        if (!classList.contains('title')) {
            return;
        }
        var parentLi = el.parentNode;
        parentLi.classList.toggle('menu-open');
    };
    ;
    Menu.prototype._generateMenu = function (menuList) {
        var _this = this;
        return "<ul>" + menuList.reduce(function (acc, next) {
            acc += "<li><a " + (next.items ? 'class=title' : '') + "\n            " + (next.link ? 'href=' + next.link : '') + ">" + next.title + "</a>";
            if (!next.items) {
                acc += "</li>";
                return acc;
            }
            acc += "" + _this._generateMenu(next.items);
            return acc;
        }, "") + "</ul>";
    };
    ;
    return Menu;
}(MenuGenerator));
var element = document.querySelector('.menu');
if (element) {
    var nav = new Menu({
        element: element,
        menuList: menuList
    });
}
