// variable scopes

// declare function

function func(x){
    return x/2;
}

console.log(func(13));

// console.log(x);


// Lexical Scoping

// declare two functions

function func1(){
    console.log('This is function 1');
}

function func2(){
    console.log('This is function 2');
}

func2();
func1();
func2();


// example of lexical scoping

// lexical scoping means a varible defined outside s function can be callled inside a function.




function func3(){
    console.log(`this is lexical scoping ${x}`);
    console.log(`this is lexical scoping ${y}`);

}

const y = 7;

const x = 55;




func3();

// global scoping and block scoping


let name11 = {
    name15 : "Daily"
}

let name1 = {
    name15 : "Tution",
}

function func_call(){
    return `${this.name15}`;
}

console.log(func_call.call(name11));
console.log(func_call.call(name1));

let name22 = "Daily";
let subscr = 4000;

function show(){
    return `${name22} you have ${subscr} subscribers`;
}


function make(){
    return `Thank you ${subscr} subscribers`;
}

console.log(show());
console.log(make());


const tutor = {
    name : "Daily",
    subs : 4000,
}

function show1(){
    return `${tutor.name} you have ${tutor.subs} subscribers`;
}


function make1(){
    return `Thank you ${tutor.subs} subscribers`;
}

console.log(show1());
console.log(make1());


// block scoping

{
    let a22 = 5;
    console.log(a22);
}

// console.log(a22);




