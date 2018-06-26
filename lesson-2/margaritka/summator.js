"use strict";
// Написать функцию summator(), которая сумирует переданые ей аргументы.
// Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
var reducer = function (accumulator, currentValue) {
    var a = accumulator;
    var b = currentValue;
    function getNum(item) {
        return parseInt(item, 10);
    }
    if (typeof a === 'string') {
        a = isNaN(getNum(a)) ? 0 : getNum(a);
    }
    if (typeof b === 'string') {
        b = isNaN(getNum(b)) ? 0 : getNum(b);
    }
    return typeof b === 'number' ? a + b : a;
};
//НЕ ПОНИМАЮ почему тут нельзя написать :number => для возвращаемого значения
var summator = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(reducer);
};
console.log(summator("rita", "1", 100, 7, 'b'));
