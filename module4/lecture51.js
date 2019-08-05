// Closures

function makeMultiplier (multiplier) {
    // var multiplier = 2;

    function b() {
        console.log("multiplier is: " + multiplier);
    }
    b();

    return (
        function (x){
            return multiplier * x;
        }
    );
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));

// I didn't really get closures at all

// FAKE NAMESPACES

