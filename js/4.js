// Сделать функцию mapper которая на вход принимает набор правил для преобразования данных.
// Формат правила:
// [<поле которое преобразовуем>, <новое название поля>[, <функция для преобразования значения>]]
// Пример:
// let testData3 = [{"name":"Vasya","email":"vasya@example.com","age":20,"skills":{"php":0,"js":-1,"madness":10,"rage":10}},{"name":"Dima","email":"dima@example.com","age":34,"skills":{"php":5,"js":7,"madness":3,"rage":2}},{"name":"Colya","email":"colya@example.com","age":46,"skills":{"php":8,"js":-2,"madness":1,"rage":4}},{"name":"Misha","email":"misha@example.com","age":16,"skills":{"php":6,"js":6,"madness":5,"rage":2}},{"name":"Ashan","email":"ashan@example.com","age":99,"skills":{"php":0,"js":10,"madness":10,"rage":1}},{"name":"Rafshan","email":"rafshan@example.com","age":11,"skills":{"php":0,"js":0,"madness":0,"rage":10}}]

// const mapRules = [
//   ["name", "n", (value) => value.toLowerCase()],
//   ["age", "a"]
// ]

// testData3.map(mapper(mapRules)) // [{"n":"vasya","a":20},{"n":"dima","a":34},{"n":"colya","a":46},{"n":"misha","a":16},{"n":"ashan","a":99},{"n":"rafshan","a":11}]

function mapper(rules) {
  return function (item) {
    const newItem = {};
    for (const [originalKey, newKey, transformFunc] of rules) {
      const value = item[originalKey];
      if (transformFunc && typeof transformFunc === "function") {
        newItem[newKey] = transformFunc(value);
      } else {
        newItem[newKey] = value;
      }
    }
    return newItem;
  };
}

let testData3 = [
  {
    name: "Vasya",
    email: "vasya@example.com",
    age: 20,
    skills: { php: 0, js: -1, madness: 10, rage: 10 },
  },
  {
    name: "Dima",
    email: "dima@example.com",
    age: 34,
    skills: { php: 5, js: 7, madness: 3, rage: 2 },
  },
  {
    name: "Colya",
    email: "colya@example.com",
    age: 46,
    skills: { php: 8, js: -2, madness: 1, rage: 4 },
  },
  {
    name: "Misha",
    email: "misha@example.com",
    age: 16,
    skills: { php: 6, js: 6, madness: 5, rage: 2 },
  },
  {
    name: "Ashan",
    email: "ashan@example.com",
    age: 99,
    skills: { php: 0, js: 10, madness: 10, rage: 1 },
  },
  {
    name: "Rafshan",
    email: "rafshan@example.com",
    age: 11,
    skills: { php: 0, js: 0, madness: 0, rage: 10 },
  },
];

const mapRules = [
  ["name", "n", (value) => value.toLowerCase()],
  ["age", "a"],
];

const transformedData = testData3.map(mapper(mapRules));
console.log(transformedData);
