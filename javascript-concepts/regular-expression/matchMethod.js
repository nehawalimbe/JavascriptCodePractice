/**
 "Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
Here the first match would return ["Hello"] and the second would return ["expressions"].

Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

'string'.match(/regex/);
/regex/.test('string');

It resutns null if string is not having word matching to regular expresison
 */

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);
console.log('positive result ->', result);

let extractStr1 = "Extract the word is not there.";
result = extractStr1.match(codingRegex);
console.log('negative result ->', result);