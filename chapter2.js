function Animal() {
    this.kind = '动物';
}

Animal.prototype = {
    eat: function (food) {
        console.log(this.name + 'eat ' + food);
    }
}

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

Cat.prototype = new Animal();     //这样会把父类对象上的属性也实例一次，造成不必要的内存开销
// Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;           //这一句是为矫正constructor属性，不然会造成继承混乱

var cat1 = new Cat('大黄', '黄色');
var cat2 = new Cat('大花', '花色');

console.log(cat1.constructor);              //Cat
console.log(Animal.prototype.constructor == Cat.prototype.constructor);          //false
console.log(cat1.eat === cat2.eat);              //true
console.log(cat1 instanceof Cat);      //true
console.log(cat2 instanceof Cat);              //true
console.log(cat1 instanceof Animal);             //true