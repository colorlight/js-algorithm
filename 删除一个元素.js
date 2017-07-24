function delEle(arr, ele){
  for(let i = arr.length; i > 0; i--){
    if(ele === arr[i]){
      arr.splice(i,1)
    }
  }
}
