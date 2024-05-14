// Создайте прототип который удаляет дубликаты из строки. Пример:

// let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double"
// x.removeDuplicate()
// // Int32 Double

String.prototype.removeDuplicate = function () {
  const words = this.split(" ");
  const uniqueWords = [...new Set(words)];
  return uniqueWords.join(" ");
};

let x =
  "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double";
console.log(x.removeDuplicate());
