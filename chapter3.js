function Animal() {
    this.kind = '动物';
}

Animal.prototype = {
    eat: function (food) {
        console.log(this.name + 'eat ' + food);
    }
}

Animal.prototype.likes = ['eat', 'sleep', 'play'];

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

function extend(Child, Parent) {　　　　
    var p = Parent.prototype;　　　　
    var c = Child.prototype;　　　　
    for (var i in p) {　　　　　　
        c[i] = p[i];　　　　　　
    }
    c.superClass = p;　　      //存父類的方法，方便調用父親的方法
}

function deepCopy(p, c) {　　　　
    var c = c || {};　　　　
    for (var i in p) {　　　　　　
        if (typeof p[i] === 'object') {　　　　　　　　
            c[i] = (p[i].constructor === Array) ? [] : {};　　　　　　　　
            deepCopy(p[i], c[i]);　　　　　　
        } else {　　　　　　　　　
            c[i] = p[i];　　　　　　
        }　　　　
    }　　　　
    return c;　　
}

// extend(Cat, Animal);
deepCopy(Animal, Cat);

var cat1 = new Cat('大黄', '黄色');
var cat2 = new Cat('大花', '花色');

console.log(cat1.constructor); //Cat
console.log(Animal.prototype.constructor == Cat.prototype.constructor); //false
console.log(cat1.eat === cat2.eat); //true
console.log(cat1 instanceof Cat); //true
console.log(cat2 instanceof Cat); //true
console.log(cat1 instanceof Animal); //true
console.log(cat1.likes); //[ 'eat', 'sleep', 'play' ]
// console.log(cat1.likes.push('jump'));
// console.log(cat2.likes); //[ 'eat', 'sleep', 'play', 'jump' ]