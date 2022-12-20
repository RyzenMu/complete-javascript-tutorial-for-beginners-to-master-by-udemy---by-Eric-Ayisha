
let obje = {};

obje = { 
name : 'muruganantham',
id : '70792',
gender : 'male',
color : 'blue',
}


console.log(obje.gender);

//computed member access 

console.log(obje['name']);
console.log(obje['color']);
console.log(obje['id']);


// in operator

console.log('id' in obje);
console.log('color' in obje);


const car = {cname: 'BMW', model : 'i8', year : '2015'};
console.log('cname in car', 'cname' in car);


// new operator//

class Model {
    constructor(){
        name : '';
        id : 0;

    }
}


// const model1 = New Model();

// const model2 = New Model();





// // instance of operator

// const d = New Date();

// console.log(d instanceof Date);



const arry = [1, 2, 3, 4];

console.log('array', arry instanceof Array);


// delete operator

const abbbj = {a:1, b:2, c:3};

console.log('a' in abbbj);

delete abbbj.a;

console.log('a' in abbbj);



const array_2 = [1, 2, 3, 4, 5];

console.log(array_2[4]);

delete array_2[4];

console.log(array_2[4]);



// conditional operaor ?

let x3 = 34, y = 0;

x3 > 10 ? console.log('true.....') : console.log('false...........');

console.log('the value of y is ', y);


let print;

if (print){
    console.log(print);
}else {
    print = 'welcome';
    console.log(print);
}


let pri = '';

pri = pri ? pri : "jhjkhvj";

console.log(pri);

