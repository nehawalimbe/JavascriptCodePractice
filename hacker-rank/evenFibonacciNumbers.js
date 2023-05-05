// function fibonacciSeries(n) {
//     let array = [];
//     array.push(1);
//     array.push(2);
//     // array[0] = 1;
//     // array[1] = 2;
//     let i =2 ;
//     while(1) {
//         let fibSum = array[i-1] + array[i-2];
//         if (fibSum > n) {
//             break;
//         }
//         array.push(array[i-1] + array[i-2]);            
//         i++;
//     }
//     // for (let i=2; i<=n; i++) {
//     //     let fibSum = array[i-1] + array[i-2];
//     //     if (fibSum > n) {
//     //         break;
//     //     }
//     //     array.push(array[i-1] + array[i-2]);            
//     // }
//     console.log(array);
//     let evenFib =  array.filter((num) => num%2 ==0);
//     console.log('evenFib ->', evenFib);
//     let evenFibSum = 0;
//     evenFib.forEach((num) => {
//         evenFibSum += num;
//     });
//     console.log('evenFib sum ->', evenFibSum);
// }

function fibonacciSeries(n) {
    let array = [];
    // TODO n is added after each number to check big INT
    array.push(1n);
    array.push(2n);
    // array[0] = 1;
    // array[1] = 2;
    let i = 2 ;
    let fibSum = array[i-1] + array[i-2];
    while(fibSum <= n) {
        array.push(fibSum);            
        i++;
        fibSum = array[i-1] + array[i-2];
    }
    // console.log(array);
    let evenFib =  array.filter((num) => num%2n == 0n);
    // console.log('evenFib ->', evenFib);
    let evenFibSum = 0n;
    evenFib.forEach((num) => {
        evenFibSum += num;
    });
    // console.log('evenFib sum ->', evenFibSum);
    console.log(evenFibSum.toString());
}

// fibonacciSeries(10);
fibonacciSeries(40000000000000000);