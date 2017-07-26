function quickSort(arr){
  function swap(arr, i, j){
    let temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
  }
  function partition(arr, low, hi){
    let flag = arr[low]
    let j = low,
        k = hi
    while(true){
      while(true){
        if(arr[++j] < flag && j < hi){
          j++
        }else{
          break
        }
      }
      while(true){
        if(arr[k] >= flag && k > low ){
          k--
        }else{
          break
        }
      }
      //这个是核心， 一定要判断为j >= k
      //[5,1,2,3,6,7,8] j回到6， k到3
      if(j >= k){
        break
      }else{
        swap(arr, j, k)
      }
    }
    //要返回k值不能返回j值
    swap(arr, low, k)
    return k
  }

  function startQuickSort(arr, low, hi){
    if(hi <= low){
      return
    }
    let j = partition(arr, low, hi)
    startQuickSort(arr, low, j - 1)
    startQuickSort(arr, j + 1, hi)
  }

  startQuickSort(arr, 0, arr.length - 1)
}
