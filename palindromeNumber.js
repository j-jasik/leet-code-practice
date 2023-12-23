/**
 * 
 * @param {number} x
 * @returns {boolean} 
 */
function palindromeNumber(x){
  let stringX = x.toString()
  let arrayX = stringX.split("")
  let reversedArray = arrayX.reverse()
  let joinedArrayX = reversedArray.join("")
  if(stringX == joinedArrayX){
    return true
  }else{
    return false
  }
}

console.log(palindromeNumber(121)) // expect true
console.log(palindromeNumber(123454321)) // expect true
console.log(palindromeNumber(-131)) // expect false
console.log(palindromeNumber(12345)) // expect false