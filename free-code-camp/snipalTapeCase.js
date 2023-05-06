/**
 Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 */

function spinalCase(str) {
    str = str.replace(/[A-Z]/g, upperToHyphenLower); // precede uppercase letter with - & convert uppercase letter to lower case
    console.log('string after replacing capital letters =>', str);
    str = str.replace(/_/g, ' '); // replace underscore
    str=str.split(/\W+/g);
    console.log('after splitting =>', str);
    str = str.join('-');
    console.log(str);
    return str;
}

function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? "-" : "") + match.toLowerCase();
}
spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap")
spinalCase("The_Andy_Griffith_Show")
spinalCase("Teletubbies say Eh-oh")
spinalCase("AllThe-small Things")