// https://www.hackerrank.com/challenges/weighted-uniform-string/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

/*
 * Complete the 'weightedUniformStrings' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY queries
 */

function weightedUniformStrings(s, queries) {
    // Write your code here
    let alphabetMap = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8,
        'i': 9,
        'j': 10,
        'k': 11,
        'l': 12,
        'm': 13,
        'n': 14,
        'o': 15,
        'p': 16,
        'q': 17,
        'r': 18,
        's': 19,
        't': 20,
        'u': 21,
        'v': 22,
        'w': 23,
        'x': 24,
        'y': 25,
        'z': 26,
    }
    let weightArray = [];
    let weightMap = {};
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let alphabetRegex = new RegExp("" + char + "+", "gi");
        let result = s.match(alphabetRegex);
        // console.log('regular expression ->', result);
        result = result[0];
        if (!weightMap.hasOwnProperty(result)) {
            do {
                console.log('result -> ', result);
                let lenOfResult = result.length;
                let charWeight = alphabetMap[char];
                let totalWeight = lenOfResult * charWeight;
                weightArray.push(totalWeight);
                weightMap[result] = totalWeight;
                result = result.slice(0, lenOfResult - 1);
                // console.log('new result ->', result);
            } while (result.length > 0);

        }
    }
    // console.log(weightArray);
    let resultArray = [];
    for (let i = 0; i < queries.length; i++) {
        resultArray.push('No');
        if (weightArray.includes(queries[i])) {
            resultArray[i] = 'Yes';
        }
    }
    // console.log(resultArray);
    return resultArray;
}

// approach
// check character 
// add weight to map / array
// check next character 
// check if it is same as previous one
// if yes then add weights of the consecutive characters and add it to map / array

weightedUniformStrings('abccddde', [1, 3, 12, 5, 9, 10]);
// weightedUniformStrings('abbcccdddd', [1, 7, 5, 4, 15])