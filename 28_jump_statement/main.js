// jump statement

// 1. break statement


// break statement closes the inner most loop immediately


for (let i = 1; i <= 10; i++) {

    if (i == 7){
        break;
    }

    if (i == 5) continue;

    console.log(i);
    
}


// label statement

let a = 1;

label : while (a == 1) {
    console.log(a);
    break label;
}


let x = 100;

while (x <= 108) {
    x++;
    if (x == 105) {
        continue;
    }
    console.log(x);
  
}


