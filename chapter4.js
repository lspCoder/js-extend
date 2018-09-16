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

extend (Cat, Animal);

Cat.prototype.eat = function () {
    console.log('cat eat');
}

function extend (Child, Parent) {
    var F = function(){};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.superClass = Parent.prototype;
}



var cat1 = new Cat('大黄', '黄色');
var cat2 = new Cat('大花', '花色');

cat1.eat();
console.log(cat1.constructor);              //Cat
console.log(Animal.prototype.constructor == Cat.prototype.constructor);          //false
console.log(cat1.eat === cat2.eat);              //true
console.log(cat1 instanceof Cat);      //true
console.log(cat2 instanceof Cat);              //true
console.log(cat1 instanceof Animal);             //false