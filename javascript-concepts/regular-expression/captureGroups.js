/**
The example below matches a word that occurs thrice separated by spaces:
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
 */

/**
 * Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.


 */
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Change this line
let result = reRegex.test(repeatNum);

/**
 * Test Cases
 * Your regex should use the shorthand character class for digits.
Passed:Your regex should reuse a capture group twice.
Passed:Your regex should match the string 42 42 42.
Passed:Your regex should match the string 100 100 100.
Passed:Your regex should not match the string 42 42 42 42.
Passed:Your regex should not match the string 42 42.
Passed:Your regex should not match the string 101 102 103.
Passed:Your regex should not match the string 1 2 3.
Passed:Your regex should match the string 10 10 10.
Passed:Your regex should not match the string 42\t42\t42.
Passed:Your regex should not match the string 42  42  42.
 */