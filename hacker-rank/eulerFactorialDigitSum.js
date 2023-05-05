/**
 * Project Euler #20: Factorial digit sum
 */

function processData(input) {
    //Enter your code here
    for(let i=0; i<input.length;i++) {
    	let num = input[i];
      let factotial = fact(num);
      console.log('factotial =', factotial);
      let factotialArr = factotial.toString().split('');
      console.log('factotialArr =', factotialArr);
      add(factotialArr);
    }
}

function fact(n) {
	if(n<=1) {
  	return 1;
  } else {
  	return n*fact(n-1);
  }
}

function add(arr) {
let addition = 0;
	for(let i=0;i<arr.length;i++) {
  	addition += Number(arr[i]);
  }
  console.log('sum =', addition);
}

processData([3,6]);