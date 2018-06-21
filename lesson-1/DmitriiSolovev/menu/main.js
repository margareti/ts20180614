"use strict";
var menuList = [
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
];
function render(list) {
    var content = "<ul>";
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var item = list_1[_i];
        content = content + "<li>";
        if (item.items && item.items.length > 0) {
            content = content + ("<a class=\"title\">" + item.title + "</a>");
            content = content + render(item.items);
        }
        else {
            content = content + ("<a>" + item.title + "</a>");
        }
        content = content + "</li>";
    }
    content = content + "</ul>";
    return content;
}
var navMenuList = document.querySelector(".menu");
if (navMenuList) {
    navMenuList.innerHTML = render(menuList);
    navMenuList.addEventListener("click", function (e) {
        var el = e.target;
        if (!el.classList.contains("title")) {
            return;
        }
        var parentLi = el.parentElement;
        parentLi.classList.toggle("menu-open");
    });
}
