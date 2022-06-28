// nums1, nums2 sorted in non-decreasing order and m (# elements in nums1) n (# elements in nums2)
//Merge nums1 and nums 2 into single array sorted in non-decreasing order
//nums 1 has length of m + n (the last n elements are set to 0)
//ex nums1 = [1,2,3,0,0,0]

const mergeArrays = (nums1, m, nums2, n) => {
    //splice starting at m, n number of elements
    nums1.splice(m,n)
    //push num2 elements to num1
    nums2.forEach(num => nums1.push(num))
    // Sort nums1 in ascending order
    nums1.sort((a,b) => a - b)
    

    //Quicker edit 
    // nums1.splice(m, n, ...nums2)
}

mergeArrays([1,2,3,0,0,0], 3, [2,5,6], 3)


