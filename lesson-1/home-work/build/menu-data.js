define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.menuData = [
        {
            title: 'Животные', items: [
                {
                    title: 'Млекопитающие', items: [
                        { title: 'Коровы' },
                        { title: 'Ослы' },
                        { title: 'Собаки' },
                        { title: 'Тигры' }
                    ]
                },
                {
                    title: 'Другие', items: [
                        { title: 'Змеи' },
                        { title: 'Птицы' },
                        { title: 'Ящерицы' }
                    ]
                }
            ]
        },
        {
            title: 'Рыбы', items: [
                {
                    title: 'Аквариумные', items: [
                        { title: 'Гуппи' },
                        { title: 'Скалярии' }
                    ]
                },
                {
                    title: 'Форель', items: [
                        { title: 'Морская форель' }
                    ]
                }
            ]
        }
    ];
});
