// Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
// цифры и специальные символы должны остаться на месте
// s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
// s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
// s1tar3t 2   low5  ->  t1rat3s 2   wol5

const warpArray = (array: string[]):string[] => {
  const regExp = new RegExp('[a-zA-Z]');
  let reversedArray: string[] = array.filter((letter:string) => {
    return regExp.test(letter);
  }).reverse();

  array.forEach((letter: string, index: number) => {
    if (!regExp.test(letter)) {
      reversedArray.splice(index, 0, letter);
    }
  });
  return reversedArray;
};

const reverseString = (phrase : string):string => {
  const words:string[] = phrase.split(' ');
  const result:string[] = [];

  words.forEach((word: string):void => {
    const wordArr:string[] = word.split('');
    const warpedWord:string = warpArray(wordArr).join('');
    result.push(warpedWord);
  });
  return result.join(' ');

};

console.log(reverseString('hello'));
console.log(reverseString('s1tar3t 2 hellow'));
console.log(reverseString('s1ta$%r3t 2 hel^low'));
console.log(reverseString('s1tar3t 2   low5'));