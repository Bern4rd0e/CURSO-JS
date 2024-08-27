let a = 7;
let b = 94;

// primeira forma de troca o valor de a pelo b e b pelo a é criando uma variável temporária
// let temp = a;
// a = b;
// b = temp;

// outra forma de fazer o mesmo
[a, b] = [b, a];

console.log(a);
console.log(b);