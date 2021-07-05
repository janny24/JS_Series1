//variable Hoisting in js

function test(){
    console.log(x) //the result will be undifined
}test() //function called befor decleration  ==> this kind of mechanism is called hoisting

var x = 15;

// Function hoisting in js
function test1(){           //this is called named function
    console.log("hello")
}

var a=function(){           //this is called anonyms function which means nameless function  
    console.log("hi")
}

test();
a();