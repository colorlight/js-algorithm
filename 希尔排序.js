function shell(arr){
  function swap(curArr, from, to){
    let temp = curArr[from]
    curArr[from] = curArr[to]
    curArr[to] = temp
  }

  function insertToRightPlace(arr, endIndex){
    for(let i = endIndex; i > 0; i -= h){
      if(arr[i] < arr[i - h]){
        swap(arr, i, i-h)
      }else{
        break;
      }
    }
  }

  let h = 1
  let N = arr.length
  while(h < N / 3){
    h = h * 3 + 1
  }

  while(h = Math.floor(h / 3)){
    for(let i = h; i < N; i++){
      insertToRightPlace(arr, i);
    }
  }
}
