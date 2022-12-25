// declare function

function func(){
    return `hello ${this.name}`;
}


//declare object
const obj = {
    name : "Daily",
    name1 : "Tution",
    name2 : "Tutorials",
}

//declare object
const obj1 = {
    name : "Tutionsssssssss",
    name1 : "Tution",
    name2 : "Tutorials",
}

console.log(func.call(obj));
console.log(func.call(obj1));
console.log(func());



