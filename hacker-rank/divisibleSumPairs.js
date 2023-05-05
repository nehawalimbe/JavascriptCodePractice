/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let sumPairCnt = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            let sum = ar[i] + ar[j];
            if (sum % k === 0) {
                console.log('sum pair -> a['+i+'] + [' + j+']');
                sumPairCnt++;
            }
        }
    }
    console.log('sumPairCnt ->', sumPairCnt);    
}
divisibleSumPairs(6,3, [1, 3, 2, 6, 1, 2]);