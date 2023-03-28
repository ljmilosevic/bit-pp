//how to write function that calculate two string?

//how to Write a function to check whether a string is blank or not?



var a = 12;
var b = 3;
var resoult

var a = 12; 
var b = 3; 
var result;

function add (a, b){ 
    return a + b;
}

result = add (); 
console.log (result);

var input = 12;
functions () {
    input = 15;
}
console log (input);


function f(){
return function (a , b){ 
return a + b ;
}
}
var result = f(); 
console.log (result);

console.log ( mul (2, 3));
var mul = function (x, y) {
    return x * y;
}

'use strict ';
var	x =	1;
function f(){
    y	=	3;
    return x * y;
}
f (4) ;
console.log (x);


var result;
function add(a, b) {
    return a + b;
}
    result = add(2);   
    console.log(result);

   
   
var input = 12;
function f() { 
    input = 15;
 }
f;
console.log(input);

(function (s) {
     console.log(s);
}) ('JS');

function f(a, b) { 
    var result = a + b;
}
console.log(f(2, 1));

var a = 10;
function f(a, b) {
a++;
b--;
console.log(a, b);
}
f(a, 2);
console.log(a);

var a = 20;
function f(n) { 
var result = a + n;
var a = 30;
return result;
}
console.log(f(5));

var input = 12;
function f() { 
    input = 15;
}
f();
console.log(input);

console.log(console.log('JS'));

var result;
function add (a, b) { 
return a + b;
}
result = add(2);
console.log(add);

var r;
r = (function (a, b) {
 return a + b;
}) (2, 11);
console.log(r);

var a = [3, 4, 1, 21];
    function addOne(array) { 
        for (var i = 0; i < array.length; i++) { 
            array[i] += 1;
    }
    }
    addOne(a);
    console.log(a);



'use strict';
var x = 1;
function f() { 
    return x * 2;
}
f(4);
console.log(x);

(function () { 
console.log('spring time');
} ) ();

function outer(x) {
    function inner (y) { 
        return y + 1;
    }
    return x + inner(x);
    }
    var result = outer (5);
    console.log(result);

    function calculate(a, b) {
        var rb = b % 10;
        var ra = a % 10;
        a = a - ra + rb; 
        b = b - rb + ra;
        console.log(a, b);
        }
        calculate(123, 45);

function transform(a, b, f) {
 var result; 
 result = f(a) + f(b); 
 console.log(result); }
transform(2, 4, function (x) { return x + 1; });

var a, b;
function calculate(a, b) {
var rb = b % 10;
var ra = a % 10;
a = a - ra + rb; 
b = b - rb + ra;
}
calculate(123, 45);
console.log(a, b);

transform (2, 4, square);
function transform(a, b, f) { 
var result;
result = f (a) + f (b); 
console.log(result); 
}
var square = function (x) { 
return x * x;
}

console.log(n);
var n =5;

var r;
(function (a, b) {
 return a + b;
}) (2, 11);
console.log(r);

console.log(sum(2, 3));
function sum(x, y) {
 return x + y + 1; 
}

function transform(a, b, f) { 
    var result;
    result = f(a) + f(b); 
    console.log(result);
}
    function double(x) { 
        return 2 * x; 
    }
    transform (2, 4, double);

var a = 20;
function f(n) {
 var result = a + n;
  a = 30;
return result;
}
console.log(f(5));


var a = 12;
var b = 3;
var result;
function add(a, b) { return a + b;
}
result = add();
console.log(result);

var input = 12;
function f() { 
    input = 15; 
}
console.log(input);

function f() { 
return function (a, b) { 
    return a + b;
}
}
var result = f()(1, 3);
console.log(result);