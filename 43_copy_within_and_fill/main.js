// copy withiin

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.copyWithin(2, 6, 9);

console.log(arr);

// copy within replaces the existing values in the array.


const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr1.copyWithin(1, -1);

console.log(arr1);

// fill method

// arr.fill(value, start, end);

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr2.fill(33, 4, 8);
console.log(arr2);

arr2.fill("d");

console.log(arr2);


