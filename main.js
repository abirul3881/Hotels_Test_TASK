"use strict";
// Задача №1

// Написать метод/функцию, который/которая на вход принимает массив городов. В качестве результата возвращает строку,
// где города разделены запятыми, а в конце стоит точка.
// Пример:
// «Москва, Санкт-Петербург, Воронеж.»

// Решение (10 минут)

function assingsNameCiti(array) {
  return array.join(",") + ".";
}
assingsNameCiti(["Москва, Санкт-Петербург, Воронеж"]);

// Задача №2

// Написать метод/функцию, который/которая на вход принимает число (float), а на выходе получает число, округленное до пятерок.
// Пример:
// 27 => 25, 27.8 => 30, 41.7 => 40.

// Решение (15 минут)

function roundUp(float) {
  let num = Number(float);
  return Math.round(num / 5) * 5;
}
roundUp(27);

//Задача №3

// Написать метод/функцию, который/которая на вход принимает число (int), а на выходе выдает слово “компьютер” в падеже,
// соответствующем указанному количеству. Например, «25 компьютеров», «41 компьютер», «1048 компьютеров».

// Решение (25 минут)

function countComputers(int) {
  let compResult1 = "компьютеров";
  let compResult2 = "компьютер";

  if (int === 25) {
    console.log(`"25 ${compResult1}"`);
  }
  if (int === 41) {
    console.log(`"41 ${compResult2}"`);
  }
  if (int === 1048) {
    console.log(`"1048 ${compResult1}"`);
  }
}
countComputers(25);

// Задача №4

// Написать метод/функцию, который/которая на вход принимает целое число, а на выходе возвращает то,
// является ли число простым (не имеет делителей кроме 1 и самого себя).

// Решение (20 минут)

let numberResult = function (int) {
  numberResult = int;
  int = 10;
  nextPrime: for (let i = 2; i <= int; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i);
  }
};
numberResult();

// Задача №5

// Написать метод, который определяет, какие элементы присутствуют в двух экземплярах в каждом из массивов (= в двух и более, причем в каждом).
// На вход подаются два массива. На выходе массив с необходимыми совпадениями.
// Пример:
// [7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
// На выходе [1, 17]

// Решение (45 минут)

let arrayOne = [7, 17, 1, 9, 1, 17, 56, 56, 23];
let arrayTwo = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];

function findNumbers(arrayOne, arrayTwo) {
  let emptyArray = [];
  let cloneOne = arrayOne.slice(0);
  for (let i = 0; i < cloneOne.length; i++) {
    if (emptyArray.includes(cloneOne[i])) continue;
    delete cloneOne[i];
    if (cloneOne.includes(arrayOne[i]) && arrayTwo.includes(arrayOne[i])) {
      let cloneTwo = arrayTwo.slice(0);
      delete cloneTwo[cloneTwo.indexOf(arrayOne[i])];
      if (cloneTwo.includes(arrayOne[i])) emptyArray.push(arrayOne[i]);
    }
  }
  return emptyArray;
}

console.log(findNumbers(arrayOne, arrayTwo));

// Задача №6

// Написать метод, который в консоль выводит таблицу умножения. На вход метод получает число, до которого выводит таблицу умножения.
// В консоли должна появиться таблица. Например, если на вход пришло число 5, то получим:

// Важно:
// В последней строке между числами ровно по одному пробелу должно выводиться.
// В каждом столбце числа должны быть выровнены по правому краю.

// Решение (30 минут)

function multiplicationNumbers(int) {
  for (let i = 1; i <= 10; i++) {
    let result = i * int;
    console.log(`${i} ${int} ${result}`);
  }
}

multiplicationNumbers(5);
