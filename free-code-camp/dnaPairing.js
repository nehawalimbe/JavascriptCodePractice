/**
 Pairs of DNA strands consist of nucleobase pairs. 
 Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.
The DNA strand is missing the pairing element. 
Write a function to match the missing base pairs for the provided DNA strand. 
For each character in the provided string, find the base pair character. Return the results as a 2d array.
For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
 */

function pairElement(str) {
    let array = str.split('');
    let dnaArray = [];
    array.forEach(element => {
        let dnaPairArray = [];
        switch (element) {
            case 'A': dnaPairArray.push(element);
                dnaPairArray.push('T');
                break;
            case 'T': dnaPairArray.push(element);
                dnaPairArray.push('A');
                break;
            case 'C': dnaPairArray.push(element);
                dnaPairArray.push('G');
                break;
            case 'G': dnaPairArray.push(element);
                dnaPairArray.push('C');
                break;
        }
        dnaArray.push(dnaPairArray)
    });
    return dnaArray;
}
  
console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));

/**
 Test Cases
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
Waiting:pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
Waiting:pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
 */
