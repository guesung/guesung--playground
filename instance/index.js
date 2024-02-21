console.log((() => {}) instanceof Object); // true
console.log(new Number(1) instanceof Object); // true
console.log(new String(1) instanceof Object); // true
console.log(new Boolean(true) instanceof Object); // true
console.log(new Object() instanceof Object); // true
console.log(new Array() instanceof Object); // true
console.log(new RegExp() instanceof Object); // true
console.log(new Date() instanceof Object); // true
console.log(new Error() instanceof Object); // true
console.log(new Function() instanceof Object); // true
console.log(new Promise(() => {}) instanceof Object); // true
console.log(new Map() instanceof Object); // true

console.log(Object.prototype.toString.call(new Number(1))); // [object Number]
console.log(Object.prototype.toString.call(new String(1))); // [object String]
console.log(Object.prototype.toString.call(new Boolean(true))); // [object Boolean]
console.log(Object.prototype.toString.call(new Object())); // [object Object]
console.log(Object.prototype.toString.call(new Array())); // [object Array]
console.log(Object.prototype.toString.call(new RegExp())); // [object RegExp]
console.log(Object.prototype.toString.call(new Date())); // [object Date]
console.log(Object.prototype.toString.call(new Error())); // [object Error]
console.log(Object.prototype.toString.call(new Function())); // [object Function]
console.log(Object.prototype.toString.call(new Promise(() => {}))); // [object Promise]
console.log(Object.prototype.toString.call(new Map())); // [object Map]
