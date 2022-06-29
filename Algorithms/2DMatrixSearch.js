//Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix.

/// Not optimal O(m * n)
const search2DMatrix = (matrix, target) => {
    for (let i = 0; i < matrix.length; i++) {
        let subArray = matrix[i]
        for (let j = 0; j < subArray.length; j++) {
            if (subArray[j] === target) {
                return true
            } 
        }
    }
    return false
}
// console.log(search2DMatrix([[1,2,3,4], [10,11,12,13], [14,15,16,17]], 11))


//Binary search

const optimalMatrixSearch = (matrix, target) => {
   
   //Search each row beginning and end vals
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i]
        //Binary search that row if target is within vals
        if (row[0] <= target && row[row.length - 1] >= target) {
            let start = 0;
            let end = row.length - 1;
            while (start <= end) {
                let mid = Math.floor((start + end) / 2);
                if (row[mid] === target) {
                    return true
                } else if (row[mid] < target) {
                    start = mid + 1
                } else {
                    end = mid - 1
                }
            }
        }
    }
    return false
}

// console.log(optimalMatrixSearch([[1,2,3,4], [10,11,12,13],[14,16,17,18]], 10))


