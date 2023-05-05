function birthday(s, d, m) {
    // Write your code here
    let sumCriteriaCnt = 0;
    for (let i = 0; i < s.length; i++) {
        let sum = 0;
        for (let j = 0; j < m; j++) {
            if(i+j < s.length) {
                sum += s[i + j];
            }
        }
        console.log('sum =', sum);
        if (sum === d) {
            sumCriteriaCnt++;
        }
        console.log('sumCriteriaCnt =', sumCriteriaCnt);
    }
    return sumCriteriaCnt;
}
// birthday([1, 2, 1, 3, 2], 3, 2);
birthday([1, 1, 1, 1, 1, 1], 3, 2);
birthday([4], 4, 1);
