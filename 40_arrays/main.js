// Arrays

// simple array

const array = [1, 2, 3, "a", "b", true];

const arr5 = [
    {name : "Tutorials", videos: 150},
    [
        function (){
            return 'containing function';
    }
    ],
    "three",
];

console.log(arr5[1][0]());
console.log(arr5[0].videos);


// add and remove array elements

// pop, push, shift and unshift

const array3 = [1, 2, 3, 4, 5, 6, 7];
console.log(array3);
array3.pop();
console.log(array3);
console.log(array3.push(8));
console.log(array3);
array3.shift();
console.log(array3);
array3.unshift(10);
console.log(array3);
console.log(array3.length);

// concat two arrays

const array4 = [,'a', 'b', 'c', 'd', 'e'];

const array5 = array3 + array4;

console.log(array5);

console.log(array5.concat('f', 'g', 'h', 'i'));

console.log(array5);

console.log(array3.slice(0, 7));

console.log(array3.slice(-1));

const array6 = [1, 6, 12, 18];

array6.splice(2, 0, 23, 24);

console.log(array6);

array6.splice(2, 2);

console.log(array6);













