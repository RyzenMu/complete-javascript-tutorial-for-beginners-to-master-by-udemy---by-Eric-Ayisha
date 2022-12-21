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