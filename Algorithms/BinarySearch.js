// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Iterative Solution

const binarySearch = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        //calc the mid point
        let mid = Math.floor((start + end) / 2)

        if (nums[mid] === target) { 
            return mid;
        // if the mid val is less than target, new start is to the right of mid (second half) 
        } else if (nums[mid] < target) {
            start = mid + 1
        // if mid val is greater than target, new end is to the left of mid (first half) 
        } else {
            end = mid - 1
        }
    }

    return -1
}

console.log(binarySearch([1,3,5,7,8,9], 4))




