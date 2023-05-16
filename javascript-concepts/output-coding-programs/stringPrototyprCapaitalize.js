/*
Extend String to add a capitalize method that will
Capitalize the first letter of each word, single letters must be capitalize 
var str = "this is a sample string for the exercise";
str.capitalize() === 'This Is A Sample String For The Exercise'
*/

var str = 'this is a sample string for the exercise';
// console.log(str.capitalize());
function capitalize(str) {
    let strArray = str.split(' ');
    let newArray = [];
    strArray.forEach(element => {
        let newStr = element[0].toUpperCase() + element.slice(1);
        console.log('new Str');
        newArray.push(newStr);
    });
    console.log(newArray);
    return newArray.join(' ');
}
String.prototype.capitalize = function() {
    // console.log(this.toLowerCase());
    // console.log(this);
    let strArray = this.split(' ');
    let newArray = [];
    strArray.forEach(element => {
        let newStr = element[0].toUpperCase() + element.slice(1);
        // console.log('new Str');
        newArray.push(newStr);
    });
    // console.log(newArray);
    return newArray.join(' ');
}
// capitalize(str);
// str.capitalize()
console.log(str.capitalize());