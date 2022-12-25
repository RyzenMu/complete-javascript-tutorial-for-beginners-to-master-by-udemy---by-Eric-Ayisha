// closures

function func1(){
    let a = 1;
    return function(){
        return ++a;
    }
}

const b = func1();

console.log(b());
console.log(b());
console.log(b());
console.log(b());
console.log(func1()());
console.log(func1()());
console.log(func1()());
console.log(func1()());
console.log(b());

function counter(){
    let count = 100;

    return function(){
        return count++;
    }
}

let count = counter();

console.log(count());
console.log(count());
console.log(count());


// example 2 closures

let closure;
{
    let block = "Character is closure";

    closure  = function (){
        return block
    }
}

console.log(closure());

// example 3 - closures

let l;
{
    let obj21 = {
        name : "Character",
        name2 : "is",
        name3 : "cloed",

    }
    l = ()=>{
        // return `${obj21.name} ${obj21.name2} ${obj21.name3}`;
        return obj21;
    }
}

console.log(l().name, l().name2, l().name3);