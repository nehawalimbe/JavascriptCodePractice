/**
 Find the missing letter in the passed letter range and return it.
 If all letters are present in the range, return undefined.
 */

function fearNotLetter(str) {
    let testStr = 'abcdefghijklmnopqrstuvwxyz';
    let missingLetter;
    let firstCharacter = str.match(/^[a-z]/);
    console.log('firstCharacter ->', firstCharacter[0]);
    let indexOfFirstCharacter = testStr.indexOf(firstCharacter[0]);
    console.log('indexOfFirstCharacter ->', indexOfFirstCharacter);
    for (let i = indexOfFirstCharacter; i < testStr.length; i++) {
        if(!str.includes(testStr[i])) {
            missingLetter = testStr[i];
            break;
        }
    }
    return missingLetter;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

/**
fearNotLetter("abce") should return the string d.
Waiting:fearNotLetter("abcdefghjklmno") should return the string i.
Waiting:fearNotLetter("stvwx") should return the string u.
Waiting:fearNotLetter("bcdf") should return the string e.
Waiting:fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
 */

