// function

function magic(){
    console.log('Hello from function');
}

magic();
magic();


function magisk() {
    return "Hello from magisk";
}

console.log(magisk);

const f = magisk;
const g = magisk();

console.log(f());
console.log(g);


const obj = { z : magisk};

console.log(obj.z());


function average(a, b){
    return (a+b)/2;
}

console.log(average(21, 23));


let x = 44;
let y = 33;

console.log(average(x, y));

function fun(x="default"){
    return `in function x : ${x}`;
}

console.log(fun());


// anonymus functions

const fu = function () {
    console.log('This is anonymus function');
}

fu();

const o = {
    bh : "we are not together",
    ch : function (){ 
        console.log('we  cannot be destroyed');
    },
    dh : function (){
        return 'this is anonymous function';
    },
    eh () {
        console.log('This is short hand');
    },
}

o.ch();
console.log(o.bh);
console.log(o.dh());
o.eh();


// Arrow notion

const eee = () => {
    console.log( 'This is arrow notion');
    console.log( 'This is arrow notion');
    console.log( 'This is arrow notion');
    console.log( 'This is arrow notion');
    console.log( 'This is arrow notion');
    

}

eee();

const eef = function (g) {
    return `the value is ${g}`;
}

console.log(eef(33));

const eeg = arg1 => console.log('This is special arrow');

eeg();

const eeh = arg1 => {
    console.log('This is ss');
    console.log('This is ss');
    console.log('This is ss');
    console.log('This is ss');

}

eeh();

const eei = (arg1, arg2) => arg1*arg2;

console.log(eei(10, 10));


// this keyword in js

const obj22 = {
    name : 'daily tution',
    printr(){
        return `hello ${this.name}`;
    }
}

console.log(obj22.printr());

const m1 = obj22.printr;

console.log(m1());