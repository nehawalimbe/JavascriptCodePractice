/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of. */

function titleCase(str) {
	let array = str.split(' ');
  for(let i=0; i<array.length;i++) {
  	let firstChar = array[i][0];
    console.log(firstChar);    
    let subString = array[i].substring(1);
    console.log('subString =', subString);
    let newString = firstChar.toUpperCase() + subString.toLowerCase();
    console.log(newString);
    array[i] = newString;
  }
	return array.join(' ');
}

console.log(titleCase("I'm a little tea pot"));

/**
 Test Cases
 titleCase("I'm a little tea pot") should return a string.
Passed:titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
Passed:titleCase("sHoRt AnD sToUt") should return the string Short And Stout.
Passed:titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.
 */