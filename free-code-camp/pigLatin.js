/**
 Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, 
    move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.
Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
 */

function translatePigLatin(str) {
    let vowelRegEx1 = /[a|e|i|o|u]/;
    let vowelStartInfo = str.match(vowelRegEx1);
    let vowelStartIndex = vowelStartInfo ? vowelStartInfo.index : -1;
    let newStr = ''
    // console.log('startWithVowel =>', startWithVowel);
    if(vowelStartIndex === -1) {
        newStr = str + 'ay';
    } else if(vowelStartIndex === 0) {
        newStr = str + 'way'
    } else {
        let firstCharacters = str.slice(0,vowelStartIndex);
        let subStr = str.slice(vowelStartIndex);
        console.log('firstCharacters =>', firstCharacters)
        console.log('subStr =>', subStr)
        newStr = subStr + firstCharacters + 'ay';
    }
    console.log(newStr);
    return newStr;
}
translatePigLatin("rhythm");
// translatePigLatin("paragraphs")
// translatePigLatin("consonant");
// translatePigLatin("glove");
// translatePigLatin("algorithm");
// translatePigLatin("eight");
// translatePigLatin("umbrella");
// translatePigLatin("elephant");
// translatePigLatin("orange");
// translatePigLatin("ice-cream");
/**
 Test Cases
 translatePigLatin("california") should return the string aliforniacay.
Waiting:translatePigLatin("paragraphs") should return the string aragraphspay.
Waiting:translatePigLatin("glove") should return the string oveglay.
Waiting:translatePigLatin("algorithm") should return the string algorithmway.
Waiting:translatePigLatin("eight") should return the string eightway.
Waiting:Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.
Waiting:Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay.
 */