/**
Flatten a nested array. You must account for varying levels of nesting.
 */

function steamrollArray(arr) {
    // let newArr = arr.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
    // newArr = newArr.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
    // let newArr = getElements(arr);
    // console.log('newArr =>', newArr);
    let newArr = getArrayElements(arr);
    console.log('newArr =>', newArr);
    return newArr;
}
function getArrayElements(arr) {
    return arr.reduce((resultArray, element) => {
      return resultArray.concat(Array.isArray(element) ? getArrayElements(element) : element);
    }, []);
}


// steamrollArray([1, [2, [5], [[6]]], [3, [[4]]]]);
/**
Passes :-
resultArray            element
[]              1
[1]             [2, [5], [[6]]]
[1]             2
[1,2]           [5]
[1,2]           5
[1,2,5]         [[6]]
[1,2,5]         [6]
[1,2,5]         6
[1,2,5,6]       [3, [[4]]]
[1,2,5,6]       3
[1,2,5,6,3]     [[4]]
[1,2,5,6,3]     [4]
[1,2,5,6,3]     4
[1,2,5,6,3,4]
 */


// steamrollArray([1, [2], [3, [[4]]]]);
// steamrollArray([[["a"]], [["b"]]])
// steamrollArray([1, [], [3, [[4]]]])
// steamrollArray([1, {}, [3, [[4]]]])

/**
Test Cases
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
Waiting:steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
Waiting:steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
Waiting:steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
Waiting:Your solution should not use the Array.prototype.resultArray() or Array.prototype.flatMap() methods.
Waiting:Global variables should not be used.
 */