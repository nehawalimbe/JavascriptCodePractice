// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

// Example


// There are two numbers between the arrays:  and .
// , ,  and  for the first value.
// ,  and ,  for the second value. Return .

// Function Description

// Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.

// getTotalX has the following parameter(s):

// int a[n]: an array of integers
// int b[m]: an array of integers
// Returns

// int: the number of integers that are between the sets
// Input Format

// The first line contains two space-separated integers,  and , the number of elements in arrays  and .
// The second line contains  distinct space-separated integers  where .
// The third line contains  distinct space-separated integers  where .

// Constraints

// Sample Input

// 2 3
// 2 4
// 16 32 96
// Sample Output

// 3
// Explanation

// 2 and 4 divide evenly into 4, 8, 12 and 16.
// 4, 8 and 16 divide evenly into 16, 32, 96.

// 4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.

function getTotalX(a, b) {
    // Write your code here
    let aCopy = a.slice('');
    let bCopy = b.slice('');
    aCopy.sort();
    bCopy.sort();
    console.log('aCopy ->', aCopy);
    console.log('bCopy ->', bCopy);
    let aMinNum = a[0];
    // let aMaxNum = a[a.length -1];
    // let bMinNum = b[0];
    let bMaxNum = b[b.length - 1];
    let bDividesArray = [];
    let aDividesArray = [];
    // get divides of each elements from first array
    for (let i = aMinNum; i <= bMaxNum; i++) {
        let dividesAll = 0;
        for (let j = 0; j < b.length; j++) {
            if (b[j] % i === 0) {
                dividesAll++;
            }
        }
        if (dividesAll === b.length) {
            bDividesArray.push(i);
        }
    }
    console.log('bDividesArray ->', bDividesArray);
    for (let i = 0; i < bDividesArray.length; i++) {
        let dividesAll = 0;
        for (let j = 0; j < a.length; j++) {
            if (bDividesArray[i] % a[j] === 0) {
                dividesAll++;                
            }
        }
        if (dividesAll === a.length) {
            aDividesArray.push(bDividesArray[i]);
        }
    }
    console.log('aDividesArray ->', aDividesArray);
    return aDividesArray.length;
}

// function getTotalX(a, b) {
//     let validCount = 0;
    
//     for (let x = 1; x <= 100; x++) {
//         if (a.every(int => (x % int == 0))) {
//             if (b.every(int => (int % x == 0))) {
//                 console.log('x =>', x);
//                 validCount++;
//             }
//         }
//     }
//     console.log('validCount ->', validCount);
//     return validCount;
// }

getTotalX([2, 4], [16, 32, 96]);
// getTotalX([3, 4], [24, 48]);
// getTotalX([1], [100]);
// getTotalX([2], [20, 30, 12]);



