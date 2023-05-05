/**
 You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/.

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
The first test call would return true, while the second would return false.
 */

/**
 Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.
 */

 let ohStr = "Ohhhhh no";
//  let ohRegex = /Oh{3,6}\s[a-z]/gi; // this is my solution - it is working fine here but was failing in freeCodeCamp test cases
 let ohRegex = /Oh{3,6}\sno/; // this solution works - it passes all test cases
 let result = ohRegex.test(ohStr);

 console.log('result ->', result);

 /**
  * Test Cases
  * Your regex should use curly brackets.
Passed:Your regex should not match the string Ohh no
Failed:Your regex should match the string Ohhh no
Failed:Your regex should match the string Ohhhh no
Failed:Your regex should match the string Ohhhhh no
Failed:Your regex should match the string Ohhhhhh no
Passed:Your regex should not match the string Ohhhhhhh no
  */