// IIFE stands for immediately invoked function expression

// syntax of IIFE

(function(){
    // statement;
})();


(function (){
    console.log('This is IIFE');
})();

const f = (
    function(){
        str = "This is Immediately Invoked Function Expression"
        return str;
    }
)();

console.log(f);

const l = (
    function (){
        let count = 0;
        return function (){
            return count++;
        }
    }
)();



console.log(l());
console.log(l());
console.log(l());
