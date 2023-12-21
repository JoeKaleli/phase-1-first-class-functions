function receivesAFunction(sum) {
    if (sum<=5) {
        return "Small"
    } else {
        return 'big'
    }
}
function sum(x,y) {
    return x+y;
}

console.log(receivesAFunction(sum(3,4)));


function returnANamedFunction() {
    function namedFunction() {
        console.log('I am very hardworking');
    };
    return namedFunction;
}
 console.log(returnANamedFunction());


 function returnsAnAnonymousFunction() {
    const doThings = function() {
        console.log("I must finish this work today");
    }();
    return doThings;
}
 console.log(returnsAnAnonymousFunction());