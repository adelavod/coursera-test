// funkce for loop

var sum = 0;
for (var i = 0; i < 10; i++) {
 console.log(i);
 sum = sum + i;
}

// object creation

var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.name = "Mark";
company.ceo.surname = "Zuckerbee";
company.year = 1999;
company["Pocet ucastniku"] = 114;

console.log(company);

// druhý způsob object creation

var company = {
 name: "Facebook",
 ceo: {
  firstname: "Mark",
  facvolor: "blue"
 },
 stock: 110
};
console.log(company);

// funkce

function multiply(x,y){
 return x * y;
}
console.log(multiply(3,4));
console.log(multiply);

// function factory
// "udelej funkci makeMultiplier, do ktere se prida
// promenna multiplier, a kazda tato vytvorena funkce
// prijme cislo x a vynasobi ho multiplierem
// a vrati vysledek teto funkce

function makeMultiplier(multiplier){
 var myFunc = function (x){
  return multiplier * x;
 };
 return myFunc;
}


var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
console.log("hello");

var multiplyBy5 = makeMultiplier(5);
var vysledek5x7 = multiplyBy5(7);
console.log(vysledek5x7);

// passing functions as arguments
function doOperationOn(y, operation) {
 return operation(y);
}
var result = doOperationOn(5, multiplyBy5);
console.log(result);

console.log("keep up!");

// u promennych v JS zalezi na velkych pismenech!

var multiplyBy1000 = makeMultiplier(1000);

var vysledek = doOperationOn(1000, multiplyBy1000);
console.log(vysledek);

// Rozdily mezi information passing by value or reference
console.log("Passing information.");
var a = 7;
var b = a;
console.log("a: " + a);
console.log("b: " + b);

b = 5;

console.log("after b update:");
console.log("a: " + a);
console.log("b: " + b);

console.log("Passing information by ref.");

var c = {x: 7};
var d = c;
console.log(c);
console.log(d);

d.x = 14;
console.log("after d update:");
console.log(c);
console.log(d);

// Reference vs value

function changePrimitive(primvalue) {
 console.log("in changePrimitive...");
 console.log("before:");
 console.log(primvalue);

 primvalue = 5;
 console.log("after:");
 console.log(primvalue);
}

var value = 7;
changePrimitive(value);
console.log("after changePrimitive, orig value:");
console.log(value);

// object
function changeObject(objvalue) {
 console.log("in change Object...");
 console.log("before:");
 console.log(objvalue);

 objvalue.x = 5;
 console.log("after:");
 console.log(objvalue);
}

var hodnota = { x: 7};
changeObject(hodnota);
console.log("after changeObject, orig value:");
console.log(hodnota);