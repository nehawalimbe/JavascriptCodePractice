// Implement Array.prototype functions: map, reduce, filter, sort

Array.prototype.myMap = function (callback) {
    let newArray = [];
    this.forEach((item) => {
        newArray.push(callback(item));
    });
    return newArray;
}

Array.prototype.myFilter = function (callback) {
    let newArray = [];
    this.forEach((item) => {
        if(callback(item)) {
            newArray.push(item);
        }
    });
    return newArray;
}

Array.prototype.myReduce = function (callback, output) {
    output = output === null || output === undefined ? 0 : output; 
    this.forEach((item, index) => {
        output = callback(output, item)
    }); 
    return output;
}

let numtiplication = [1, 2, 3].myMap((item) => item * item);
console.log('numtiplication using myMap =>', numtiplication);

let evenNumbers = [1, 2, 3, 4, 5, 6].myFilter((item) => item % 2 === 0);
console.log('filter even numbders using myFilter =>', evenNumbers);

let sum = [11,2,3].myReduce((result, item)=> result+=item, 0)
console.log('sum of numbders using myReduce =>', sum);
