// Arrays

// v array s nazvem array mas ctyri pozice, kazda je jiny
// datovy typ. [2] je dokonce funkce, ktera vypise hello +
// name. [3] je dalsi array.

var array = new Array();
array[0] = "Adela";
array[1] = 2;
array[2] = function (name){
    console.log("hello " + name);
};
array[3] = {course: "HTML, CSS & JS"};

console.log(array);

// tady se vypise funkce a v zavorkach je promenna se jmenem!
array[2](array[0]); // vypise se "Hello Adela"

array[0] = "Coyotte";
array[2](array[0]); // vypise se "Hello Coyotte"

console.log(array[3].course); // vypise se prvni pozice treti pozice Arraye

// Zkratka pro tvorbu arraye
var names = ["Adela", "Coyotte", "Olga"];
names[100] = "Chinato";
console.log(names);

// LOOPING OVER THE NAMES.
// vypise "Hello [name]" od kazdeho jmena v arrayi names
for (var i = 0; i < names.length; i++) {
    console.log("Hello " + names[i]);
}

var names2 = ["Alberta", "Karimir", "Kumil", "Poco"];
names2.greeting = "Hi!";

var myObj = {
    nam: "Alberta",
    course: "HTML",
    platform: "Coursera"
};
for (var prop in myObj) {
    console.log(prop + ": " + myObj[prop]);
}

for (var name in names2) {
    console.log("Hello " + names2[name]);
}