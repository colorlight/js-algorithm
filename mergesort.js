function mergesort(arr){
  let aux = []

  function merge(arr, low, hi, mid){
    for(let i = low; i < hi; i++){
      aux[i] = arr[i]
    }

    for(let k = low,i = low, j = mid; k < hi; k++){
      if(i >= mid) {
        arr[k] = aux[j++]
      }else if(j >= hi){
        arr[k] = aux[i++]
      }else if(aux[i] < aux[j]){
        arr[k] = aux[i++]
      }else{
        arr[k] = aux[j++]
      }
    }
  }

  function startMerge(arr, low, hi){
    if(low === hi - 1){
      return
    }
    let mid = Math.floor((low + hi) / 2)
    startMerge(arr, low, mid)
    startMerge(arr, mid, hi)
    merge(arr, low, hi, mid)
  }

  startMerge(arr, 0, arr.length)
}
