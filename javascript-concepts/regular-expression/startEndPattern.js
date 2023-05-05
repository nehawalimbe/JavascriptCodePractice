
/**
 In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. 
 Outside of a character set, the caret is used to search for patterns at the beginning of strings.
 */

 /*let firstString = "Ricky is first and can be found.";
 let firstRegex = /^Ricky/;
 firstRegex.test(firstString);
 let notFirst = "You can't find Ricky now.";
 firstRegex.test(notFirst);
 The first test call would return true, while the second would return false.*/



 /**
  Match Ending String Patterns :-

You can search the end of strings using the dollar sign character $ at the end of the regex.

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
The first test call would return true, while the second would return false.
  */

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);