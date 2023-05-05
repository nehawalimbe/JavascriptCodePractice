/**
 * Chunky Monkey - spilt arrays
 */

function chunkArrayInGroups(arr, size) {
    let newArray = [];
    let index = size;
    for (let i=0;i<arr.length;i=i+size) {
      let chunk = arr.slice(i,i+size);
      console.log('chunk =', chunk);
        newArray.push(chunk);
    }
    return newArray;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));