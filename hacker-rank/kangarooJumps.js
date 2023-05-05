// function kangaroo(x1, v1, x2, v2) {
//     // Write your code here
//   if (x2 > x1 && v2 > v1) {
//     return 'NO';
//   } else {
//     let k1 = x1 + v1;
//     let k2 = x2 + v2;
//     console.log('k1 =', k1);
//     console.log('k2 =', k2);
//     while (k1 > k2) {
//       k2 = k2 + v2;
//       console.log('while K2 = ', k2);
//     }
//     while (k1 < k2) {
//       k1 = k1 + v1;
//       console.log('while K1 = ', k1);
//     }
//     if(k1 === k2) {
//         return 'YES';
//     } else {
//         return 'NO';
//     }
//     //do {
//     //} while (k1 === k2);
//   }
// }
// // const result = kangaroo(x1, v1, x2, v2);
// const result = kangaroo(7271, 2211, 7915, 2050);

// console.log('result ->', result);

// function kangaroo(x1, v1, x2, v2) {
//     // Write your code here
//   if (x2 > x1 && v2 > v1) {
//     return 'NO';
//   } else {
//     let k1 = x1 + v1;
//     let k2 = x2 + v2;
//     let j1=0;
//     let j2=0;
//     console.log('k1 =', k1);
//     console.log('k2 =', k2);
//     do {
//         if (k1 > k2) {
//             k2 = k2 + v2;
//             console.log('while K2 = ', k2);
//             j2++;
//         }
//         // if(k1 === k2) {
//         //     break;
//         // }
//         if (k1 < k2) {
//             k1 = k1 + v1;
//             console.log('while K1 = ', k1);
//             j1++;
//         }
//     } while (k1 !== k2);
//     if(k1 === k2 && j1 === j2) {
//         return 'YES';
//     } else {
//         return 'NO';
//     }
//     //do {
//     //} while (k1 === k2);
//   }
// }
// // const result = kangaroo(x1, v1, x2, v2);
// // const result = kangaroo(7271, 2211, 7915, 2050);
// const result = kangaroo(28, 8, 96, 2);


// console.log('result ->', result);


function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  if((x1 > x2 && v1 > v2) || (x2 > x1 && v2 > v1)){
    return 'NO'
  }
  return ((x2 - x1)/(v1 - v2) % 1 == 0)? 'YES':'NO';
}
// const result = kangaroo(x1, v1, x2, v2);
const result = kangaroo(7271, 2211, 7915, 2050);
// const result = kangaroo(28, 8, 96, 2);


console.log('result ->', result);

// It is a kinematics problem, we have to match the 2 kangaroos, so:

// x1 + v1 * n = x2 + v2 * n to: n = (x2 - x1)/(v1 - v2)

// the remainder of the division operation must be a natural number so the expression % 1 == 0 is used to check for this condition


/**
 * Solution from Discussion board
 */

// public static String kangaroo(int x1, int v1, int x2, int v2) {
//   // Write your code here
//   String result = "";
//       if(x2 > x1 && v2 > v1){
//           result = "NO";
//       } else {
//           for(int i = 1; i <= 10000; i++) {
//               if(x1+v1*i == x2+v2*i) {
//                   result = "YES";
//                   break;
//               }
//               result = "NO";
//           }
//       }
//       return result;
//   }
