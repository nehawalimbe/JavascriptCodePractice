function sumFibs(num) {
    let fibArray = [];
    fibArray[0] = 0;
    fibArray[1] = 1;
    let sum = fibArray[0] + fibArray[1];
    for (let i = 2; sum <= num; i++) {
        fibArray[i] = sum;
        sum = fibArray[i] + fibArray[i - 1];
    }
    console.log(fibArray);
    let oddFibSim = 0;
    fibArray.forEach((element) => {
        if(element%2 ===1) {
            oddFibSim += element;
        }
    });
    console.log('oddFibSim =>', oddFibSim);
    return oddFibSim;
}

// sumFibs(4);
// 0,1,1,2,3
// sumFibs(10);
// 0,1,1,2,3,5,8
// sumFibs(1)
// sumFibs(1000)
// sumFibs(4000000)
// sumFibs(4)
// sumFibs(75024)
sumFibs(75025)
/**
 Test Cases
Waiting:sumFibs(1) should return a number.
Waiting:sumFibs(1000) should return 1785.
Waiting:sumFibs(4000000) should return 4613732.
Waiting:sumFibs(4) should return 5.
Waiting:sumFibs(75024) should return 60696.
Waiting:sumFibs(75025) should return 135721.
 */