//slide
function sum(a, b) {
    var c = a + b;
    return c;
}
console.log(sum(9, 2));

console.log()
//task 1
function max(a, b) {
        if(a>b) {
            return a;
        }
        else{
            return b;
        } 
    }

console.log(max(7, 13));

console.log()
//task 2
function odd(a) {
    if(a%2==0) {
        return "even";
    } else { 
        return "odd";
    }
}

console.log(odd(54));

console.log()
//task 3
function digit(a) {
    if(a>99) {
        return "yes";
    } else {
        return "no";
    }
}

console.log(digit(236));

//jednostavnije resenje 
function checkDigitLength(a) {
    return (a + '').length;
}

var digitLength = checkDigitLength(332);
if (digitLength >= 3) {
    console.log('The digit length is', digitLength);
}


console.log()
//task 4
function mean(a, b, c, d) {
    result=(a+b+c+d)/4;
    return result;
}

console.log(mean(50, 25, 15, 100));

//jednostavnije resenje
function arithmeticMean() {
    var args = arguments;
    var result = 0;

    for (var i = 0; i < args.length; i++) {
        var value = args[i + ''];
        result += value;
    }

    return result / args.length;
}

console.log(arithmeticMean(3, 4, 5, 18, 22))


console.log();
//task 5

var c="\*";
var d=5;

function printFullRow(a, b) {
    result="";
    for(var i=0; i<b; i++) {
         result+=a;
    }
    console.log(result);
}

function printFirstAndLast(a, b) {
    result="";
    for(var i=0; i<b; i++) {
        if(i==0 || i==b-1) {
            result+=a;
        } else {
            result+=" ";
        }
    }
    console.log(result)
}

function printSquare(a, b) {
    for(var i=0; i<b; i++) {
        if(i==0 || i==b-1) {
            printFullRow(a, b)    
        } else {
            printFirstAndLast(a, b)   
        }
    }
}

printSquare(c, d);
printSquare(c, 9);
console.log(printSquare("+",8));

function square(a) {
    var result = '';
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a; j++) {
            if (i == 0 || i == (a - 1)) {
                result += '*'
            } else {
                if (j == 0 || j == (a - 1)) {
                    result += '*'
                } else {
                    result += ' '
                }
            }

        }

        result += '\n';
    }

    console.log(result);
}

square(5);
square(8);


console.log();
//task 6

var m=5;
var g=3;
var l=7;
var p="\*";

function printFullRow(a, b) {
    result="";
    for(var i=0; i<b; i++) {
         result+=a;
    }
    console.log(result);
}

function draw(a, b, c, d) {
    printFullRow(d, a);
    printFullRow(d, b);
    printFullRow(d, c);
}

draw(m, g, l, p);
draw(9, 5, 4, "+");



console.log();
//task 7

var l=235;

function digitNum(a) {
    var result="" + a;
    return result.length;
}

console.log("Number " + l + " has " + digitNum(l) + " digits.");
console.log("Number " + 23 + " has " + digitNum(23) + " digits.");

console.log();
//task 8
var b=[2, 4, 7, 8, 7, 7, 1];
var c=7;


function NumApp(a, e) {
    var result=0;
    for(var i=0; i<a.length; i++) {
        if(a[i]===e) {
            result++
        } 
    } 
    return result;
} 

console.log(NumApp(b, c));
console.log(NumApp([3, 6, 8, 4, 7, 3 , 3], 3));

console.log();
//task 9
var b=[2, 4, 7, 8, 7, 7, 1];

function oddSum(a) {
    var result=0;
    for(var i=0; i<a.length; i++) {
        if(a[i]%2!=0) {
            result+=a[i];
        }
    }
    return result;
}

console.log(oddSum(b));

console.log()
//task 10
var b="TamarA"
var c="a"

function Appa(a, b) {
    var result=0;
    a = a.toLowerCase();
    for(var i=0; i<a.length; i++) {
        if(a[i]===b) {
            result++
        }
    }
    return result;
}

console.log(Appa(b, c));

console.log();
//task 11
var a="abc";
var b=4;

function repeat(c, d) {
    var result="";
    while(d>0) {
        result+=c;
        d--;
    }
    return result
}

console.log(repeat(a, b));

//drugacije resenje
var a="abc";
var b=4;

function concatString(c, d) {
    var result = "";
    for(var i=0; i<d; i++) {
        result += c;
    }
    return result;
}

console.log(concatString(a, b));

var a = [2, 3, 4, 5] ; 
var b = [2, 3, 4, 5] ;

