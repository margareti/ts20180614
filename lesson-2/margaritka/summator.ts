// Написать функцию summator(), которая сумирует переданые ей аргументы.
// Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

const reducer = (accumulator: (string|number), currentValue:(string|number)):number => {
  let a = accumulator;
  let b = currentValue;

  function getNum(item:string):number {
    return parseInt(item, 10);
  }

  if (typeof a === 'string') {
    a = isNaN(getNum(a)) ? 0 : getNum(a);
  }
  if (typeof b === 'string') {
    b = isNaN(getNum(b)) ? 0 : getNum(b);
  }
  return typeof b === 'number' ? a + b : a;
}

//НЕ ПОНИМАЮ почему тут нельзя написать :number => для возвращаемого значения
const summator = (...args:(string|number)[]):number => {
  return (<number>args.reduce(reducer));
}

console.log(summator("rita", "1", 100, 7, 'b'));