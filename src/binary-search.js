function binarySearch(arr, elem) {
  let index = -1
  let startIndex = 0
  let endIndex = arr.length - 1

  while(startIndex <= endIndex){
    const indexMiddle = startIndex + Math.ceil((endIndex - startIndex)/2)
    if (arr[indexMiddle] == elem) return indexMiddle
    if (arr[indexMiddle] < elem){
      startIndex = indexMiddle + 1 
    }
    else {
      endIndex = indexMiddle - 1
    }
  }
  
  return index
}

module.exports = binarySearch;