/**
 * @param {string} numeral 
 * @returns {number}
 */
function romanToInteger(numeral){
  const romanNumerals = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }

  const numArray = numeral.split("");

  let total = 0;
  for (let i = 0; i < numArray.length; i++){
    if(i < numArray.length - 1 && romanNumerals[numArray[i]] < romanNumerals[numArray[i+1]]){
      total = total - romanNumerals[numArray[i]]
    }else {
      total = total + romanNumerals[numArray[i]]
    }
  }

  return total
}

console.log(romanToInteger("LVIII"))
console.log(romanToInteger("MCMXCIV"))