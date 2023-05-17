/**
Convert the given number into a roman numeral.
Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
All roman numerals answers should be provided in upper-case.
*/

// convert number to string
// string to array
// for each number use alphabet

function convertToRoman(num) {
    let numberArray = num.toString().split('').reverse();
    console.log('numberArray =>', numberArray);
    let decimalNumberArray = [];
    let decimalPlace = 1;
    // decimalNumberArray[0] = Number(numberArray[0]);
    let romanArray = [];
    let romanNumberMap = [
        {
            key: 1,
            value: 'I'
        },
        {
            key: 4,
            value: 'IV'
        },
        {
            key: 5,
            value: 'V'
        },
        {
            key: 9,
            value: 'IX'
        },
        {
            key: 10,
            value: 'X'
        },
        {
            key: 40,
            value: 'XL'
        },
        {
            key: 50,
            value: 'L'
        },
        {
            key: 90,
            value: 'XC'
        },
        {
            key: 100,
            value: 'C'
        },
        {
            key: 400,
            value: 'CD'
        },
        {
            key: 500,
            value: 'D'
        },
        {
            key: 900,
            value: 'CM'
        },
        {
            key: 1000,
            value: 'M'
        }
    ]
    for (let i = 0; i < numberArray.length; i++) {
        console.log(numberArray[i]);
        let newNum = Number(numberArray[i]) * decimalPlace;
        decimalPlace *= 10;
        decimalNumberArray.push(newNum);
    }
    decimalNumberArray.reverse();
    console.log('decimalNumberArray ->', decimalNumberArray);
    decimalNumberArray.forEach((element) => {
        let closestNum;
        for (let j = 0; j < romanNumberMap.length - 1; j++) {
            if (element > romanNumberMap[j].key && element < romanNumberMap[j + 1].key) {
                closestNum = romanNumberMap[j].key;
            }
        }
        console.log('closest number for ' + element + ' is ' + closestNum);
        
    });
    return num;
}

convertToRoman(36); // XXXVI