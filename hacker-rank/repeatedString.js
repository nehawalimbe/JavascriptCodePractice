/**
There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.
Example

s = 'abcac'
n = 10
The substring we consider is , the first  characters of the infinite string. There are  occurrences of a in the substring.

Function Description

Complete the repeatedString function in the editor below.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider

Returns:-

int: the frequency of a in the substring
*/

function repeatedString(s, n) {
    // Write your code here    
    let regEx1 = /a/g;
    let bigNum = BigInt(n);
    let str = '';
    // let str = Array(bigNum).join(s);
    // let loopCount = Math.round(n/s.length);
    // console.log('loop count ',loopCount);
    // for (let i = 0; i <=loopCount; i++) {
    //     str += s;
    // }
    do {
        str += s;
    } while(str.length <=n);
    console.log('string before slice => ', str);
    str = str.slice(0, bigNum.toString());
    console.log('string => ', str);
    console.log('a count -> ', str.match(regEx1).length);
    return str.match(regEx1).length;
}

// repeatedString('abcac', 10);
// repeatedString('aba', 10);
repeatedString('a', 1000000000000);