function insertion(arr){
  function swap(curArr, from, to){
    let temp = curArr[from]
    curArr[from] = curArr[to]
    curArr[to] = temp
  }

  function insertToRightPlace(arr, endIndex){
    for(let i = endIndex; i > 0; i--){
      if(arr[i] < arr[i - 1]){
        swap(arr, i, i-1)
      }else{
        break;
      }
    }
  }

  for(let i = 1, len = arr.length; i < len; i++){
    insertToRightPlace(arr, i)
  }
}
