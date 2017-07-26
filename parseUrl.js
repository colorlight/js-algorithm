function parseUrl(){
  let url = window.location.href
  let reg = /[?&][^?&]+=[^?&]+/g
  let arr = url.match(reg);
  let o = {}

  if (arr){
    arr.forEach(function(v,i,arr){
      let tempArr = v.substring(1).split('=')
      let key = tempArr[0]
      let value = tempArr[1]
      o[key] = value
    })
  }

  return o;
}
