/**
Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, 
then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.
*/


function addTogether() {
    // console.log('arguments in addTogether function =>', arguments);
    let x = arguments[0];
    // console.log('x outside of inner function =>',x);
    if(arguments && typeof arguments[0] === 'number') {
        if(arguments.length > 1) {
            if(typeof arguments[1] === 'number') {
                return arguments[0] + arguments[1];
            } else {
                return undefined;
            }
        } else {        
            // console.log('arguments[0] =>', arguments)
            return function() {
                // console.log('INNER FUNCTION')
                if(typeof arguments[0] === 'number') {
                    return arguments[0] + x;
                } else {
                    return undefined;
                }
            }
        }    
    } else {
        return undefined;
    }
}

// console.log(addTogether(2, 3));
// console.log(addTogether(5)(7));
// console.log(addTogether(23, 30));
// console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
// console.log(addTogether(2, "3"));
// console.log(addTogether(2)([3]));
// console.log(addTogether("2", 3));
console.log(addTogether(5, undefined));

/**
Test Cases

addTogether(2, 3) should return 5.
Waiting:addTogether(23, 30) should return 53.
Waiting:addTogether(5)(7) should return 12.
Waiting:addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") should return undefined.
Waiting:addTogether(2, "3") should return undefined.
Waiting:addTogether(2)([3]) should return undefined.
Waiting:addTogether("2", 3) should return undefined.
Waiting:addTogether(5, undefined) should return undefined.

*/