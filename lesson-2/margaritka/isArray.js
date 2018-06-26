"use strict";
//   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.
var isInArray = function (arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return !(args.some(function (item) {
        return arr.indexOf(item) === -1;
    }));
};
// const testArray1 = [1, 2, 3, 4];
//
// console.log("margarita");
// console.log(isInArray(testArray1,2, 3, 4));
//
