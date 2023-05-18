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
        let closestNum = 1000;
        let romanNumber = 'M';
        for (let j = 0; j < romanNumberMap.length - 1; j++) {
            if (element >= romanNumberMap[j].key && element < romanNumberMap[j + 1].key) {
                closestNum = romanNumberMap[j].key;
                romanNumber = romanNumberMap[j].value;
            }
        }
        console.log('closest number for ' + element + ' is ' + closestNum);
        // if digit count is 1 

        if (element > 0) {
            if (element.toString().length === 1) {
                let count = closestNum;
                while (count < element) {
                    romanNumber += 'I';
                    count++;
                }
                console.log('roman number for last digit ->', romanNumber);
                romanArray.push(romanNumber);
            }
            // if digit count is 2

            if (element.toString().length === 2) {
                let count = closestNum;
                while (count < element) {
                    romanNumber += 'X';
                    count = count + 10;
                }
                console.log('roman number for last digit ->', romanNumber);
                romanArray.push(romanNumber);
            }
            // if digit count is 3

            if (element.toString().length === 3) {
                let count = closestNum;
                while (count < element) {
                    romanNumber += 'C';
                    count = count + 100;
                }
                console.log('roman number for last digit ->', romanNumber);
                romanArray.push(romanNumber);
            }

            // if digit count is 4

            if (element.toString().length === 4) {
                let count = closestNum;
                while (count < element) {
                    romanNumber += 'M';
                    count = count + 1000;
                }
                console.log('roman number for last digit ->', romanNumber);
                romanArray.push(romanNumber);
            }
        }

        console.log('romanArray =>', romanArray);
    });
    console.log('complete roman number =>', romanArray.join(''));
    return romanArray.join('');
}

convertToRoman(36); // XXXVI
// convertToRoman(445); // CDXLV
// convertToRoman(72); // LXXII
// convertToRoman(97); // XCVII
// convertToRoman(3999); // MMMCMXCIX
// convertToRoman(400) // CD
// convertToRoman(500) // D
// convertToRoman(501) // DI
// convertToRoman(1000) // M
// convertToRoman(1004) // MIV
// convertToRoman(1006) // MVI
// convertToRoman(1023) // MXXIII
// convertToRoman(2014) // MMXIV

/**
Test Cases
convertToRoman(2) should return the string II.
Waiting:convertToRoman(3) should return the string III.
Waiting:convertToRoman(4) should return the string IV.
Waiting:convertToRoman(5) should return the string V.
Waiting:convertToRoman(9) should return the string IX.
Waiting:convertToRoman(12) should return the string XII.
Waiting:convertToRoman(16) should return the string XVI.
Waiting:convertToRoman(29) should return the string XXIX.
Waiting:convertToRoman(44) should return the string XLIV.
Waiting:convertToRoman(45) should return the string XLV.
Waiting:convertToRoman(68) should return the string LXVIII
Waiting:convertToRoman(83) should return the string LXXXIII
Waiting:convertToRoman(97) should return the string XCVII
Waiting:convertToRoman(99) should return the string XCIX
Waiting:convertToRoman(400) should return the string CD
Waiting:convertToRoman(500) should return the string D
Waiting:convertToRoman(501) should return the string DI
Waiting:convertToRoman(649) should return the string DCXLIX
Waiting:convertToRoman(798) should return the string DCCXCVIII
Waiting:convertToRoman(891) should return the string DCCCXCI
Waiting:convertToRoman(1000) should return the string M
Waiting:convertToRoman(1004) should return the string MIV
Waiting:convertToRoman(1006) should return the string MVI
Waiting:convertToRoman(1023) should return the string MXXIII
Waiting:convertToRoman(2014) should return the string MMXIV
Waiting:convertToRoman(3999) should return the string MMMCMXCIX
 */