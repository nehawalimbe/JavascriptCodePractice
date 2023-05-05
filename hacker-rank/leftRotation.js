function rotateLeft(d, arr) {
    // Write your code here
    for(let i=d; i>0 ;i--) {
        let num = arr.shift();
        arr.push(num);
    }
    console.log(arr);
    return arr;
}
rotateLeft(2, [1,2,3,4,5]);