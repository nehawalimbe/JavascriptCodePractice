function hourglassSum(arr) {
    // Write your code here
    let rows = arr[0].length;
    console.log('rows ->', rows);
    let hourGlassArray = [];
    for (let i = 0; i < rows - 2; i++) {
        for (let j = 0; j < rows - 2; j++) {
            let hourGlassSum = 0;
            console.log('Hourglass at starting at ['+i+']'+'['+j+']');
            hourGlassSum += arr[i][j];
            hourGlassSum += arr[i][j+1];
            hourGlassSum += arr[i][j+2];
            hourGlassSum += arr[i+1][j+1];
            hourGlassSum += arr[i + 2][j];
            hourGlassSum += arr[i + 2][j+1];
            hourGlassSum += arr[i + 2][j+2];
            console.log('hourGlassSum =>', hourGlassSum);
            hourGlassArray.push(hourGlassSum);
        }
    }
    console.log('hourGlassArray ->', hourGlassArray);
    return Math.max(...hourGlassArray);
}
hourglassSum(
    [[1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]]
);
// hourglassSum(
//     [[1, 1, 1, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0],
//     [1, 1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0]]
// );
