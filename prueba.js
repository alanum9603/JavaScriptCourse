Array.prototype.last = function() {
    let len = this.length;
    if (len == 0){
        return -1;
    } else {
        return this[len-1];
    }
};

let nums = [9, 5, 3, 4, null];
console.log(nums.last());