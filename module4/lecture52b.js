// Immediately invoked Function Eypression


(function (window) {
    var johnGreeter = {};
    johnGreeter.name = "John";
    var greeting = "hi ";
    johnGreeter.sayHi = function (){
        console.log(greeting + johnGreeter.name);
    };
    window.johnGreeter = johnGreeter;
})(window);

