

// normal object

const obj = {a: 1, b: 2, c : 3};

// destructing assignment operator

// const {a, b, c} = obj;

// ({a, b, c} = obj);



// console.log(a);
// console.log(b);
// console.log(c);


const arra = [11, 12, 13, 14, 111115, 16, 17];

let [a, b, ...rest ] = arra;

console.log(a);
console.log(b);
console.log(rest);


const array_1 = [21, 22, 23, 24, 25];

let [e, f, ...we] = array_1;

console.log(e);
console.log(f);
console.log(we);

([i, j, k] = array_1);

console.log(i);
console.log(i);
console.log(i);
console.log(i);


let obj_2 = {a:1, b:2, c:3, d:4, e:5};

({a, b, c, d, e} = obj_2);

console.log(e);
console.log(e);
console.log(e);
console.log(e);
console.log(e);
console.log(e);
console.log(e);
console.log(e);
console.log(e);
