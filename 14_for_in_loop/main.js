

let phones = [];

phones = ['nokia', 'samsung', 'oneplus', 'apple'];

// console.log(phones)

// for (let i = 0; i < 4; i++)
// {
//     console.log(phones[i]);
// }

// for in loop

for (let phone in phones)
{
    console.log(phones[phone]);
    console.log(phone);
}



const obj = {
    a : "apple",
    b : "banana",
    c : "carrot",
    d : "drink",
    e : "elachi",

};

for (let i in obj)
{
    console.log(i, obj[i]);
}