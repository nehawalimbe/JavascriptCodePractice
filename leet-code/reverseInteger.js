/**
Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1
*/
var reverse = function(x) {
    let reversedNumber = x.toString().replace('-', '').split('').reverse();
    
    reversedNumber = Number(reversedNumber.join(''));
    let numberSign = Math.sign(x);
    console.log('numberSign =>', numberSign)
    reversedNumber *= numberSign;
    console.log('reversedNumber ->', reversedNumber);
    console.log(2 ** 31);
    let lower32BitNumber = (2 ** 31) * -1;
    let upper32BitNumber = (2 ** 31) - 1;
    console.log('lower32BitNumber ->', lower32BitNumber);
    console.log('upper32BitNumber ->', upper32BitNumber);
    if(reversedNumber < lower32BitNumber || reversedNumber > upper32BitNumber) {
        return 0;
    }
    return reversedNumber;
};
// reverse(123);
// reverse(-123);
// reverse(120);
console.log(reverse(1534236469));
