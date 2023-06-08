function pangrams(s) {
    // Write your code here
    let testString = 'abcdefghijklmnopqrstuvwxyz';
    let newStr = s.toLowerCase();
    for (let i = 0; i < testString.length; i++) {
        if (!newStr.includes(testString[i])) {
            return 'not pangram'
        }
    }
    return 'pangram';
}

// console.log(pangrams('We promptly judged antique ivory buckles for the next '))
console.log(pangrams('We promptly judged antique ivory buckles for the next prize'))