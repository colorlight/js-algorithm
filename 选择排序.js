function select(arr){
  function findMin(curArr){
    let min = curArr[0];
    let index = 0;
    curArr.forEach(function(v,i){
      if(v < min){
        min = v
        index = i;
      }
    })
    return index;
  }

  function swap(curArr, from, to){
    let temp = curArr[from]
    curArr[from] = curArr[to]
    curArr[to] = temp
  }

  for(let i = 0, len = arr.length; i < len; i++){
    let minIndex = findMin(arr.slice(i)) + i;
    swap(arr, i, minIndex);
  }
}
