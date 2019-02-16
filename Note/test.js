const obj = function (name){
    this.name = name
}

const obj1 = new obj('张三');

console.log(obj.prototype === Object.getPrototypeOf(obj1));
console.log(obj1.constructor === obj);

console.log(obj.prototype.__proto__ === Object.prototype)
console.log(Object.prototype === Function.prototype.__proto__ )
