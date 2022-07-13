// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//Do this without making a copy of array



var moveZeroes = function(nums) {
   let index = 0
    for (let i = 0; i < nums.length; i++) { 
        if (nums[index] === 0) {
            nums.splice(index, 1);
            nums.push(0)
        } else {
            index++
        }
    }
     console.log(nums)
}



moveZeroes([1,0,0,0,2,3,4])