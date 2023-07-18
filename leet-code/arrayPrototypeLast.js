Array.prototype.last = function () {
    // console.log(this[0]);
    return this.length > 0 ? this[this.length - 1] : -1;
};

const arr = [1, 2, 3];
console.log('last element of the array ->', arr.last()); // 3
