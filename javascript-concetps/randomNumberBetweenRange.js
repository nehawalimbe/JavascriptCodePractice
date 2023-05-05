/* Generate whole Number between 0 to 19 using Math.random() */
let randomNum = Math.random();
console.log('randomNum =', randomNum);
let multiplication = randomNum * 20;
console.log('multipication =', multiplication);
let floorValue = Math.floor(multiplication);
console.log('floorValue =', floorValue);

let max = 90
let min = 85;
console.log("Getting a random number between two values =",Math.random() * (max - min) + min);

console.log("Getting a random integer between two values =", Math.floor(Math.random() * (max - min) + min));
// The maximum is exclusive and the minimum is inclusive


console.log("Getting a random integer between two values, inclusive =", Math.floor(Math.random() * (max - min + 1) + min));
// The maximum is inclusive and the minimum is inclusive

