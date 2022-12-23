var twoSum = function (nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var n = nums[i];

        if (map[target - n] >= 0) {
            return [map[target - n], i];
        } else {
            map[n] = i; //use map to store the value and index position
        }
    }
};

// console.log(111);
// let res = twoSum([2, 5, 5, 11], 10);
// console.log(res);

function loadGrain(levels = []) {
    let size = 0;
    let min = levels[0];
    let max = Math.max(...levels);

    for (let i = 0; i < levels.length - 1; i++) {
        if (max === levels[i]) {
            console.log(max < levels[i + 1]);
            console.log(min, max, levels[i + 1]);
            (max >= levels[i + 1]) ? min = levels[i + 1] : max = levels[i + 1];
            // max = Math.max(...levels.slice(i + 1));
            max = min;
        }
        
        (min < levels[i + 1]) ? min = levels[i + 1] : size += min - levels[i + 1];
    }
    return size;
}

// let res = loadGrain([4, 1, 3]);
// let res = loadGrain([2, 1, 5, 2, 7, 4, 10]);
// let res = loadGrain([2, 0, 1, 5, 2, 7]);
// let res = loadGrain([2, 4, 2]);  
// let res = loadGrain([7, 4]);
// let res = loadGrain([]);
let res = loadGrain([
    23, 32, 10, 14, 32, 1, 21, 27,

    44, 28, 43, 18, 1, 21, 2, 6,

    31, 2, 2, 0, 10, 17, 15, 21,

    7, 4, 32, 35
]);
// let res = loadGrain([44,1, 42, 1, 40, 1, 38, 1, 34, 1, 36]);
console.log(res);
