/**
 If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g

Then check whether the desired string groups are in the test string by using the test() method.

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
The test method here would return true.
 */

/**
 Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.

Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.


 */
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;
let result = myRegex.test(myString);
/**
 Hints
 Hint 1
Use a|b to check for either a or b.

Hint 2
Your regex should use mixed grouping like /P(engu|umpk)in/g.

Hint 3
Use .* to allow for middle names.
 */

/**
 * Test Cases
 * Your regex myRegex should return true for the string Franklin D. Roosevelt
Passed:Your regex myRegex should return true for the string Eleanor Roosevelt
Passed:Your regex myRegex should return false for the string Franklin Rosevelt
Passed:Your regex myRegex should return false for the string Frank Roosevelt
Passed:Your regex myRegex should return false for the string FranklinRoosevelt
Passed:Your regex myRegex should return false for the string EleanorRoosevelt
Passed:You should use .test() to test the regex.
Passed:Your result should return true.
 */