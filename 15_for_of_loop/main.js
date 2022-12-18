

let phones = [];

phones = ['nokia', 'samsung', 'oneplus', 'apple'];

// console.log(phones)

// for (let i = 0; i < 4; i++)
// {
//     console.log(phones[i]);
// }

// for in loop

for (let phone of phones)
{
    // console.log(phones[phone]);
    console.log(phone);
}



const obj = {
    a : "apple",
    b : "banana",
    c : "carrot",
    d : "drink",
    e : "elachi",

};

// for (let i of obj)
// {
//     console.log(obj[i]);
// }

const str = ' I Love America';

for (let i of str){
    console.log(i);
}


const arr = [1,2,3,4,5];
for (let i of arr){
    i+=1;
    console.log(i)
}