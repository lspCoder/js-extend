function Animal(kind) {
    this.kind = kind;
    this.eat = function (food) {
        console.log(this.name + 'eat ' + food);
    }
}


function Dog(name, color, kind) {
    Animal.apply(this, arguments);      //这一句必须写在构造函数最前面,因为写在后面会让
    this.name = name;
    this.color = color;
}

var dog1 = new Dog('大黄', '黑色', '狗');
var dog2 = new Dog('小白', '白色', '狗');

console.log(dog1);
console.log(dog1.eat('骨头'));
console.log(dog1.constructor);           //Dog
console.log(dog1 instanceof Animal);        //false
console.log(dog1 instanceof Dog);         //true
console.log(dog1.eat === dog2.eat);    //false