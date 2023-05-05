/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
    let typeCntMap = {};
    for (let i=0; i<arr.length;i++) {
        let count = typeCntMap[arr[i]] || 0;
        typeCntMap[arr[i]] = count + 1;
    }
    console.log(typeCntMap)
    let sortedArray = Object.keys(typeCntMap).sort((a,b) => { 
        console.log('a =>',a);
        console.log('b =>',b);
        console.log('typeCntMap[b] =>',typeCntMap[b]); 
        console.log('typeCntMap[a] =>',typeCntMap[a]); 
        console.log('typeCntMap[b] - typeCntMap[a] =>',typeCntMap[b] - typeCntMap[a]); 
        return typeCntMap[b] - typeCntMap[a] })
    console.log(sortedArray);
    return Number(sortedArray[0]);
}
// migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]);
migratoryBirds([1, 2, 4, 3, 5, 4, 3, 2, 1, 4, 3]);
// migratoryBirds([1, 4, 4, 4, 5, 3]);
// migratoryBirds([1, 2, 3, 4, 5]);
