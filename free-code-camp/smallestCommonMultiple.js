/**
Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/
function smallestCommons(arr) {
    let maxNum = Math.max(...arr);
    let minNum = Math.min(...arr);
    let i = 2;
    let foundCommon = false;
    let multiplication;
    // console.log('maxNum =>', maxNum);
    // console.log('minNum =>', minNum);
    do {
        multiplication = maxNum * i; //doing multiplication on largest number in the array
        // console.log('multiplication =>', multiplication);
        foundCommon = false;
        for (let j = minNum; j <= maxNum; j++) { //checking if all the numbers between small to large are divisible or not
            // console.log('j =>', j);
            if (multiplication % j === 0) {
                foundCommon = true;
            } else {
                foundCommon = false;
                break;
            }
        }
        // console.log('foundCommon =>', foundCommon);
        i++;
    } while (!foundCommon);
    console.log('multiplication =>', multiplication);
    return multiplication;
}

// smallestCommons([1,5]);
// smallestCommons([23, 18]);
// smallestCommons([2, 10]);
// smallestCommons([5, 1]);
smallestCommons([1, 13]);
/**
Test Cases
Waiting:smallestCommons([1, 5]) should return a number.
Waiting:smallestCommons([1, 5]) should return 60.
Waiting:smallestCommons([5, 1]) should return 60.
Waiting:smallestCommons([2, 10]) should return 2520.
Waiting:smallestCommons([1, 13]) should return 360360.
Waiting:smallestCommons([23, 18]) should return 6056820.
 */