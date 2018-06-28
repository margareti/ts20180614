//   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.


const isInArray = (arr:number[], ...args: number[]):boolean => {
  return !(args.some((item: number):boolean => {
    return arr.indexOf(item) === -1;
  }));
}


// const testArray1 = [1, 2, 3, 4];
//
// console.log("margarita");
// console.log(isInArray(testArray1,2, 3, 4));
//
