function bubleSort(arr){
  for(let j = arr.length - 1; j > 0; j--){
    
    for(let i = 0; i < j; i++){
      if(arr[i] > arr[i + 1]) [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
    }
  }
  return arr
}
console.log(bubleSort([10,1,9,2,8,3,7,4,6,5]))
module.exports = bubleSort