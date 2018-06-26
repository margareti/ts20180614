"use strict";
// Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
// цифры и специальные символы должны остаться на месте
// s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
// s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
// s1tar3t 2   low5  ->  t1rat3s 2   wol5
var warpArray = function (array) {
    var regExp = new RegExp('[a-zA-Z]');
    var reversedArray = array.filter(function (letter) {
        return regExp.test(letter);
    }).reverse();
    array.forEach(function (letter, index) {
        if (!regExp.test(letter)) {
            reversedArray.splice(index, 0, letter);
        }
    });
    return reversedArray;
};
var reverseString = function (phrase) {
    var words = phrase.split(' ');
    console.log('words', words);
    var result = [];
    words.forEach(function (word) {
        var wordArr = word.split('');
        var warpedWord = warpArray(wordArr).join('');
        result.push(warpedWord);
    });
    return result.join(' ');
};
console.log(reverseString('hello'));
console.log(reverseString('s1tar3t 2 hellow'));
console.log(reverseString('s1ta$%r3t 2 hel^low'));
console.log(reverseString('s1tar3t 2   low5'));
