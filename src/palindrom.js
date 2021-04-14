function isPalindrom(string){
  const arrFromString = [...string]
  const middleLength = Math.floor(arrFromString.length / 2)+1
  for(let i = 0; i <  middleLength; i++){
    if(arrFromString[i].toUpperCase() !== arrFromString[arrFromString.length - 1 - i].toUpperCase())return false
  }
  return true
}
module.exports = isPalindrom;