const obj = function (name){
    this.name = name
}

const obj1 = new obj('张三');

console.log(obj1 instanceof obj)
console.log(obj1 instanceof Object)