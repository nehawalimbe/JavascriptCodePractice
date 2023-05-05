/* Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1). */
function getIndexToIns(arr, num) {
    let index = 0;
    // arr = [...new Set(arr)]
    arr.sort((a,b) => {
        return a-b;
    });
    console.log('arr =>', arr);
    console.log('number =>', num);
    if(arr[arr.length -1] < num) {
      return arr.length;
    }
    for(let i=0; i<arr.length-1;i++) {
      if((arr[i] < num && arr[i+1] > num) ) {
        index = i+1;
      } else if(arr[i] === num) {
        index = i;
      }
    }
    console.log('index =>',index);
    return index;
  }
  
  /* console.log(getIndexToIns([40, 60], 50)); */
  /* console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); */
  /* console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); */
  console.log(getIndexToIns([5, 3, 20, 3], 5));
  
  
  console.log(getIndexToIns([2, 5, 10], 15));