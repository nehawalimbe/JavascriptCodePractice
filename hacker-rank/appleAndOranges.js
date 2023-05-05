/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
  let applesArray = apples.map(apple => a + Number(apple));

  let newAppleArray = [];
  apples.forEach((apple) => {
    let num = Number(apple);
    let addition = num + a;
    newAppleArray.push(addition);
  });
  console.log("newAppleArray", newAppleArray);
  console.log("applesArray", applesArray);
  let orangesArray = oranges.map(orange => b + Number(orange));
//   console.log("orangesArray = ",orangesArray);
  let appleCnt = 0;
  let orangeCnt = 0;
  applesArray.forEach((apple) => {
    if (apple >= s && apple <= t) {
      appleCnt++;
    }
  });

  orangesArray.forEach((orange) => {
    if (orange >=s && orange <= t) {
      orangeCnt++;
    }
  });
  console.log(appleCnt);
  console.log(orangeCnt);
    
}



// countApplesAndOranges(s, t, a, b, apples, oranges);
let apples = appleStr.split(' ');
// console.log(apples.length);
let oranges = orangeStr.split(' ');
// console.log(oranges.length);
// countApplesAndOranges(45626, 74469, 25955, 88171, apples, oranges);