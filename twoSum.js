/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
function twoSum(nums, target){
  for(let i = 0; i < nums.length; i++){
    for(let k = i + 1; k < nums.length; k++){
      if(nums[i] + nums[k] == target){
        return [i, k];
      }
    }
  }
}

console.log(twoSum([1, 2, 3, 4], 7)) // [2, 3]
console.log(twoSum([2, 4, 6, 8], 6)) // [0, 1]
console.log(twoSum([4, 4, 4, 4, 4, 3, 3, 4, 4], 6)) // [5, 6]

console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 39))