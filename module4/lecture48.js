// Execution context gets a variable called "this"

function Circle (radius) {
    this.radius = radius;

}
// prototype nechces mit v te puvodni funkci, protoze by se
// spustila s kazdym vznikem objectu Circle

Circle.prototype.getArea =
    function () {
        return Math.PI * Math.pow(this.radius, 2);
    };

var myCircle = new Circle(10);
console.log(myCircle);
var myOtherCircle = new Circle(20);
console.log(myOtherCircle);

// object literals and "this"
var literalCircle = {
    radius: 10,

    getArea: function () {
        console.log(this);
        return Math.PI * Math.pow(this.radius, 2);
    }
};

console.log(literalCircle.getArea());