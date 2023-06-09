/* Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
 */
function repeatStringNumTimes(str, num) {
    let newStr = '';
    while (num > 0) {
        newStr += str;
        num--;
    }
    return newStr;
}

console.log(repeatStringNumTimes("abc", 3));
  /**
   Test Cases
   repeatStringNumTimes("*", 3) should return the string ***.
Passed:repeatStringNumTimes("abc", 3) should return the string abcabcabc.
Passed:repeatStringNumTimes("abc", 4) should return the string abcabcabcabc.
Passed:repeatStringNumTimes("abc", 1) should return the string abc.
Passed:repeatStringNumTimes("*", 8) should return the string ********.
Passed:repeatStringNumTimes("abc", -2) should return an empty string ("").
Passed:The built-in repeat() method should not be used.
Passed:repeatStringNumTimes("abc", 0) should return "".
   */