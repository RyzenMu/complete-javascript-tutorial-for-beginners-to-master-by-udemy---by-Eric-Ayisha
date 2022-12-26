// Map

const arr = [1, 2, 3, 4];

const map1 = arr.map((x) => x**3);

console.log(map1);

console.log(arr);

// example 2

const cart = [
    {
        product : "laptop",
        price : 55000,
},
{
    product : "mobile",
    price : 15000,
},
]

const product = cart.map(x => x.product);

console.log(product)
