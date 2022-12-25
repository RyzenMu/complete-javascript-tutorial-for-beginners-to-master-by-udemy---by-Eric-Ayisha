// let vs var
"use strict";


var v = 44;

console.log(v);

console.log(x);

var x = 33;

// console.log(y);

// let y = 99;

// javascript scans entire scope and assign undefined to x , this is called hoisting.

// declare for loop with var

for(var i = 0; i<=5; i++){
    console.log(i);
}

console.log('outside for loop', i);

for(let k = 0; k<=5; k++){
    console.log(k);
}

// console.log('outside for loop', k);

// Strict Mode


s = 'GLOBALsss';

console.log(s);


(function(){
    "use strict";
"use strict";
"use strict";

    st = 'this is a funcnnnnnnntion';
    console.log(st);
})();