console.log(a === b);

var x = 5 ;
try {
if (x < 10) {
throw new Error('Wrong input!')
}
log(x) ;
} catch (error) { console.log(error.message);
}



var a = 34;
function transform(a) {
a = a * 2;
}
transform(a);
console.log(a);

var a = {x: 4, y: 11 }; 
var b = {x: 4, y: 11 };
Object.prototype.formatting = function () { return "{x:"+this.x + "," + this.y + "}"; };
console.log(a.formatting() == b.formatting());

'use strict';
var obj = {x: 5, y: 13 };
obj.z = 20;
console.log(obj);


var a = 34;
function transform(a) { return a * 2;
}
transform(a);
console.log(a);

var coffee = 'cappuccino';
var superCoffee = {
    coffee: 'espresso',
    strength: 3,
    orderCoffee: (function () { 
        return coffee;
})()
};
console.log(orderCoffee);





var coffee = 'cappuccino';
var superCoffee = { 
    coffee: 'espresso', 
    strength: 3, 
    orderCoffee: (function () {
return coffee;
})()
};
console.log(superCoffee.orderCoffee());

var x = 5;
try {
X *= 3;
if (x < 10) {
throw new Error('Wrong input!');
}
console.log(x);
} catch (error) {
console.log(e.message);
} finally { 
    console.log('Done!');
}

var coffee = 'cappuccino';
function orderCoffee() { 
    console.log(this.coffee); }
orderCoffee();

var array = ['a', 'b', 'c'];
function transform(array) {
for (var i = 0; i < array.length; i++) { array[i] = array[i].toUpperCase();
}
}
transform(array); 
console.log(array);

var x = 5;
try {
X *= 3;
if (x < 10) {
throw new Error('Wrong input!');
}
console.log(x);
} catch (error) {
console.log(e.message);
}

var a = [2, 3, 4, 5] ;
 var b = a;
console.log(a === b);

var result;
 result = String.prototype.concat.call("abc", "ABC"); 
console.log(result);


var obj =Object.create({ product: 'mug' }); 
obj.color = 'red';
obj.product = 'teacup';
console.log(obj.product);


var coffee = 'cappuccino';
var superCoffee = { coffee: 'espresso', 
strength: 3,
 orderCoffee: function () { 
    console.log(this.coffee);
}
};
superCoffee.orderCoffee();

var result = Array.prototype.index0f.call([1, 3, 5, 2, 11], 3); 
console.log(result);

var obj = {x: 5, y: 13 }; 
console.log(obj.x);

var obj = {x: 10, y: 5 };
function transform(o) {
0.x += 2;
0.2 = 10;
}
transform(obj);
console.log(obj.x + obj.z);


var mondayToDo = { activity: 'do the dishes', song: 'lalala', sing: function () { console.log(this.song);
}
};
var tuesdayToDo = { activity: 'do the loundary', song: '00000',
};
mondayToDo.sing.call(tuesdayToDo);


var obj = {x: 10, y: 5 };
function transform(o) {
0.x += 2;
0.2 = 10;
}
transform(obj);
console.log(obj.x + obj.z);

var result = Array.prototype.index0f.call([1, 3, 5, 2, 11], 3); 
console.log(result);

var x = 5;
try {
x *= 3;
if (x < 10) {
throw new Error('Wrong input!');
}
console.log(x);
} catch (error) {
console.log(e.message);
}

var coffee = 'cappuccino';
function orderCoffee() { 
    console.log(this.coffee);
 }
orderCoffee();


var x = 5;
try {
x *= 3;
if (x < 10) {
throw new Error('Wrong input!');
}
console.log(x);
} catch (error) {
console.log(e.message);
} finally { console.log('Done!');
}

var coffee = 'cappuccino';
var superCoffee = { coffee: 'espresso', strength: 3, orderCoffee: (function () {
return coffee;
})()
};
console.log(superCoffee.orderCoffee());

function orderCoffee() { console.log(this.coffee); }
orderCoffee();
var coffee = 'espresso';

var obj = {x: 5, y: 13 }; console.log(obj.z);

var coffee = 'cappuccino';
var superCoffee = {
strength: 3,
coffee: 'espresso', orderCoffee: (function () { return coffee;
})()
};
console.log(orderCoffee);


Object.prototype.day = 'Monday'; var plan = { activity: 'JS codding' }; console.log(plan.day);

var a = [2, 3, 4, 5]; 
var b= [2, 3, 4, 5];
console.log(a === b);