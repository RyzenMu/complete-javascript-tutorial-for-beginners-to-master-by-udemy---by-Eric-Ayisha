// declare object

const o = {
    w1 : "Daily",
    w2 : "Tution",
    w3 : "Tutorials",
}

// function to get data

// function getData(x){
//     console.log(x.w1);
//     console.log(x.w2);
//     console.log(x.w3);

// }

// getData(o);

function getData({w1, w2, w3}){
    return `${o.w1} ${o.w2} ${o.w3}`;
}

console.log(getData(o));

const obj11 = {
    w1 : "w3",
    w2 : "schools",
    w3 : "tutorials",
}

function func11({w1, w2, w3}){
    return `${w1} ${w2} ${w3}`;
}

console.log(func11(obj11));

// destructing assignment

const obj_33 = {
    a1 : 1,
    a2 : 2,
    a3 : 5,
};

const {a1, a2, a3} = obj_33;
// ({a1, a2, a3} = obj_33);


console.log(a1);
console.log(a2);
console.log(a3);

const list1 = ['a', 'b', 'c', 'd'];

const [w1, w2, ...w3] = list1;

console.log(w1);
console.log(w2);
console.log(w3);


// destructuring arguments

const obj_44 = {
    w1 : "Hello",
    w2 : "Destructing",
    w3 : "Arguments",
};

function destr({w1, w2, w3}){
    return `${w3} ${w2} ${w1}`;
} 

console.log(destr(obj_44));

// destructing arguments with array

const array_2 = ['hello', 'chennai', 'iam', 'back'];

function destr_array([a1, a2, a3, a4]){
    return `${a4} ${a2} ${a3} ${a1}`;
}

console.log(destr_array(array_2));


