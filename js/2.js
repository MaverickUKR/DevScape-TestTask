// Напишите функцию генератор chunkArray которая возвращает итератор возвращающий части массива указанной длинны.
// Пример:
// const iterator = chunkArray([1,2,3,4,5,6,7,8], 3);
// iterator.next() // { value: [1,2,3], done: false }
// iterator.next() // { value: [4,5,6], done: false }
// iterator.next() // { value: [7,8], done: false }
// iterator.next() // { value: undefined, done: true }

function* chunkArray(array, chunkSize) {
  for (let i = 0; i < array.length; i += chunkSize) {
    yield array.slice(i, i + chunkSize);
  }
}

const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
