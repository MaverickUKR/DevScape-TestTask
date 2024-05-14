// Напишите функцию nodeChildCount которая получает на вход объект типа Node и возвращает число всех вложенных нодов,
// аргумент deep указывать глубину подсчета если не указан то бесконечно.
// Пример:
// const div = document.createElement('div')
// const p = document.createElement('p')
// const span = document.createElement('span')
// p.appendChild(span)
// div.appendChild(p)

// nodeChildCount(div) // 2
// nodeChildCount(div, 1) // 1
// nodeChildCount(div, 2) // 2

function nodeChildCount(node, depth = Infinity) {
  let count = 0;

  function traverse(node, currentDepth) {
    if (currentDepth > depth) return;

    const children = node.children;
    for (let i = 0; i < children.length; i++) {
      count++;
      traverse(children[i], currentDepth + 1);
    }
  }

  traverse(node, 1);
  return count;
}

const div = document.createElement("div");
const p = document.createElement("p");
const span = document.createElement("span");
p.appendChild(span);
div.appendChild(p);

console.log(nodeChildCount(div));
console.log(nodeChildCount(div, 1));
console.log(nodeChildCount(div, 2));
