//  원시 타입
console.log(typeof "문자열");
console.log(typeof true);
console.log(typeof 1);
console.log(typeof BigInt(1));
console.log(typeof Symbol("id"));
console.log(typeof null);
console.log(typeof undefined);

// 객체 타입
console.log(typeof new Number(1));
console.log(typeof new String(1));

console.log(typeof function () {});
console.log(typeof (() => {}));

console.log(typeof new (class A {})());