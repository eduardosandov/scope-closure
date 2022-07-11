// Variables

var a; //declarando la variable a

var b = 'b'; //declaramos y asignamos

b = 'bb'; //reasignacion

var a = 'aa'; // redeclaracion

//global scope

var fruit = 'Apple';//global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();


function countries(){
    country = 'Mexico';
    console.log(country);
}
countries();
console.log(country);