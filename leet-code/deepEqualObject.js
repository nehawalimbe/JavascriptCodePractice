/**
Given two objects o1 and o2, check if they are deeply equal.

For two objects to be deeply equal, they must contain the same keys, and the associated values must also be deeply equal. Two objects are also considered deeply equal if they pass the === equality check.

You may assume both objects are the output of JSON.parse. In other words, they are valid JSON.

Please solve it without using lodash's _.isEqual() function.

 

Example 1:

Input: o1 = {"x":1,"y":2}, o2 = {"x":1,"y":2}
Output: true
Explanation: The keys and values match exactly.
Example 2:

Input: o1 = {"y":2,"x":1}, o2 = {"x":1,"y":2}
Output: true
Explanation: Although the keys are in a different order, they still match exactly.
Example 3:

Input: o1 = {"x":null,"L":[1,2,3]}, o2 = {"x":null,"L":["1","2","3"]}
Output: false
Explanation: The array of numbers is different from the array of strings.
Example 4:

Input: o1 = true, o2 = false
Output: false
Explanation: true !== false
 

Constraints:

1 <= JSON.stringify(o1).length <= 105
1 <= JSON.stringify(o2).length <= 105
maxNestingDepth <= 1000
 */

/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
// var areDeeplyEqual = function (o1, o2) {
//     if (typeof o1 === 'object' && typeof o1 === 'object') {
//         if (Array.isArray(o1) && Array.isArray(o2)) {
//             if(o1.length === o2.length) {
//                 for (let i = 0; i < o1.length; i++) {
//                     if (o1[i] !== o2[i]) {
//                         return false;
//                     }
//                 }    
//             } else {
//                 return false;
//             }
//         } else if (!Array.isArray(o1) && !Array.isArray(o2)) {
//             for (key1 in o1) {
//                 if (o2.hasOwnProperty(key1)) {
//                     if (!Object.is(o1[key1], o2[key1]) && typeof o1[key1] === 'object' && typeof o2[key1] === 'object') {
//                         return areDeeplyEqual(o1[key1], o2[key1]);
//                     } else if (o1[key1] !== o2[key1]) {
//                         return false;
//                     }
//                 } else {
//                     return false;
//                 }
//             }
//         } else {
//             return false;
//         }
//     } else {
//         return o1 === o2;
//     }
//     return true;
// };

var areDeeplyEqual = function (o1, o2) {
    if (o1 !== o2) { // matching primitives type as well as value
        if (bothAreArrays(o1, o2)) {
            return compareArray(o1, o2);
        } else if (bothAreObjects(o1, o2)) {
            return compareObjects(o1, o2);
        } else {
            return false;
        }
    }
    return true;
};

function bothAreArrays(o1, o2) {
    return Array.isArray(o1) && Array.isArray(o2);
}

function bothAreObjects(o1, o2) {
    return !Array.isArray(o1) && !Array.isArray(o2) && typeof o1 === 'object' && typeof o2 === 'object'
}

function compareArray(o1, o2) {
    if (o1.length === o2.length) {
        for (let i = 0; i < o1.length; i++) {
            console.log('i ->', i);
            console.log('o2[i] ->', o2[i]);
            console.log('o1[i] ->', o1[i]);
            if (o1[i] !== o2[i]) {
                if (bothAreArrays(o1[i], o2[i])) {
                    let result = compareArray(o1[i], o2[i]);
                    if (result === true && i === o1.length - 1) {
                        return true;
                    } else if (i === o1.length - 1) {
                        return result;
                    }
                    // return compareArray(o1[i], o2[i]);
                } else if (bothAreObjects(o1[i], o2[i])) {
                    return compareObjects(o1[i], o2[i]);
                } else {
                    return false;
                }
            }
        }
    } else {
        return false;
    }
    return true;
}

function compareObjects(o1, o2) {
    for (key1 in o1) {
        if (o2.hasOwnProperty(key1)) {
            if (o1[key1] !== o2[key1]) {
                if (bothAreArrays(o1[key1], o2[key1])) {
                    return compareArray(o1[key1], o2[key1]);
                } else if (bothAreObjects(o1[key1], o2[key1])) {
                    return compareObjects(o1[key1], o2[key1])
                } else {
                    return false;
                }
            }
        } else {
            return false;
        }
    }
    return true;
}

// console.log(areDeeplyEqual({ "x": null, "L": [1, 2, 3] }, { "x": null, "L": ["1", "2", "3"] }));
// console.log(areDeeplyEqual({"0":1}, [1]));
// console.log(areDeeplyEqual([1], [1,2]));

// console.log(areDeeplyEqual([1, 2, 3, { 'x': 4 }], [1, 2, 3, { 'x': 4 }]));
// console.log(areDeeplyEqual([[], [], [], [[[[0]]]]], [[], [], [], [[[[1]]]]]));
// console.log(areDeeplyEqual([[],[],[],[[[[0]]]]], [[],[],[],[[[[0]]]]]));
// TODO Neha above code is failing for below test-case :-
console.log(areDeeplyEqual({"x":1,"y":1,"array":[1,2,3],"next":{"x":1,"y":1,"array":[1,2,3],"next":{"x":1,"y":1,"array":[1,2,3],"next":null}}}, {"x":1,"y":1,"array":[1,2,3],"next":{"x":1,"y":1,"array":[1,2,3],"next":{"y":2,"x":1,"array":[1,2,3],"next":null}}}));




