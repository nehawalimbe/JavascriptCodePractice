/**
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    let regEx=/\w+$/g;
    let result = s.match(regEx)
    return result[0].length;
    // let lastWord = result[result.length -1]
    // return lastWord.length;
};

// var lengthOfLastWord = function(s) {
//     let regEx=/\s+/g;
//     // s.replace('  ', '-');
//     s = s.trim();
//     let result = s.split(regEx);
//     console.log('split result -> ', s.split(regEx));
//     // return s.match(regEx);
//     let lastWord = result[result.length -1]
//     return lastWord.length;
// };

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));